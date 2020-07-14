function render (buttons) {
  // return buttons.reduce((acc, btn) => {
  //   return acc + `<button id="${btn.id}" type="${btn.type.toLowerCase()}">${btn.type}</button>`
  // }, '')
  return buttons.map((btn) => {
    return `<button id="${btn.id}" type="${btn.type.toLowerCase()}">${btn.type}</button>`
  }).join('')
}

export default (props) => render(props)
