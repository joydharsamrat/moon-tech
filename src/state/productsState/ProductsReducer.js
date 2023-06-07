import { actionTypes } from "./ActionType"

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishList: []
}
export const productReducer = (state, action) => {
    switch (action.types) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case actionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case actionTypes.ADD_TO_WISHLIST:
            return {
                ...state,
                wishList: [...state.wishList, action.payload]
            };
        default: return state
    }
}