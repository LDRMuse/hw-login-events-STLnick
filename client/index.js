import { Password, ResetButton, SubmitButton, Title, Username } from './components'

function render() {
  document.querySelector('#root').innerHTML = `
    ${Title()}
    <form>
      ${Username()}
      ${Password()}
      ${SubmitButton()}
      ${ResetButton()}
    </form>
  `

  const username = document.querySelector('#username')
  const password = document.querySelector('#password')

  username.addEventListener('focus', () => {
    console.log('Focused on the username input!')
  })
  username.addEventListener('blur', () => {
    console.log('The username field was left...')
  })

  password.addEventListener('focus', () => {
    console.log('Focused on the password input!')
  })
  password.addEventListener('blur', () => {
    console.log('The password field was left...')
  })
}

render()
