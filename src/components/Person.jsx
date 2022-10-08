


const Person = () => {

    let name =  "Alok kumar Gautam ( 43 ) (BDE) (NA)"

      return (
        <div style = {{
            width : "25%",
            display: "flex",
            flexDirection : "row-reverse",

            }}> 
          <div style = {{
               width : "200px",
               textAlign: "center",
               paddingTop : "25%"
              
          }}>  
             {name}
          </div>
        </div>
      )
}

export default Person