function render (buttons) {
  return buttons.reduce((acc, btn) => {
    return acc + `<button id="${btn.id}" type="${btn.type.toLowerCase()}">${btn.type}</button>`
  }, '')
}

export default (props) => render(props)
