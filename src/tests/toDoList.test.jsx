import { render, screen,fireEvent } from "@testing-library/react"
import ToDoList from "../components/ToDoList"



const setup = () => {
    const utils = render(<ToDoList/>)
    const input = utils.getByLabelText("task-input");
    return {
      input,
      ...utils,
    }
  }

test("checking the input change ",()=>{
    const {input} = setup()

    //first checking an input task screen
    fireEvent.change(input, {target: {value: 'jogging'}})
    expect(input.value).toBe('jogging');

    fireEvent.change(input, {target: {value: 'running'}})
    expect(input.value).toBe('running');


})

test("displaying input task on screen ",()=>{
    const {input} = setup()
    const submitBtn=  screen.getByTestId("submit-btn")


    //first checking an input task screen
    fireEvent.change(input, {target: {value: 'jogging'}})
    expect(input.value).toBe('jogging');
    fireEvent.click(submitBtn);
    screen.getByText('jogging');



})



