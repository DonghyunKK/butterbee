import flatpickr from "flatpickr";

const initFlatpickr = () => {
  flatpickr(".datepicker", {
    allowInput: true,
    minDate: "today",
    disable: [
        {
            from: "today",
            to: new Date().fp_incr(7)
        }
    ]
  });
}

export { initFlatpickr };