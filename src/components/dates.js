import React, { useEffect, useState } from "react";
import "./Dates.css";

export default function Dates() {
  const [billNumber, setBillNumber] = useState("");
  const [billedDate, setBilledDate] = useState("");
  const [billTime, setBillTime] = useState("");

  useEffect(() => {
    // Create a new Date object to get the current date and time
    const currentDate = new Date();

    // Format the date in a custom format (e.g., yyyy-mm-dd)
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate.getFullYear()}`;

    // Format the time in 12-hour clock format (e.g., hh:mm AM/PM)
    const hours = currentDate.getHours() % 12 || 12;
    const minutes = currentDate.getMinutes();
    const amOrPm = currentDate.getHours() >= 12 ? "PM" : "AM";
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${amOrPm}`;

    // Generate a bill number using date and randomVal
    const randomVal = Math.floor(Math.random() * 100);
    const billNumber = `B${formattedDate.replace(/-/g, "")}-${randomVal}`;

    // Update the state with the calculated values
    setBillNumber(billNumber);
    setBilledDate(formattedDate);
    setBillTime(formattedTime);
  }, []);
  
 
  return (
    <>
      <hr className="custom-hr" />
      <article>
        <ul>
          {/* Old Code
          <div class="container">
            <div class="left"></div>
            <div class="right">
              <span className="date-box">Date : {billedDate}</span>
            </div>
          </div>

          <div class="container">
            <div class="left"></div>
            <div class="right">
              <span className="time-box">Time : {billTime}</span>
            </div>
          </div> */}
          <div class="flex-container">
            <div class="item1"></div>
            <div class="item2">
              <span className="date-box">Date : {billedDate}</span>
            </div>
          </div>

          <div class="flex-container">
            <div class="item1">
              <span className="bill-box">Bill No : {billNumber}</span>
            </div>
            <div class="item2">
              <span className="time-box">Time : {billTime}</span>
            </div>
          </div>
        </ul>
      </article>
    </>
  );
}




