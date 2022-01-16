window.onload = () => {
  console.log('Loading completed', Math2.subtract(20, 5))
  const btn = document.getElementById('btnCalcular')
  btn.onclick = click

  function getInputValue(id) {
    const input = document.getElementById(id)
    return input.value
  }

  function click() {
    const operationType = getInputValue('tipoOperacao')
    const value1 = getInputValue('valor1')
    const value2 = getInputValue('valor2')
    const result = Math2[operationType](value1, value2)
    document.getElementById('resultado').innerText = result
  }
}