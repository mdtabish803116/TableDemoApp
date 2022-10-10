import "../styles/TableList.css"
import {CgMail} from "react-icons/cg";
import {IoMdCall} from "react-icons/io";
import {MdPersonOutline} from "react-icons/md";
import {MdPeople} from "react-icons/md";
import {BiMessageAltDetail} from "react-icons/bi"

import styled from "styled-components"

const Column = styled.td`
   border : 2px solid white;
    text-align : center;
    background : ${(props) => (props.class === "column1"?"white":"#E8E8E8")};
    width : ${(props) => (props.class === "column1"?"7%":"")}
`

const Row = styled.tr`
//   background : ${(props) => (props.class === "row1"?"white":"#E8E8E8")};
`



const TableList1 = ({data}) => {


      const timeSlots = [" " ,"09:00" , "10:00" , "11:00" , "12:00" , "13:00" , "14:00" , "15:00" ,
                            "16:00" , "17:00" , "18:00" , "19:00" , "20:00" , "21:00" , "Total"
                      ]

      
      let emailBox = [<CgMail 
                            style = {{
                                 color : "red"
                            }}
                          />]
      let callBox = [<IoMdCall style = {{
            color : "orange"
      }}/> ]
      let personBox = [<MdPersonOutline style = {{
              color : "teal"
      }}/> ]
      let groupPersonBox = [<MdPeople style = {{
        color : "teal"
}}/>]
      let messageBox = [<BiMessageAltDetail style = {{
        color : "blue"
}}/>]



    const iconBoxes = [emailBox , callBox , personBox , groupPersonBox , messageBox ]

          data.map((itemObj) => {
            
              itemObj.communication_Count === "0" ? emailBox.push("") :  emailBox.push(itemObj.communication_Count);
              itemObj.Call_count === "0" ?  callBox.push("") : callBox.push(itemObj.Call_count)
              itemObj.LEAD_Count === "0" ?  personBox.push("") :  personBox.push(itemObj.LEAD_Count)
              itemObj.Meeting_Count === "0" ? groupPersonBox.push("") : groupPersonBox.push(itemObj.Meeting_Count)
              itemObj.Proposal_Count === "0" ?  messageBox.push("") : messageBox.push(itemObj.Proposal_Count)
          })


         iconBoxes.forEach((iconBox) => { 
            let total = 0
            for(let i = 1; i < iconBox.length; i++){
                if(iconBox[i] !== ""){
                     total = total + parseInt(iconBox[i])
                }
             
            }
               iconBox.push(total)
            })

        return (
            <table>
                   <thead>
                          <tr>
                               {
                                  timeSlots.map((slot) => {
                                      return (
                                          <th>{slot}</th>
                                      )
                                  })
                               }
                            </tr>  
                    </thead>  
                    <tbody>
                         {

                              iconBoxes.map((iconBox , index) => {
                                  return (
                                       <Row class = {`row${index+1}`} key = {index}>
                                            {
                                                 iconBox.map((iconItem , index) => {
                                                     return( 
                                                     <Column  class = {`column${index+1}`}  coloredItem = "coloredItem">{iconItem}</Column>
                                                     )
                                                 })
                                            }
                                       </Row> 
                                  )
                              })
                         }
                         
                    </tbody>
            </table>
        )
}

export default TableList1