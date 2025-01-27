/* eslint-disable react/prop-types */
// ESSE CÓDIGO NÃO ESTÁ MOSTRANDO ERRO POR CAUSA DA LINHA ACIMA


function Student(props){
    
    

    return(
        <div className="student">
            <p>
                Name: {props.name} <br/>
                Age: {props.age} <br/>
                Student: {props.isStudent ? "Yes" : "No"}
            </p>
        </div>

    );


}



export default Student