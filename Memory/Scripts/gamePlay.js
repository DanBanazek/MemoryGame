//global vars
var selectedArray = new Array();
var cardArray = new Array();
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
    var cid1 = $card1.attr('data-id').toString();
    cid1=cid1.substr(cid1.indexOf('_'));
    var cid2 = $card2.attr('data-id').toString();
    cid2 = cid2.substr(cid2.indexOf('_'));

    if (cid1===cid2) {
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
        }, 1000);
    }
    
}
//end global functions
$(document).ready(function () {
    console.debug('$(document).ready');
    //var len = $('.cardContainer').length;
    //alert(len);
    //$('.cardContainer').click(function () {
    //    console.debug('card container.click method');
    //    if (!$(this).hasClass('selected')) {
    //       // alert($(this) + ' on click');
    //        console.debug($(this) + ' clicked does not have selected class');
    //        var index = selectedArray.length;
    //        if (index < 2) {
    //            selectedArray.push($(this));
    //            index = selectedArray.length;
    //            flipCard($(this))
    //        }
    //        if (index === 2) {
    //            //alert('2 cards chosen do comparissons');
    //            compareCards();
    //            selectedArray = [];
    //        }
            
    //    }
    //    else {
    //        console.debug('clicked object is already selected');
    //    }
    //});

});

//SignalR Broadcasting functions
$(function () {
    //Declare a proxy to the refernce hub
    var hub = $.connection.flipCardHub;
    //create a function that the hub can call to broadcast messages
   hub.client.playCard = function (cardID) {
       //var $cardContainer =$('#gameArea').find();
       console.debug('signal r method. card id' + cardID);
       var $SelectedCardContainer = $("div[data-id='" + cardID + "']")
       var index = selectedArray.length;
       console.debug('current array length: ' + index);
       if (index < 2) {
           selectedArray.push($SelectedCardContainer);
           index = selectedArray.length;
           flipCard($SelectedCardContainer)
       }
       if (index === 2) {
           //alert('2 cards chosen do comparissons');
           compareCards();
           selectedArray = [];
       }
       //$('.cardContainer').each(function () {
       //    console.debug('SIGNAL R: .cardContainer dataid ' + $(this).attr('data-id'))
       //    if ($(this).attr('data-id') === cardID) {
       //        console.debug('calling click for card id ' + cardID);
       //        $(this).trigger('click');
       //        //flipCard($(this));
       //    }

       //});
       console.debug('current array length after operation ' + index);
       console.debug('exit play card method.')
   };

    //start the connection
   $.connection.hub.start().done(function () {
       console.debug('$.connection.hub.start()')
        $('.cardContainer').click(function () {
            console.debug('SIGNALR card container.click method');
            if (!$(this).hasClass('selected')) {
                // alert($(this) + ' on click');
                console.debug('SIGNALR: ' + $(this) + ' clicked does not have selected class');
                console.debug('call the play card method on the server')
                console.debug('current card container html: ');
                console.debug($(this).html());
                //var index = selectedArray.length;
                //if (index < 2) {
                //    selectedArray.push($(this));
                //    index = selectedArray.length;
                //    flipCard($(this))
                //}
                //if (index === 2) {
                //    //alert('2 cards chosen do comparissons');
                //    compareCards();
                //    selectedArray = [];
                //}
                //call the card played method on the hub
                hub.server.sendCardPlayed($(this).attr('data-id'));
            }
            else {
                console.debug('SignalrR: clicked object is already selected');
            }
            
        });
    });
    


});