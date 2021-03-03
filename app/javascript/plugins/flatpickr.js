import flatpickr from "flatpickr";

const initFlatpickr = () => {
  flatpickr(".datepicker", {
    allowInput: true,
    minDate: "today",
    disable: [
        {
            from: "today",
            to: new Date().fp_incr(5)
        }
    ]
  });
}

export { initFlatpickr };