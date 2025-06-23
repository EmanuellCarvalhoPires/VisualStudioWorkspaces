import { useState } from "react"


function Colorchooser(){

    const [color, setColor] = useState("white");

    function HandleColorEvent(event){
        setColor(event.target.value);
    }

    return(

        <div>
            <h1>Choose a Color:</h1><br/>

            <div className="displayColor" style={{backgroundColor: color}}>

                <p>Selected color: {color}</p>

            </div>


            <input type="color" onChange={HandleColorEvent}/>

        </div>
    )

}

export default Colorchooser