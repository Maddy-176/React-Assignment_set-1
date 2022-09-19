import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {store} from "../redux/store/store"
import counterReducer from '../redux/features/counter/counterSlice'

export function renderWithProviders(
    ui,
    {
        ...renderOptions
    }={}
){
    function Wrapper({children}){
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }

}