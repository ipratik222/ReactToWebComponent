import React from "react"
import PropTypes from "prop-types"
import * as ReactDOM from "react-dom/client"

// function Greet(){
//     return <h1>Hello Shivangi </h1>
// }

//Arrow function syntax
// export const Greet = () => <h1>Hello Amit</h1>
// const Greet = props => {
//   // console.log("Hello ",props);
// //    
//   return (
//     <div>
//       <h1>
//         Hello...... {props.name}!
//       </h1>
//     </div>
//   );
// };



const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Greeting;
