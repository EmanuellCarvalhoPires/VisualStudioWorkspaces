import { useState } from "react";

function UpdateObjectsInStates(){

    const [car, setCar] = useState({year: 2024, make: "honda", model: "HRV"});

    function HandleSetYear(event){

        setCar({...car, year: event.target.value})
        
    }
    
    function HandleSetMake(event){
        
        setCar({...car, make: event.target.value})
        
    }
    
    function HandleSetModel(event){

        setCar({...car, model: event.target.value})
        
    }


    return(
        <div>

            <p>Seu carro favorito é: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={HandleSetYear}/><br/>
            <input type="text" value={car.make} onChange={HandleSetMake}/><br/>
            <input type="text" value={car.model} onChange={HandleSetModel}/><br/>
        </div>

    )

}

export default UpdateObjectsInStates