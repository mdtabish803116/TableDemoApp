import React from "react"
import TableList1 from "./TableList1"
import TableList2 from "./TableList2"

const Table = (data) => {

     const {data1} = data
     const {data2} = data

    return (
          <div style = {{
              width : "60%",
              marginRight : "10%"
          }}>{
              data1 ? (<TableList1 data = {data1}/>) : (<TableList2 data = {data2}/>)
          }     
          </div>
    )
}

export default Table