import React, { Component } from 'react'

export class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state={
            tasks:[],
            value:""
        }

        this.handleSubmit=this.handleSubmit.bind(this)
        

    }

    handleSubmit=(e)=>{
        e.preventDefault();
       
        this.setState({
            tasks:[...this.state.tasks,this.state.value],
            value:""
        })
    
     }
  render() {
    
    return (
        <div>
      <h1>ToDo List</h1>
      <form onSubmit={this.handleSubmit}>
      <input
      placeholder='Enter the tasks '
      type="text"
      value={this.state.value}
      aria-label="task-input"
      onChange={(e)=>{
        this.setState({value:e.target.value})
      }}
      />
      <button type="submit" data-testid="submit-btn">Submit</button>
      </form>
      <hr/>
      <h2>Tasks</h2>
      <ul>
      <>

      <ul>
          {this.state.tasks.map((data, key) => (
            <li key={key}>{data}</li>
          ))}
        </ul>
        </>

      </ul>
      </div>
    )
  }
}

export default ToDoList