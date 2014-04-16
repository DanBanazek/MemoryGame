$(document).ready(function () {
    var content='';
    $('#gameArea .card-front').each(function () {

        content += $(this).html();
    })
    //alert(content);
    $('.cardContainer').click(function () {
        //$('.cardFront').toggleClass('DBflipCard');
        var $selectedCard = $(this).find('.DBflipper');
        var $front = $selectedCard.find('.cardFront');
        var $back = $selectedCard.find('.cardBack');
        var $fz = $front.zIndex();//$('.cardFront').zIndex();
        var $bz = $back.zIndex();//$('.cardBack').zIndex();
        $front.zIndex($bz);
        $back.zIndex($fz);
        $(this).toggleClass('DBflipCard');

    });

    $('.flip-container').click(function () {
            //alert($(this).html());
        $(this).toggleClass('flipCard');
       
        }
    );
});