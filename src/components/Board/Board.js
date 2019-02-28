import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Flashcard from "./Flashcard";
import "../../styles/Board.css";

function generateDeck(limit) {
    let words = [];
    let text = [];
    let deck = [];
    for (let i = 0; i < limit; i ++) {
        deck.push({ isFlipped: false, value: words[i], match: i });
        deck.push({ isFlipped: false, value: text[i], match: i });
    }
    shuffle(deck);
    return deck;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i --) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: generateDeck(),
            pickedCards: []
        }
    }

    unflipCards(card1Index, card2Index) {
        let newDeck = this.state.deck.map(card => {
            return {
                ...card
            };
        });
        newDeck[card1Index].isFlipped = false;
        newDeck[card2Index].isFlipped = false;
        this.setState({ deck: newDeck });
    }

    pickCard(cardIndex) {
        // Prevents flipping cards already flipped over
        if (this.state.deck[cardIndex].isFlipped) {
            return;
        }

        // Keep track of which card was flipped
        let cardToFlip = {
            ...this.state.deck[cardIndex]
        };
        cardToFlip.isFlipped = true;
        let newPickedCards = this.state.pickedCards.concat(cardIndex);
        let newDeck = this.state.deck.map((card, index) => {
            if (cardIndex === index) {
                return cardToFlip;
            }
            return card;
        });

        // Compare both cards once both selected
        if (newPickedCards.length === 2) {
            let card1Index = newPickedCards[0];
            let card2Index = newPickedCards[1];
            var card1 = newDeck[card1Index];
            var card2 = newDeck[card2Index];
            if (card1.match !== card2.match) {
                setTimeout(() => {
                    this.unflipCards(card1Index, card2Index);
                }, 1000);
            }
            newPickedCards = [];
        }
        this.setState({
            deck: newDeck,
            pickedCards: newPickedCards
        });
    }

    render() {

        let cardsJSX = this.state.deck.map((card, index) => {
            return <Flashcard 
                pickCard={() => this.pickCard(index)} 
                key={index} 
                value={card.value}
                isFlipped={card.isFlipped}
            />
        })

        return (
            <Container fluid="true">
                <Row>
                    {cardsJSX.slice(0, 4)}
                </Row>
                <Row>
                    {cardsJSX.slice(4, 8)}
                </Row>
                <Row>
                    {cardsJSX.slice(8, 12)}
                </Row>
                <Row>
                    {cardsJSX.slice(12, 16)}
                </Row>
            </Container>
        );
    }
}

export default Board;