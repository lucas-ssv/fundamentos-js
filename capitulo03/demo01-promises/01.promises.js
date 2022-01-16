const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// terminal.question('Qual é o seu nome?', name => {
//   terminal.question('Qual é o seu telefone?', phone => {
//     console.log(name)
//     console.log(phone)
//   })

//   terminal.close()
// })

function questionAsync(text) {
  return new Promise((resolve, reject) => {
    terminal.question(`${text}\n`, resolve)
  })
}

let name = ""
let phone = ""
Promise.resolve()
  .then(() => questionAsync('Qual é o seu nome?'))
  .then(responseName => {
    if (!responseName) throw new Error('campo vazio')
    name = responseName
  })
  .then(() => questionAsync('Qual é o seu telefone?'))
  .then(responsePhone => {
    if (!responsePhone) throw new Error('campo vazio')
    phone = responsePhone
  })
  .then(() => {
    console.log(name)
    console.log(phone)
  })
  .catch(error => {
    console.log('Deu ruim!!', error)
  })
  .finally(() => terminal.close())