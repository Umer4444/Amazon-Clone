export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_BASKET":
            // LOGIC FOR ADDING ITEM TO BASKET
            return { state }; 
        case "REMOVE FROM BASKET":
            // LOGIC FOR REMOVING ITEM FROM BASKET
            return { 
                ...state, 
                basket:
             }
        default:
            return state;
    }
}

export default reducer;