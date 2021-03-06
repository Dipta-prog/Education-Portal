// import React, { useState } from "react";
// import StudentAssignment from "../StudentAssignment";

// const SetTimes = () => {
//   let time = new Date().toLocaleTimeString();
//   var times = new Date();
//   var hrs = times.getHours();
//   var min = times.getMinutes();
//   var sec = times.getSeconds();

//   //   console.log(hrs, min, sec);
//   const [cTime, setCtime] = useState(time);
//   const updateTime = () => {
//     time = new Date().toLocaleTimeString();
//     setCtime(time);
//   };
//   setInterval(updateTime, 1000);
//   if (hrs === 2) {
//     return <StudentAssignment></StudentAssignment>;
//   }
//   return (
//     <div>
//       <h2>{cTime}</h2>
//       <h1>
//         {hrs}: {min} : {sec}
//       </h1>
//     </div>
//   );
// };

// export default SetTimes;

import React, { useEffect, useState } from "react";
import StudentAssignment from "../StudentAssignment";

const SetTimes = () => {
  var times = new Date();
  var hrs = times.getHours();
  var min = times.getMinutes();
  var sec = times.getSeconds();
  const [seconds, setSeconds] = useState(sec);
  const [minute, setMinute] = useState(min);
  const [hour, setHour] = useState(hrs);
  useEffect(() => {
    if (seconds < 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (minute < 0) {
      setTimeout(() => setMinute(minute - 1), 1000);
    }
    if (hour < 0) {
      setTimeout(() => setHour(hour - 1), 1000);
    } else {
      setSeconds("Boom!!!!");
    }
  });
  return (
    <div>
      <div>{seconds}</div>
      <h1>
        {hrs}: {min} : {sec}
      </h1>
    </div>
  );
};

export default SetTimes;

// import React from "react";

// const SetTimes = () => {
//   var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

//   // Update the count down every 1 second
//   var x = setInterval(function () {
//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML =
//       days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//     // If the count down is over, write some text
//     // if (distance < 0) {
//     //   clearInterval(x);
//     //   document.getElementById("demo").innerHTML = "EXPIRED";
//     // }
//   }, 1000);
//   return (
//     <div>
//       <p id="demo"></p>
//     </div>
//   );
// };

// export default SetTimes;
