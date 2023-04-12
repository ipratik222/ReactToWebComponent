import logo from './logo.svg';
import './App.css';
// import "./Components/WebComponent";

import "./Components/WebComponent1";

// import Welcome from './Components/Welcome'
// import Hello from './Components/Hello'
function App() {
  return (
    <div className="App">
    {/* //  <Greet name="Shivangi" heroName="Batman"></Greet>
    //  <p>This is the Children props</p>
    //  <Greet name="Manvi" heroName="SuperMan"/>
    // <button>Action</button>
    //  <Greet name="Amit" heroName="Wonder Woman"/> */}
     {/* <Welcome name="Shivangi" heroName="Batman"/>
     <Welcome  name="Manvi" heroName="SuperMan"></Welcome>
     <Hello></Hello> */}
     {/* <my-component name = "Manvi"></my-component> */}
    <web-greeting name = "Amit"></web-greeting>
    </div>
  );
}

export default App;
