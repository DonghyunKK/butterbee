import flatpickr from "flatpickr";

const initFlatpickr = () => {
  flatpickr(".datepicker", {
    minDate: "today",
    disable: [
        {
          from: "today",
          to: new Date().fp_incr(7)
        },
        function(date) {
            // return true to disable
            return (date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 );

        },
        {
          from: "2021-06-04",
          to: "2021-06-30"
        },
        {
          from: "2021-07-01",
          to: "2021-07-04"
        },
        {
          from: "2021-08-21",
          to: "2021-08-22"
        },
        {
          from: "2021-08-28",
          to: "2021-08-29"
        },
        {
          from: "2021-10-11",
          to: "2021-11-07"
        },
        "2021-07-17", "2021-07-24" 
    ],
    "locale": {
        "firstDayOfWeek": 1 // start week on Monday
    }
  });
}

export { initFlatpickr };