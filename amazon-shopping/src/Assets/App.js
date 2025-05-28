// // src/App.js
// import React, { useReducer } from 'react';
// import Routing from './Router';
// import './App.css'


// function App() {
//     //*Reducer function

//     let intialState = 0;
//       const [state, dispatch] = useReducer(reducer,intialState,init);

//       function init (a) {
//         return {count:a };
//       }


//    function reducer = (state, action) => {
//       switch (action.type) {
//         case 'increament':
//           return { count: state.count + 1};
//         case 'decreament':
//           return {count: state.count -1};
//         case 'reset':
//           return init{action.payload};
//         default:
//           throw new Error ();
//       }
//     };



//   return (
//     <>
//       <h1>[state, dispatch] = useReducer(reducer, {count: 0})</h1>
//       <button 
//         onClick={() => dispatch({ type: 'reset', payload:initialState})}>Reset </button>
//        <button onClick={() => dispatch({ type: 'decreament'})}>Decreament </button>
//         <button onClick={() => dispatch({ type: 'increase'})}>Increament </button>
//     </>

  
//   );
// }

// export default App;

import React from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import {ThemeProvider} from './ContextProvider'

const App = () => {
  return (
    <div>
    <ThemeProvider/>
    <ComponentA/>
    <ComponentB/>

    </div>
  )
}

export default App