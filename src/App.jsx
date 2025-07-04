import { Fragment } from "react";
import './App.css'
import Example1 from "./components/Example1";
import Welcome from "./components/Welcome";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";


function App(){
  return (
   <Fragment>
    <center>
      <h1 className="fs-1">App component</h1>
    </center>
    {/* <Welcome/> */}


     {/* <Example1></Example1> */}

     {/* <Example1/> */}

     {/* <Example2/> */}

     <Example3/>
   </Fragment>
  )
}

export default App;