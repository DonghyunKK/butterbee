import flatpickr from "flatpickr";

const initFlatpickr = () => {
  flatpickr(".datepicker", {
    minDate: "today",
    disable: [
        {
          from: "today",
          to: new Date().fp_incr(7)
        },
        // function(date) {
        //   // return true to disable
        //   return (date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 );
        // },
      ],
      enable: [
        "2022-05-07",
        "2022-06-04",
        "2022-06-05",
        "2022-06-11",
        "2022-06-12",
        "2022-06-25",
        "2022-06-26",
      ],
    "locale": {
        "firstDayOfWeek": 1 // start week on Monday
    }
  });
}

export { initFlatpickr };