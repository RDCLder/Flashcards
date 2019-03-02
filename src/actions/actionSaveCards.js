const actionSaveCards = (name, cards) => {
    return {
        type: "SAVE_CARDS",
        name,
        cards: cards
    };
};

export default actionSaveCards;