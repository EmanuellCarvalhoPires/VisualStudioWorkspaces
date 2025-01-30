
const fs = require("fs")


//READ FILES

//fs.readFile('./docs/docs.txt', (err, data) => {
//    if (err) { console.log(err) }
//    console.log(data.toString())
//})

// WRITE FILES

//fs.writeFile('./docs/docs.txt', "HELLO QUEM TÁ AIIII", () => {
//   console.log("File written")
//})


// DELETE DIRECTORIES
//if (!fs.existsSync('./assets')) {
//    fs.mkdir('./assets', (err) => {
//        if (err) { console.log(err) }
//        console.log("Diretório criado")
//    })


//} else {
//    console.log("Esse diretório já existe, ele será deletado")
//
//    fs.rmdir('./assets', (err) => { console.log(err) })
//}



//DELETE FILES


if (fs.existsSync('./docs/deteleMe.txt')) {
    fs.unlink("./docs/deteleMe.txt", (err) => {
        if (err) { console.log(err) }
    })
    console.log("Deleted")
}
