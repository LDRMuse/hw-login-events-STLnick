// TODO: 'Grab' your form and add an event listener.
// Listen for 'blur' and 'focus.' What do these do/mean?

// 'Focus' means to click inside, or focus on, the element
// 'Blur' means to or leave that element
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const resetBtn = document.querySelector('#resetBtn')

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

resetBtn.addEventListener('click', () => {
  username.value = ''
  password.value = ''
})
