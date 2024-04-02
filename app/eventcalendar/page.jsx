'use client';
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Styles from "./page.module.css";
import Link from "next/link";
function EventCalendar() {
  const [Events, setEvents] = React.useState({});
  const [currentSelectedDay, setCurrentSelectedDay] = React.useState(null);
  function clickedDay(value, event) {
    setCurrentSelectedDay(value.toString());
    // console.log(value);
    // console.log('Clicked day: ', value)
  }
  function addEvent(e) {
    e.preventDefault();
    if (e.target[0].value == "") {
      alert("INVALID NAME");
      return;
    }
    // console.log(e.target[0].value);
    setEvents((prevData) => {
      return { ...prevData, [Events[currentSelectedDay]]: e.target[0].value };
    });
    Events[currentSelectedDay] = e.target[0].value;
    console.log(Events);
  }
  function deleteEvent() {
    setEvents((prevData) => {
      const temp = { ...prevData };
      delete temp[currentSelectedDay];
      return temp;
    });
  }
  return (
    <div>
      <div className="text-center mt-3"><Link href={"/"}><button className="btn">GO BACK</button></Link></div>
      <div className={Styles.calendarcontainer}>
        <Calendar
          onClickDay={clickedDay}
          tileClassName={({ date, view }) =>
            view === "month" && Events[date] != undefined ? Styles.eventday : null
          }
        />
        <div className={Styles.event}>
          {currentSelectedDay != null ?
            (Events[currentSelectedDay] != undefined ? (
              <div>
                <div className={Styles.eventname}>
                  Event Name : {Events[currentSelectedDay]}
                </div>
                <div className={Styles.currentdate}>
                  Event Date : {currentSelectedDay.substring(0, 16)}
                </div>
                <div>
                  <button onClick={deleteEvent}  className='btn'>
                    Delete Event
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <form onSubmit={addEvent}>
                  <div className={Styles.eventname}>
                    <label>
                      Event Name{" "}
                      <input type="text" placeholder="Enter Event Name" className='text-lg bg-white border w-1/2' />
                    </label>
                  </div>
                  <div className={Styles.currentdate}>
                    Selected Date : {currentSelectedDay.substring(0, 16)}
                  </div>
                  <div>
                    <button className='btn'>ADD EVENT</button>
                  </div>
                </form>
              </div>
            )):<h2>SELECT A DATE TO CONTINUE</h2>}
        </div>
      </div>
    </div>
  );
}
export default EventCalendar;
