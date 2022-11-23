const firstNumber = document.querySelector('#firstNum')
const secondNumber = document.querySelector('#secondNum')
const form = document.querySelector('form')
const result = document.querySelector('#result')

function setResult(text, color){
    result.innerText= text
    result.style.border = `1px solid ${color}`
}

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const a = parseInt(firstNumber.value)
    const b = parseInt(secondNumber.value)

    setResult('Loading...', 'transparent')

    const res = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({
            firstNumber: a,
            secondNumber: b
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const { divider } = await res.json()

    if(divider){
        setResult('Number B is a divider of number A', 'green')
    } else {
        setResult('Number B is not a divider of number A', 'red')
    }
})