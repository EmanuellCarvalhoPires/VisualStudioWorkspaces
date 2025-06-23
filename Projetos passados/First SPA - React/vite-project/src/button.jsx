

function Button2(){

    
    const HandleClick2 = (e) => e.target.textContent = "Ouch!!"
    
    return(
        <button onClick={(e) => HandleClick2(e)}>Click</button>

    );
}

export default Button2