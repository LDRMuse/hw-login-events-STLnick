import { Input, Title } from './components'

const inputProps = {
  Input: [
    {
      type: 'text',
      label: 'Username'
    },
    {
      type: 'password',
      label: 'Password'
    }
  ]
}

// const buttonProps = {
//   Button: [

//   ]
// }

function render () {
  document.querySelector('#root').innerHTML = `
    ${Title()}
    <form>
      ${Input(inputProps.Input)}
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
