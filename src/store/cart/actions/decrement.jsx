export const decrementItem = (payload) => {
    return {
        type: "DECREMENT",
        payload: payload,
    };
};
