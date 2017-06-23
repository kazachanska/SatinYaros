$(document).ready(function () {

    $('.site-content').on('click', function () {
        $('.link').hide();
        $('#mainPage').show();
    });


    $('.calico-menu').on('click', function (e) {
        $('.link').hide();
        $('#calico').show();
        /*e.preventDefault();*/
    });

    $('.satin-menu').on('click', function () {
        $('.link').hide();
        $('#satin').show();
    });

    $('.delivery-menu').on('click', function () {
        $('.link').hide();
        $('#delivery').show();
    });

     $('.terry-towel-menu').on('click', function () {
        $('.link').hide();
        $('#terryTowel').show();
    });

     $('.terry-sheets-menu').on('click', function () {
         $('.link').hide();
         $('#terrySheets').show();
     });

     $('.terry-all-menu').on('click', function () {
         $('.link').hide();
         $('#terry').show();
     });
     
     /*fancybox*/
    $('.fancybox').fancybox();
    $("a.more").fancybox({
        'hideOnContentClick': true,
    });
});