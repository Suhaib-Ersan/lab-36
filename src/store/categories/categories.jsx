let availableCategories = [
    {
        category: "shoes",
        data: [
            { brand: "brandSomething", name: "jordans", type: "jordans", image: "https://picsum.photos/seed/picsum/200/300", price: "50", originalCurrency: "USD", id: "694dd5a8-b568-419e-8e27-0d31875ef816" },
            { brand: "brandSomething2", name: "sneakers", type: "sneakers", image: "https://picsum.photos/seed/picsum/200/300", price: "30", originalCurrency: "USD", id: "1c37d97d-8c47-4a7b-9c38-bc042a744b8f" },
        ],
    },
    {
        category: "clothes",
        data: [
            { brand: "brandSomething", name: "blouse", type: "blouse", image: "https://picsum.photos/seed/picsum/200/300", price: "10", originalCurrency: "USD", id: "4915a498-6530-4f32-aa80-424af05d518a"  },
            { brand: "brandSomething2", name: "tank top", type: "tank-top", image: "https://picsum.photos/seed/picsum/200/300", price: "15", originalCurrency: "USD", id: "7712a4d9-315f-48d5-bef8-0b11d98e1717"  },
            { brand: "brandSomething3", name: "hat", type: "hat", image: "https://picsum.photos/seed/picsum/200/300", price: "20", originalCurrency: "USD", id: "60300b46-bf25-4005-9c2d-c94acef90efb"  },
            { brand: "brandSomething4", name: "jacket", type: "jacket", image: "https://picsum.photos/seed/picsum/200/300", price: "25", originalCurrency: "USD", id: "7bf36664-90fb-4ce2-9be3-43dc30f5b533"  },
            { brand: "brandSomething5", name: "t-shirt", type: "t-shirt", image: "https://picsum.photos/seed/picsum/200/300", price: "5", originalCurrency: "USD", id: "ca65a5e7-06d4-458f-9bc6-d96bb292a785"  },
        ],
    },
    {
        category: "food",
        data: [
            { brand: "brandSomething", name: "eggs 12 XL", type: "eggs", image: "https://picsum.photos/seed/picsum/200/300", price: "2.25", originalCurrency: "USD", id: "69d01c06-96a5-49aa-bef2-a4ad3e7f9f0a"  },
            { brand: "brandSomething2", name: "cream 250m", type: "cream", image: "https://picsum.photos/seed/picsum/200/300", price: "3.5", originalCurrency: "USD", id: "a8bb9c7e-b5d6-4c83-afd4-2fc7a1775272"  },
        ],
    },
    {
        category: "electronics",
        data: [
            { brand: "brandSomething", name: '8" tablet', type: "tablet", image: "https://picsum.photos/seed/picsum/200/300", price: "10", originalCurrency: "USD", id: "2f841777-1ad7-4cb0-865a-193eccd49f7e"  },
            { brand: "brandSomething2", name: '15.6 " laptop', type: "laptop", image: "https://picsum.photos/seed/picsum/200/300", price: "600", originalCurrency: "USD", id: "ee589958-c57a-4fc7-8725-5e0fe4f6b3d8"  },
            { brand: "brandSomething3", name: 'TV 43"', type: "TV", image: "https://picsum.photos/seed/picsum/200/300", price: "150", originalCurrency: "USD", id: "3dcf7fbc-036d-4317-aab4-9f2641d4e048"  },
        ],
    },
];
let initialState = {
    categories: ["shoes", "clothes", "food", "electronics"],
    chosenCategory: availableCategories[3],
};
export default (state = initialState, action) => {
    console.log("categories.jsx export RAN");
    let { type, payload } = action;
    switch (type) {
        case "CHANGE-CATEGORY":
            console.log("CHANGE-CATEGORY RAN");
            let neededIdx = undefined;
            availableCategories.find((data, idx) => {
                // console.log(`^v^v^ at idx ${idx} ${payload} === ${data.category} > ${payload === data.category}`);
                if (payload === data.category) {
                    neededIdx = idx;
                    return true;
                }
                return false;
            });
            if (neededIdx === undefined) {
                return initialState;
            }
            return {
                ...initialState,
                chosenCategory: availableCategories[neededIdx],
            };
        case "RUN":
            console.log("RUN RAAAAN");
            return state;
        default:
            console.log("default RAN");
            return state;
    }
};
