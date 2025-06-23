import { useState } from "react";

function OnChangeComponent(){

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [radio, setRadio] = useState("");


    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleRadioChange(event){
        setRadio(event.target.value)
    }

    return(

        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Nome: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" max={30}/>
            <p>Quantidade: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}/>
            <p> Comentários: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>

                <option value={""}>Select an Option</option>
                <option value={"Visa"}>Visa</option>
                <option value={"MasterCard"}>MasterCard</option>
                <option value={"GiftCard"}>GiftCard</option>
            </select>
            <p>Pagamento: {payment}</p>

            <div >
                
                <label><input type="radio" value="Retirar" name="radio" onChange={handleRadioChange}/>Retirar</label>
                
                <br></br>
                
                <label><input type="radio" value="Entrega" name="radio" onChange={handleRadioChange}/>Entrega</label>

                <p>Forma de envio: {radio}</p>


                <br>
                </br>

                
            </div>


        </div>
    )

}

export default OnChangeComponent