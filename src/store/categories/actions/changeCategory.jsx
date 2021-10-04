export const changeCategory = (newCategory) => {
    return {
        type: "CHANGE-CATEGORY",
        payload: newCategory,
    };
};
