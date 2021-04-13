class Card {
  constructor(value, suite, faceDown) {
    this.value = value,
      this.suite = suite,
      this.faceDown = faceDown
  }
};

class Deck {

  constructor() {
    this.cards = this.addCardsToDeck()
  }

  static SUITES = ['hearts', 'diamonds', 'clubs', 'spades']

  addCardsToDeck() {
    const cardArray = []

    for (let suite of Deck.SUITES) {
      for (let i = 2; i <= 14; i++) {
        const card = new Card(i, suite, false)
        cardArray.push(card)
      }
    }

    return cardArray
  }

  getCards() {
    return this.cards
  }

  drawCard() {
    return this.cards.pop()
  }

  shuffle() {
    var currentIndex = this.cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards;

  }
}




const deck = new Deck()

console.log(deck.drawCard());
deck.shuffle()
console.log(deck.drawCard());
console.log(deck.getCards().length);