import Person from "./components/Person"
import Table from "./components/Table"
import React from "react"


function App() {

    
 

  return (
    <div style = {{
         display : "flex",
         justifyContent : "space-around",
         marginTop : "100px",

    }}>
         <Person/>
         <Table />
    </div>
  );
}

export default App;
