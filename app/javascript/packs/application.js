// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import "controllers"
import { navbarActive } from "../components/navbar";
require ("dropzone/dist/min/dropzone.min.css");
require ("dropzone/dist/min/basic.min.css");

//Flatpickr
import { initFlatpickr } from "../plugins/flatpickr";
import "flatpickr/dist/flatpickr.min.css"
require("flatpickr/dist/themes/airbnb.css");

//Internal imports
import { showform } from "../components/form";
import { fetchFeed, insta } from "../components/instagram"
import { backToTop } from "../components/to_top_button";


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  navbarActive();
  initFlatpickr();
  showform();
  backToTop();
  fetchFeed();
});
