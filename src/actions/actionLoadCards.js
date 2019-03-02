const actionLoadCards = (cards) => {
    return {
        type: "LOAD_CARDS",
        cards: cards
    };
};

export default actionLoadCards;