function render (inputs) {
  return inputs.reduce((acc, input) => {
    return acc + `<div>
    <label for="${input.label.toLowerCase()}" class="screen-reader-text">${input.label}</label>
    <input id="${input.label.toLowerCase()}" type="${input.type}" placeholder="${input.label}">
  </div>`
  }, '')
}

export default (props) => render(props)
