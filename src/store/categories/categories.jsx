let availableCategories = [
    {
        category: "shoes",
        data: [
            { brand: "brandSomething", name: "jordans", type: "jordans", image: "https://picsum.photos/seed/picsum/200/300", price: "50", originalCurrency: "USD" },
            { brand: "brandSomething2", name: "sneakers", type: "sneakers", image: "https://picsum.photos/seed/picsum/200/300", price: "30", originalCurrency: "USD" },
        ],
    },
    {
        category: "clothes",
        data: [
            { brand: "brandSomething", name: "blouse", type: "blouse", image: "https://picsum.photos/seed/picsum/200/300", price: "10", originalCurrency: "USD" },
            { brand: "brandSomething2", name: "tank top", type: "tank-top", image: "https://picsum.photos/seed/picsum/200/300", price: "15", originalCurrency: "USD" },
            { brand: "brandSomething3", name: "hat", type: "hat", image: "https://picsum.photos/seed/picsum/200/300", price: "20", originalCurrency: "USD" },
            { brand: "brandSomething4", name: "jacket", type: "jacket", image: "https://picsum.photos/seed/picsum/200/300", price: "25", originalCurrency: "USD" },
            { brand: "brandSomething5", name: "t-shirt", type: "t-shirt", image: "https://picsum.photos/seed/picsum/200/300", price: "5", originalCurrency: "USD" },
        ],
    },
    {
        category: "food",
        data: [
            { brand: "brandSomething", name: "eggs 12 XL", type: "eggs", image: "https://picsum.photos/seed/picsum/200/300", price: "2.25", originalCurrency: "USD" },
            { brand: "brandSomething2", name: "cream 250m", type: "cream", image: "https://picsum.photos/seed/picsum/200/300", price: "3.5", originalCurrency: "USD" },
        ],
    },
    {
        category: "electronics",
        data: [
            { brand: "brandSomething", name: '8" tablet', type: "tablet", image: "https://picsum.photos/seed/picsum/200/300", price: "10", originalCurrency: "USD" },
            { brand: "brandSomething2", name: '15.6 " laptop', type: "laptop", image: "https://picsum.photos/seed/picsum/200/300", price: "600", originalCurrency: "USD" },
            { brand: "brandSomething3", name: 'TV 43"', type: "TV", image: "https://picsum.photos/seed/picsum/200/300", price: "150", originalCurrency: "USD" },
        ],
    },
];
let initialState = {
    categories: ["shoes", "clothes", "food", "electronics"],
    initial: availableCategories[3],
};
export default (state = initialState, action) => {
    console.log("categories.jsx export RAN");
    let { type, payload } = action;
    switch (type) {
        case "CHANGE-CATEGORY":
            console.log("CHANGE-CATEGORY RAN");
            let neededIdx = undefined;
            availableCategories.find((data, idx) => {
                console.log(`^v^v^ at idx ${idx} ${payload} === ${data.category} > ${payload === data.category}`);
                if (payload === data.category) {
                    neededIdx = idx;
                    return true;
                }
            });
            if (neededIdx === undefined) {
                return initialState;
            }
            console.log({
                ...initialState,
                initial: availableCategories[neededIdx],
            });
            return {
                ...initialState,
                initial: availableCategories[neededIdx],
            };
        case "RUN":
            console.log("RUN RAAAAN");
            return state;
        default:
            console.log("default RAN");
            return state;
    }
};
