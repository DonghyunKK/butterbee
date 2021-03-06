const showform = () => {
  // const firstInput = document.getElementById("cake_order_collection_pick_up")
  // const secondInput = document.getElementById("cake_order_collection_delivery")
  const inputs = document.querySelectorAll('.input-radio')
  // console.log(inputs);

  inputs.forEach(input => {
    input.addEventListener('click', (e) => {
      if (e.target.value === 'Delivery') {
        document.querySelector('.delivery-option').style.display = 'block'
      } else {
        document.querySelector('.delivery-option').style.display = 'none'
      }
    })
  })

  // inputs.addEventListener('click', (e) => {
  //   if (e.target.value === 'Delivery') {
  //     document.querySelector('.delivery-option').style.display = 'block'
  //   } else {
  //     document.querySelector('.delivery-option').style.display = 'none'
  //   }
  // })

  // const firstcupcakeInput = document.getElementById("cupcake_order_collection_pick_up")
  // const secondcupcakeInput = document.getElementById("cupcake_order_collection_delivery")

  // firstInput.addEventListener('click', (e) => {
  //   document.querySelector('.delivery-option').style.display = 'none'
  // })

  // secondInput.addEventListener('click', (e) => {
  //   document.querySelector('.delivery-option').style.display = 'block'
  // })

  // firstcupcakeInput.addEventListener('click', (e) => {
  //   document.querySelector('.delivery-option').style.display = 'none'
  // })

  // secondcupcakeInput.addEventListener('click', (e) => {
  //   document.querySelector('.delivery-option').style.display = 'block'
  // })
}

export { showform }