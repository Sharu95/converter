$(document).ready(function(){
    var key = 'none',
        hex = "F",
        decimal="0",
        binary="0",
        oct="7";
    var $pressed = null;

    $('.button-style').click(function(){
        resetAll();
        $('#input-value').val('');

        key = $(this).text();
        key = key.trim();
        $('#input-value').attr('placeholder',key+' value');
    });

    $('#submit-form').submit(function(e){
        e.preventDefault();
    });

    $('#input-value').keypress(function (e) {
        if (e.which == 13) {
            converter();
            return false;    //<---- Add this line
        }
    });

    $('.button-style').click(function(){
        if ($pressed === null) {
            $pressed = $(this);
            $pressed.addClass('clicked-button').removeClass('deep-orange');
        }
        if (!($pressed === $(this))) {
            $pressed.removeClass('clicked-button').addClass('deep-orange');
            $(this).addClass('clicked-button').removeClass('deep-orange');
            $pressed = $(this);
        }
    });

    $('#submit-btn').click(function(){
        converter();
    });

    function converter(){
        var value = $('#input-value').val().trim();
        if (value.length == 0 || key == 'none') {
            $('#submit-error').css('display','inline');
        }else{
            $('#submit-error').css('display','none');

            switch (key) {
                case 'Hex':
                    hex = value;
                    convertHex(hex);
                    break;
                case 'Octal':
                    oct = value;
                    convertOctal(oct);
                    break;
                case 'Binary':
                    binary = value;
                    convertBinary(binary)
                    break;
                case 'Decimal':
                    decimal = value
                    convertDecimal(decimal);
                    break;
            }
        }
    }

    function resetAll(){
        $('#hex-convert, #dec-convert, #bin-convert, #oct-convert').text('------');
    }

    function setValues(hex,decimal,binary,oct){

        $('#hex-convert').text(hex.toUpperCase());
        $('#dec-convert').text(decimal);
        $('#bin-convert').text(binary);
        $('#oct-convert').text(oct);

        var all = $('#hex-convert, #dec-convert, #bin-convert, #oct-convert');
        if (hex === "NAN" || hex === "NaN") {
            all.text("Not valid");
        }
        if (decimal === "NAN" || decimal === "NaN") {
            all.text("Not valid");
        }
        if (binary === "NAN" || binary === "NaN") {
            all.text("Not valid");
        }
        if (oct === "NAN" || oct === "NaN") {
            all.text("Not valid");
        }
    }

    function convertHex(value){
        value = parseInt(value,16);
        oct = value.toString(8);
        binary = value.toString(2);
        decimal = value.toString(10);
        setValues(hex,decimal,binary,oct);
    }

    function convertOctal(value){
        value = parseInt(value,8);
        hex = value.toString(16);
        binary = value.toString(2);
        decimal = value.toString(10);
        setValues(hex,decimal,binary,oct);
    }

    function convertBinary(value){
        value = parseInt(value,2);
        hex = value.toString(16);
        oct = value.toString(8);
        decimal = value.toString(10);
        setValues(hex,decimal,binary,oct);
    }

    function convertDecimal(value){
        value = parseInt(value,10);
        hex = value.toString(16);
        oct = value.toString(8);
        binary = value.toString(2);
        setValues(hex,decimal,binary,oct);
    }

});
