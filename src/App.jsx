import { Fragment } from "react";
import './App.css'
import Example1 from "./components/Example1";
import Welcome from "./components/Welcome";


function App(){
  return (
   <Fragment>
    <center>
      <h1 className="fs-1">App component</h1>
    </center>
    {/* <Welcome/> */}


     {/* <Example1></Example1> */}

     <Example1/>
   </Fragment>
  )
}

export default App;