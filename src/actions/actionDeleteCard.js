const actionDeleteCard = (card) => {
    return {
        type: "DELETE_CARD",
        card: card
    };
};

export default actionDeleteCard;