const showform = () => {
  const firstInput = document.getElementById("cake_order_collection_pick_up")
  const secondInput = document.getElementById("cake_order_collection_delivery")

  firstInput.addEventListener('click', (e) => {
    document.querySelector('.delivery-option').style.display = 'none'
  })

  secondInput.addEventListener('click', (e) => {
    document.querySelector('.delivery-option').style.display = 'block'
  })
}

export { showform }