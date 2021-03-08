import swal from "sweetalert";
import Swal from "sweetalert2";

// const initSweetalert = (selector, options = {}, callback = () => {}) => {
//   const swalButton = document.querySelector(selector);
//   if (swalButton) { // protect other pages
//     swalButton.addEventListener('click', () => {
//       swal(options).then(callback); // <-- add the `.then(callback)`
//     });
//   }
// };

const initNewOrderAlert = () => {
  // console.log(window.location.pathname)
  const newOrderButton = document.getElementById("newOrderSubmitButton");

  if (newOrderButton) {
    newOrderButton.addEventListener("click", (event) => {
      // event.preventDefault();
      // console.log(event)
      // swal({
      //   title: "Please Wait",
      //   text: "Processing",
      //   icon: "info"
      // }).then(function(confirm) {
      //   if (confirm) {
      //     swal({
      //       title: "Thank you for your order!",
      //       text: "We will endeavour to respond to your order request within 24 hours",
      //       icon: "success"
      //     }).then(function() {
      //       window.location.pathname = "/";
      //     })
      //   } else {
      //     window.location.pathname = "/new";
      //   }
      // })
      // function(confirm) {
      //   if (confirm) {
          Swal.fire({
            title: "Thank you for your order!",
            text: "We will endeavour to respond to your order request within 24 hours",
            showLoaderOnConfirm: true
          }).then(function() {
            window.location.pathname = "/";
          })
        // } else {
        //   window.location.pathname = "/new";
        // }
      // }

      // swal({
      //   title: "Thank you for your order!",
      //   text: "We will endeavour to respond to your order request within 24 hours",
      //   icon: "success"
      // }).then(function() {
      //   window.location.pathname = "/";
      // })
    });
  };
};

// export { initSweetalert };
export { initNewOrderAlert };