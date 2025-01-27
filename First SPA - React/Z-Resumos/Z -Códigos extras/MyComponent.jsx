
import { useState } from 'react';


function MyComponent(){

    

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateDate = () => {
        setName("Emanuell");
        setAge(age + 10);
        setIsEmployed(!isEmployed)
    } 



    return(

        
            <div>
                <p>Name - {name}<br/>
                Idade - {age}<br/>
                Está empregado? - {isEmployed ? "Sim" : "Não"}</p>
                <button onClick={() => updateDate()}>Clique</button>
                
            </div>
        

    );

}

export default MyComponent