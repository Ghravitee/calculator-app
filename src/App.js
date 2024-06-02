// import logo from "./logo.svg";
import "./App.css";
import iconArrow from "../src/images/icon-arrow.svg";
import { useState } from "react";
// import "./index.css"

function App() {
  const [elapsed, setElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData));

    const { day, month, year } = Object.fromEntries(formData);

    let inputDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    const timeDiff = currentDate - inputDate;

    const elapsedYears = Math.floor(
      timeDiff / (1000 * 60 * 60 * 24 * 365)
    );
    const elapsedMonths = Math.floor(
      timeDiff / (1000 * 60 * 60 * 24 * 30)
    );
    const elapsedDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    setElapsed({
      years: elapsedYears,
      months: elapsedMonths,
      days: elapsedDays,
    });

    
    const newErrors = {};

    if (!day) {
      newErrors.day = "This field is required";
    } else if (isNaN(day) || day < 1 || day > 31) {
      newErrors.day = "Must be a valid day";
    } else {
      newErrors.day = "";
    }

    if (!month) {
      newErrors.month = "This field is required";
    } else if (isNaN(month) || month < 1 || month > 12) {
      newErrors.month = "Must be a valid month";
    } else {
      newErrors.month = "";
    }

    if (!year) {
      newErrors.year = "This field is required";
    } else if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
      newErrors.year = "Must be in the past";
    } else {
      newErrors.year = "";
    }

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
    } else {
      setErrors(newErrors);
    }

   
  }

  
  return (
    <main className="font-poppins pt-12 px-4 lg:px-16 bg-Off-White lg:min-h-screen lg:flex flex-col justify-center items-center">
      <div className="bg-white rounded-xl py-10 px-6 lg:pr-12 rounded-br-[5rem] lg:rounded-br-[10rem] lg:max-w-[41rem]">
        <form
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1">
              <label
                className={`text-xs tracking-wider ${
                  errors.day ? "text-Light-Red" : "text-Smokey-Grey"
                } font-bold`} htmlFor="day"
              >
                DAY
              </label>
              <input
                id="day"
                className={`px-3 py-2 border ${errors.day ? "border-Light-Red" : "border-Light-Grey"} rounded-md focus:outline-Purple font-extrabold text-black lg:text-3xl hover:cursor-pointer`}
                placeholder="DD"
                type="text"
                name="day"
              />
              {errors.day && (
                <p className="text-Light-Red text-[11px] mt-1 italic">{errors.day}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                className={`text-xs tracking-wider ${
                  errors.month ? "text-Light-Red" : "text-Smokey-Grey"
                } font-bold`} htmlFor="month"
              >
                MONTH
              </label>
              <input
                id="month"
                className={`px-3 py-2 border ${errors.month ? "border-Light-Red" : "border-Light-Grey"} rounded-md focus:outline-Purple font-extrabold text-black lg:text-3xl hover:cursor-pointer`}
                placeholder="MM"
                type="text"
                name="month"
              />
              {errors.month && (
                <p className="text-Light-Red text-[11px] italic mt-1">{errors.month}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                className={`text-xs tracking-wider ${
                  errors.year ? "text-Light-Red" : "text-Smokey-Grey"
                } font-bold`} htmlFor="year"
              >
                YEAR
              </label>
              <input
                id="year"
                className={`px-3 py-2 border ${errors.year ? "border-Light-Red" : "border-Light-Grey"} rounded-md focus:outline-Purple font-extrabold text-black lg:text-3xl hover:cursor-pointer`}
                placeholder="YYYY"
                type="text"
                name="year"
              />
              {errors.year && (
                <p className="text-Light-Red text-[11px] italic mt-1">{errors.year}</p>
              )}
            </div>
          </div>

          <div className="relative">
            <hr className="border-[1.5px] border-b-Light-Grey w-full my-12 lg:my-8" />
            <button className="flex justify-center items-center absolute right-[40%] -top-5 lg:-top-7 lg:right-0 hover:bg-Off-Black bg-Purple rounded-full w-16 h-16">
              <img src={iconArrow} className="h-6 w-6 lg:h-8 lg:w-8" alt="form button" />
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center italic text-5xl lg:text-7xl">
            <span className="font-extrabold text-Purple">
              {elapsed.years ? elapsed.years : "- -"}
            </span>
            <span className="font-extrabold text-Off-Black">years</span>
          </div>
          <div className="flex gap-2 items-center italic text-5xl lg:text-7xl">
            <span className="font-extrabold text-Purple">
              {elapsed.months ? elapsed.months : "- -"}
            </span>
            <span className="font-extrabold text-Off-Black">months</span>
          </div>
          <div className="flex gap-2 items-center italic text-5xl lg:text-7xl">
            <span className="font-extrabold text-Purple">
              {elapsed.days ? elapsed.days : "- -"}
            </span>
            <span className="font-extrabold text-Off-Black">days</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
