import React from 'react'
import { fireEvent, screen,render } from '@testing-library/react'
//import { renderWithProviders } from '../../../utils/test-utils'
import Counter from "../components/CounterApp"
import {Provider} from "react-redux"
import {store} from "../redux/store/store"

//test block
test("increments counter", () => {
    // render the component on virtual dom
    render(<Provider store={store}><Counter /></Provider>);
    
    //select the elements you want to interact with
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("button-increment");
    const decrementBtn= screen.getByTestId("button-decrement");
    const resetBtn = screen.getByTestId("button-reset");
    //interact with those elements
    fireEvent.click(incrementBtn);
    
    //assert the expected result
    expect(counter).toHaveTextContent("1");

    //firing reset btn
    fireEvent.click(resetBtn);

    //assert the expected result on resetting the value
    expect(counter).toHaveTextContent("0");

    //firing decrement btn
    fireEvent.click(decrementBtn);

    //assert the expected result on decrementing the value
    expect(counter).toHaveTextContent("-1");

    });