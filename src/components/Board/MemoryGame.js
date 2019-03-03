import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Flashcard from "./Flashcard";
import "../../styles/Board.css";

const generateDeck = (cards) => {
    let words = cards.map(card => {
        return card.word;
    });
    let text = cards.map(card => {
        return card.text;
    });
    let deck = [];
    for (let i = 0; i < cards.length; i ++) {
        deck.push({ isFlipped: false, value: words[i], type: "word", id: i });
        deck.push({ isFlipped: false, value: text[i], type: "text", id: i });
    }
    shuffle(deck);
    return deck;
};

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i --) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

class MemoryGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: generateDeck(this.props.cards),
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
            if (card1.id !== card2.id) {
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
                id={card.id}
                type={card.type}
                value={card.value}
                isFlipped={card.isFlipped}
            />
        })

        return (
            <Container id="MemoryGameContainer">
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

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        saved: state.saved
    };
};

export default connect(mapStateToProps, null)(MemoryGame);