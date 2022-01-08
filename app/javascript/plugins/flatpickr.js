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
        "2022-02-13",
        {
          from: "2022-02-19",
          to: "2022-02-20"
        },
        {
          from: "2022-02-26",
          to: "2022-02-27"
        },
      ],
    "locale": {
        "firstDayOfWeek": 1 // start week on Monday
    }
  });
}

export { initFlatpickr };