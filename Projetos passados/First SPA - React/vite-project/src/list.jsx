/* eslint-disable*/




function List(){

    //const fruits = ["Apple","Orange","Banana","Coconut"]

    const fruits = [
                        {id: 1, name: "Apple", calorias: 95},
                        {id: 2, name: "Orange", calorias: 45},
                        {id: 3, name: "Coconut", calorias: 159},
                        {id: 4, name: "Banana", calorias: 105},
                    ]

    fruits.sort((a, b) => a.name.localeCompare(b.name))  //---> Coloca em ordem alfabética a lista  
    //fruits.sort((a, b) => b.name.localeCompare(a.name))    
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} </li>);
                    
    return(<ul>{listItems}</ul>)
}

export default List