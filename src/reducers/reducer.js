const reducer = (state, action) => {

    if (state === undefined) {
        return {
            cards: [
                
            ],
            saved: {
                Example: [
                    {
                        word: "Example Card",
                        text: "Click the + button to add your own card."
                    }
                ],
                Test: [
                    {
                        word: "Test 1",
                        text: "Text 1"
                    },
                    {
                        word: "Test 2",
                        text: "Text 2"
                    },
                    {
                        word: "Test 3",
                        text: "Text 3"
                    },
                    {
                        word: "Test 4",
                        text: "Text 4"
                    },
                    {
                        word: "Test 5",
                        text: "Text 5"
                    },
                    {
                        word: "Test 6",
                        text: "Text 6"
                    },
                    {
                        word: "Test 7",
                        text: "Text 7"
                    },
                    {
                        word: "Test 8",
                        text: "Text 8"
                    }
                ]
            }
        };
    }

    switch (action.type) {
        case "ADD_CARD":
            return {
                ...state,
                cards: state.cards.concat(action.card)
            };
        case "DELETE_CARD":
            let newCards = state.cards.slice();
            let index = newCards.indexOf(action.card);
            newCards.splice(index, 1);
            return {
                ...state,
                cards: newCards
            };
        case "CLEAR_CARDS":
            return {
                ...state,
                cards: []
            };
        case "SAVE_CARDS":
            let newSaved = {
                ...state.saved
            };
            newSaved[action.name] = action.cards
            return {
                ...state,
                saved: newSaved
            };
        case "LOAD_CARDS":
            return {
                ...state,
                cards: [
                    ...state.cards,
                    ...action.cards
                ]
            };
        case "DELETE_SAVED_CARD":
            let newSaved2 = {
                ...state.saved
            };
            let arr = newSaved2[action.name].slice();
            let index2 = arr.findIndex(card => {
                return card.word === action.card.word
            });
            arr.splice(index2, 1);
            newSaved2[action.name] = arr.slice();
            return {
                ...state,
                saved: newSaved2
            };
        case "DELETE_COLLECTION":
            let newSaved3 = {
                ...state.saved
            };
            delete newSaved3[action.name];
            return {
                ...state,
                saved: newSaved3
            };
        default:
            return state;
    }

}

export default reducer;