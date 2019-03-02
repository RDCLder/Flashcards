const actionDeleteSavedCard = (name, card) => {
    return {
        type: "DELETE_SAVED_CARD",
        name: name,
        card: card
    };
};

export default actionDeleteSavedCard;