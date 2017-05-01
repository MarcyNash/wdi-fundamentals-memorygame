//var cards = ["queen", "queen", "king", "king"];

// cards object
var cards = [

  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];


var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1])
      alert("You found a match!");
    else
      alert("Sorry, try again.");
    }
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  // I tried several ways to flip the card in the checkForMatch method, but
  // was not successful. Flipping the card in flipCard was also cleaner
  // than what I tried in checkForMatch.
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }

}
createBoard();
