const showform = () => {
  const firstInput = document.getElementById("cake_order_collection_0")
  const secondInput = document.getElementById("cake_order_collection_1")

  firstInput.addEventListener('click', (e) => {
    document.querySelector('.delivery-option').style.display = 'none'
  })

  secondInput.addEventListener('click', (e) => {
    document.querySelector('.delivery-option').style.display = 'block'
  })
}

export { showform }