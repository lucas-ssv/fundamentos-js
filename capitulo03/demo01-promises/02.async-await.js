const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function questionAsync(text) {
  return new Promise((resolve, reject) => {
    terminal.question(`${text}\n`, msg => {
      !!msg ? resolve(msg) : reject(new Error('O campo não pode ser vazio!!!'))
    })
  })
}

async function main() {
  try {
    const name = await questionAsync('Qual é o seu nome?')
    const phone = await questionAsync('Qual é o seu telefone?')
    console.log(name)
    console.log(phone)
  } catch (error) {
    console.log('Deu ruim**', error.stack)
  } finally {
    terminal.close()
  }
}

main()
