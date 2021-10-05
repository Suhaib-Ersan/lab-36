let initialState = [];
export default (state = initialState, action) => {
    console.log("carts.jsx export RAN");
    let { type, payload } = action;
    switch (type) {
        case "ADD": {
            let itemIdx;
            let newMap = state.map((val, idx) => {
                if (val.id === payload.id) {
                    itemIdx = idx;
                    return {
                        ...val,
                        count: val.count + 1,
                    };
                }
                return val;
            });
            if (typeof itemIdx === "number") {
                console.log(newMap);
                return newMap;
            }
            console.log(state);
            return [
                ...state,
                {
                    ...payload,
                    count: 1,
                },
            ];
        }
        case "INCREMENT": {
            let itemIdx;
            let newMap = state.map((val, idx) => {
                if (val.id === payload.id) {
                    itemIdx = idx;
                    return {
                        ...val,
                        count: val.count + 1,
                    };
                }
                return val;
            });
            if (typeof itemIdx === "number") {
                return newMap;
            }
            return state;
        }
        case "DECREMENT": {
            let itemIdx;
            let newMap = state.map((val, idx) => {
                if (val.id === payload.id) {
                    itemIdx = idx;
                    return {
                        ...val,
                        count: val.count - 1,
                    };
                }
                return val;
            });
            if (typeof itemIdx === "number") {
                if (newMap[itemIdx].count <= 0) {
                    newMap.splice([itemIdx], 1);
                }
                return newMap;
            }
            return state;
        }
        case "REMOVE": {
            let itemIdx;
            let newMap = state.map((val, idx) => {
                if (val.id === payload.id) {
                    itemIdx = idx;
                    return val;
                }
                return val;
            });
            if (typeof itemIdx === "number") {
                newMap.splice([itemIdx], 1);
                return newMap;
            }
            return state;
        }

        case "RESET": {
            return initialState;
        }
        default:
            return state;
    }
};
