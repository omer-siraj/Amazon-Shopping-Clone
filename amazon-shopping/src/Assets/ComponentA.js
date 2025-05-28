import React from 'react'
import { useColor } from './ContextProvider'


const ComponentA = () => {
    const {colorToggler} = useColor()
  return (
    <div onClick={colorToggler}>
        <h1>Component A</h1>
        <button>color toggler</button>
        <hr />


    </div>
  )
}

export default ComponentA