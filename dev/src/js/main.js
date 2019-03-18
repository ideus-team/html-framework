// Authors: %Author Name%

$(function() {

});

$(window).on('resize', function() {

});

$(window).on('load', function() {

});

function initMascarad()
{
    $('.js-format-number').each(function () {
        $(this).inputmask('integer', {
            autoUnmask: true,
            min: $(this).attr('min') ? $(this).attr('min') : undefined,
            max: $(this).attr('max') ? $(this).attr('max') : undefined,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup: $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0
        });
    });

    $('.js-format-number-positive').each(function () {
        $(this).inputmask('integer', {
            autoUnmask: true,
            allowMinus: false,
            min: 0,
            max: $(this).attr('max') ? $(this).attr('max') : undefined,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup: $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0
        });
    });

    $('.js-format-number-negative').each(function () {
        $(this).inputmask('integer', {
            autoUnmask: true,
            allowMinus: true,
            min: $(this).attr('min') ? $(this).attr('min') : undefined,
            max: 0,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup: $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0
        });
    });

    $('.js-format-float').each(function () {
        $(this).inputmask('decimal', {
            autoUnmask: true,
            digits: $(this).attr('data-format-exp') ? $(this).attr('data-format-exp') : undefined,
            min: $(this).attr('min') ? $(this).attr('min') : undefined,
            max: $(this).attr('max') ? $(this).attr('max') : undefined,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup:  $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup: $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0
        });
    });

    $('.js-format-float-positive').each(function () {
        $(this).inputmask('decimal', {
            autoUnmask: true,
            allowMinus: false,
            digits: $(this).attr('data-format-exp') ? $(this).attr('data-format-exp') : undefined,
            min: 0,
            max: $(this).attr('max') ? $(this).attr('max') : undefined,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup: $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0
        });
    });
    $('.js-format-float-negative').each(function () {
        $(this).inputmask('decimal', {
            autoUnmask: true,
            allowMinus: true,
            digits: $(this).attr('data-format-exp') ? $(this).attr('data-format-exp') : undefined,
            min: $(this).attr('min') ? $(this).attr('min') : undefined,
            max: 0,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup: $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0
        });
    });

    $('.js-format-phone').each(function () {
        $(this).inputmask('(999)999-9999', {
            autoUnmask: true,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined
        });
    });

    $('.js-format-phone-global').each(function () {
        $(this).inputmask({
            autoUnmask: true,
            regex: '\+\d{1,3} \(\d{3,5}\) \d{3}\-\d{2}\-\d{2}',
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined
        });
    });

    $('.js-format-phone-local').each(function () {
        $(this).inputmask({
            autoUnmask: true,
            regex: '\d{3}\-\d{2}\-\d{2}',
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined
        });
    });

    $('.js-format-monetary').each(function () {
        $(this).inputmask('currency', {
            autoUnmask: true,
            prefix: $(this).attr('data-format-currency') ? $(this).attr('data-format-currency') : undefined,
            groupSeparator: $(this).attr('data-format-sep') ? $(this).attr('data-format-sep') : undefined,
            autoGroup: $(this).attr('data-format-sep') && $(this).attr('data-format-sep').length > 0
        });
    });

    $('.js-format-percent').each(function () {
        $(this).inputmask('percentage', {
            autoUnmask: true,
            digits: $(this).attr('data-format-exp') ? $(this).attr('data-format-exp') : undefined
        });
    });

    $('.js-format-year').each(function () {
        $(this).inputmask('numeric', {
            autoUnmask: true,
            regex: '\d{4}',
            allowMinus: false,
            min: $(this).attr('min') ? $(this).attr('min') : 1,
            max: $(this).attr('max') ? $(this).attr('max') : undefined,
            prefix: $(this).attr('data-format-prefix') ? $(this).attr('data-format-prefix') : undefined,
            suffix: $(this).attr('data-format-suffix') ? $(this).attr('data-format-suffix') : undefined
        });
    });
}
