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
          from: "2021-05-01",
          to: "2021-06-06"
        },
        {
          from: "2021-06-21",
          to: "2021-06-27"
        }
    ],
    "locale": {
        "firstDayOfWeek": 1 // start week on Monday
    }
  });
}

export { initFlatpickr };