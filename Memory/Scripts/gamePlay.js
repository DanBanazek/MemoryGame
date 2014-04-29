//global vars
var selectedArray = new Array();
////global functions

function takeTurn(cardID) {
    //var $cardContainer =$('#gameArea').find();
    console.debug('signal r method. card id' + cardID);
    var $SelectedCardContainer = $("div[data-id='" + cardID + "']")
    var index = selectedArray.length;
    console.debug('current array length: ' + index);
    if (index < 2) {
        selectedArray.push($SelectedCardContainer);
        index = selectedArray.length;
        cardAnimations.flipCard($SelectedCardContainer)
    }
    if (index === 2) {
        //alert('2 cards chosen do comparissons');
        var isMatch = cardAnimations.compareCards();
        selectedArray = [];
    }
    console.debug('current array length after operation ' + index);
    console.debug('exit play card method.')
};


//end global functions
$(document).ready(function () {
    console.debug('$(document).ready');
    $('.cardContainer').each(function () {
        var id = $(this).attr('data-id');
        console.debug(id);
    });

    $('#currentPlayers').change(function () {
        var p = $(this).val();
        if ($(this).val() === 2) {
            var $roomID = $('#gamRoomID').val();
            redirectToGameRoom(roomID);
        }
    });
    
    //$('#playerName').val(prompt('Enter your name:', ''));
    
});

