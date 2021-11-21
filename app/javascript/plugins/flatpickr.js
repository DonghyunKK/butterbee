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
    ],
    enable: [
      {
        from: "2021-12-11",
        to: "2021-12-12"
      },
      {
        from: "2021-12-18",
        to: "2021-12-19"
      },
      {
        from: "2022-01-08",
        to: "2022-01-09"
      },
      {
        from: "2022-01-22",
        to: "2022-01-23"
      },
      {
        from: "2022-02-12",
        to: "2022-02-13"
      },
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