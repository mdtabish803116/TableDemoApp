import React from "react"
import TableList from "./TableList"

const Table = () => {

      const [data , setData] = React.useState([])

      const getData = () => {
        fetch(`http://localhost:3000/data ` , {
        }).then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => console.log(err));
    
    }
    
    React.useEffect(() => {
        getData();
    } , [])
    
     data.sort((a , b) => {
          return a.Time_Slot - b.Time_Slot
     })
    

    return (
          <div style = {{
              width : "60%",
              marginRight : "10%"
          }}>
                <TableList data = {data}/>
          </div>
    )
}

export default Table