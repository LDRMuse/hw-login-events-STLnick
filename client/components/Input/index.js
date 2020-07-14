function render(inputs) {
  return inputs.reduce((acc, input) => {
    return acc + `<div>
    <label for="${input.label.toLowerCase()}" class="screen-reader-text">${input.label}</label>
    <input id="${input.label.toLowerCase()}" type="${input.type}" placeholder="${input.label}">
  </div>`
  }, '')
}

export default (props) => render(props)

// <div>
//   <label for="username" class="screen-reader-text">Username</label>
//   <input id="username" type="text" placeholder="Username">
// </div>

/* <div>
  <label for="password" class="screen-reader-text">Password</label>
  <input id="password" type="password" placeholder="Password">
</div> */
