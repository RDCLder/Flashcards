const actionDeleteCollection = (name) => {
    return {
        type: "DELETE_COLLECTION",
        name: name
    };
};

export default actionDeleteCollection;