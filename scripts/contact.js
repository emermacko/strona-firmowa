const PHONE_REGEX = /^(\+48)?\d{3}(\-| *)?\d{3}(\-| *)?\d{3}$/;
const EMAIL_REGEX = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validators = [validateMinLength, validatePhone, validateEmail];

$(window).on('load', function(){
    const $form = $(document.forms['contact-form']);

    $('input, textarea').bind('blur', function(){
        validateAll($form);
    });

    $('input, textarea').bind('keyup', function () {
        validateAll($form, false);
    });
});

function validateInput($element) {
    return validators.every(validate => {
        const result = validate($element);

        return result === true || result === null;
    });
}

function validateAll($form, sideEffects = true) {
    const elements = [...$form[0].elements];

    const isValid = elements.every((element) => {
        const $element = $(element);
        
        const isValid = validateInput($element);
        if (sideEffects) {
            if (isValid) {
                $element.parent().removeClass('invalid');
            } else {
                $element.parent().addClass('invalid');
            }
        }

        return isValid;
    });

    const fieldsAreNotEmpty = elements.every((element) => {
        if (element.required) {
            return element.value.length !== 0
        }

        return true;
    });

    if (isValid && fieldsAreNotEmpty) {
        $('.input[type=submit]').removeAttr('disabled');
    } else {
        $('.input[type=submit]').attr('disabled', 'disabled');
    }
}

function validateMinLength($element) {
    const minLength = $element.data('min-length');
    const length = $element.val().length;
    
    if (minLength === undefined || length === 0) {
        return null;
    }

    return length >= minLength;
}

function validatePhone($element) {
    const value = $element.val();

    if ($element.data('validate') !== 'phone' || value.trim().length === 0) {
        return null;
    }
    
    return PHONE_REGEX.test(value);
}

function validateEmail($element) {
    const value = $element.val();

    if ($element.data('validate') !== 'email' || value.length === 0) {
        return null;
    }

    return EMAIL_REGEX.test(value);
}