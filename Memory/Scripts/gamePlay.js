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
        cardAnimations.compareCards();
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

////SignalR Broadcasting functions
//$(function () {
//    //Declare a proxy to the refernce hub
//    var hub = $.connection.flipCardHub;
//    //create a function that the hub can call to broadcast messages
//   hub.client.playCard = function (cardID) {
//       //var $cardContainer =$('#gameArea').find();
//       console.debug('signal r method. card id' + cardID);
//       var $SelectedCardContainer = $("div[data-id='" + cardID + "']")
//       var index = selectedArray.length;
//       console.debug('current array length: ' + index);
//       if (index < 2) {
//           selectedArray.push($SelectedCardContainer);
//           index = selectedArray.length;
//           flipCard($SelectedCardContainer)
//       }
//       if (index === 2) {
//           //alert('2 cards chosen do comparissons');
//           compareCards();
//           selectedArray = [];
//       }
//       console.debug('current array length after operation ' + index);
//       console.debug('exit play card method.')
//   };
//   hub.client.playerPlayCard = function (cardID, userName) {
//       if (userName === 'dan') {
//           takeTurn(cardID);
//       }
//       else {
//           if ($('#playerName').val() === userName) {
//               alert('sorry ' + userName + ' it is not your turn.');
//           }
//       }
//   };

//    //start the connection
//   $.connection.hub.start().done(function () {
//       console.debug('$.connection.hub.start()')
//        $('.cardContainer').click(function () {
//            console.debug('SIGNALR card container.click method');
//            if (!$(this).hasClass('selected')) {
//                // alert($(this) + ' on click');
//                console.debug('SIGNALR: ' + $(this) + ' clicked does not have selected class');
//                console.debug('call the play card method on the server')
//                console.debug('current card container html: ');
//                console.debug($(this).html());
//                hub.server.sendCardAndPlayerName($(this).attr('data-id'), $('#playerName').val());
//            }
//            else {
//                console.debug('SignalrR: clicked object is already selected');
//            }
            
//        });
//        var players;
//        hub.server.getCurrentPlayerCount(1).done(function (p) {
//            players = p;
//        });
        
//    });
    


//});