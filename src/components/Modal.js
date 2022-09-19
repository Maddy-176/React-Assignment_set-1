import React from 'react'
import { isRouteErrorResponse } from 'react-router-dom'

function Modal(props) {
    //const {isOpen, children, showModal}=props;
  return (

    props.isOpen?(
    <>
    <h1>Modal</h1>
    {props.children}
    <button type="button" onClick={props.hideModal}></button>
    </>
    ):null
  )
}

export default Modal