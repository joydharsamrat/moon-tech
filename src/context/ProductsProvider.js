import React, { createContext, useEffect, useReducer, useState } from 'react';
import { initialState, productReducer } from '../state/productsState/ProductsReducer';
import { actionTypes } from '../state/productsState/ActionType';

export const productsContext = createContext()


const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)
    console.log(state)

    useEffect(() => {
        dispatch({ types: actionTypes.FETCHING_START })
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                dispatch({ types: actionTypes.FETCHING_SUCCESS, payload: data.data })
            })
            .catch(error => {
                console.log(error)
                dispatch({ types: actionTypes.FETCHING_ERROR })
            })
    }, [])

    const value = {
        data: state,
        dispatch
    }
    return (
        <productsContext.Provider value={value}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsProvider;