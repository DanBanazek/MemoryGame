//global vars
var selectedArray = new Array();
////global functions
function updateScore(isMatch, currentPlayer) {
    var $playerScore;
    var nextPlayer;
    var changeCurrentPlayer = false;
    if (currentPlayer == $('#player1').val()) {
        $playerScore = $('#currentScore');
        nextPlayer = $('#player2').val();
    } else {
        $playerScore = $('#currentScore2');
        nextPlayer = $('#player1').val();
    }
    var score = parseInt($playerScore.text());
    var currentMatchStreak = parseInt($('#matchStreak').text());
    if (isMatch) {
        score += 100;
        if (currentMatchStreak > 0) {
            bonus = currentMatchStreak * 25;
            score += bonus;
            alert(currentMatchStreak + ' matches in a row. ' + 'Bonus: ' + bonus);

        }
        currentMatchStreak += 1;
    }
    else {
        score -= 25;
        currentMatchStreak = 0;
        changeCurrentPlayer = true;
    }
    $playerScore.text(score);
    $('#matchStreak').text(currentMatchStreak);
    if (changeCurrentPlayer) {
        $('#currentPlayer').text(nextPlayer);
    }
}

function takeTurn(cardID,userName) {
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
        updateScore(isMatch, userName);
        selectedArray = [];
    }
};


//end global functions
$(document).ready(function () {
    cardAnimations.locateScoreReporters();
    cardAnimations.hideScoreReporters();
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

