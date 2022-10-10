import PersonName from "./PersonName"
import Table from "./Table"

const Person = (data) => {

    return (
        <div style = {{
            display : "flex",
            justifyContent : "space-around"
        }}>
             <PersonName data = {data}/>
             <Table data = {data}/>
        </div>
    )

    }
    
    export default Person