//global vars
var selectedArray = new Array();
//global functions
function flipCard(cardContainer) {
    //$('.cardFront').toggleClass('DBflipCard');
    var $selectedCard = $(cardContainer).find('.DBflipper');
    var $front = $selectedCard.find('.cardFront');
    var $back = $selectedCard.find('.cardBack');
    var $fz = $front.zIndex();//$('.cardFront').zIndex();
    var $bz = $back.zIndex();//$('.cardBack').zIndex();
    $front.zIndex($bz);
    $back.zIndex($fz);
    $(cardContainer).toggleClass('DBflipCard');
    $(cardContainer).toggleClass('selected');
    
}
function compareCards() {
    var $card1 = $(selectedArray[0]);
    var $card2 = $(selectedArray[1]);
    if ($card1.attr('data-id') === $card2.attr('data-id')) {
        alert("it's a match");
        $card1.toggle('explode');
        $card2.toggle('explode');
        $card1.replaceWith('<div class ="emptyContainer"></div>');
        $card2.replaceWith('<div class ="emptyContainer"></div>');
        
        
    }
    else {
        //alert('try again!')
        setTimeout(function () {
            flipCard($card1);
            flipCard($card2);
        }, 1500);
    }
    
}
//end global functions
$(document).ready(function () {
    var content = '';
    $('#gameArea .card-front').each(function () {

        content += $(this).html();
    })
    //alert(content);
    $('.cardContainer').click(function () {
        if (!$(this).hasClass('selected')) {
            var index = selectedArray.length;
            if (index < 2) {
                selectedArray.push($(this));
                index = selectedArray.length;
                flipCard($(this))
            }
            if (index === 2) {
                //alert('2 cards chosen do comparissons');
                compareCards();
                selectedArray = [];
            }
            
        }
    });

});