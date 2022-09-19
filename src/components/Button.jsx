import React from 'react'

function Button(props) {

    function dummyClick(){
        console.log("onCLick",props.onClick)

    }

  return (
    <button className="AddButton" onClick={dummyClick}>{props.text}</button> 
  )
}

export default Button