function render(inputs) {
  return inputs.map(input => {
    return `<div>
    <label for="${input.label.toLowerCase()}" class="screen-reader-text">${input.label}</label>
    <input id="${input.label.toLowerCase()}" type="${input.type}" placeholder="${input.label}">
  </div>`
  }).join('')
}

export default (inputs) => render(inputs)
