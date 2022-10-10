
import Person from "./components/Person"
import React from "react"


function App() {

  const [data , setData] = React.useState([])

     console.log("First Data" +data)


  const getData = () => {
    fetch(`http://localhost:3000/data ` , {
    }).then((res) => res.json())
      .then((res) => {setData(res)
          console.log(res)
        })
      .catch((err) => console.log(err));

}

React.useEffect(() => {
    getData();
} , [])

console.log("Second Data" + data)

let data1 = data.filter((item) => {
           return item.Name === "Alok kumar Gautam ( 43 ) (BDE) (NA)"
    })

    console.log("Data1" +data1)

let data2 = data.filter((item) => {
      return item.Name === "kalpesh ( 43 ) (BDE) (NA)"
})

console.log( "data2" ,data2)
       return (
           <div>
               <Person data = {data1} />
               <Person data = {data2} />
           </div>
       )
}

export default App;
