import React from "react";

export default function Time(){
let now = new Date()
let month = now.toLocaleDateString('default', { month: 'long' });
//let months = now.getMonth(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])];
//let month = months[now.getMonth()];
let weekDay = now.toLocaleDateString('default', { weekday: 'long' });
//let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//let weekDay = days[now.getDay()];
let day = now.getDate();
let hour = now.getHours();
if (hour > 12) {
    hour = hour - 12;
}
let minute = now.getMinutes();
if (minute < 10) {
    minute = `0${minute}`;} 


return(
    <h5> {weekDay}, {month} {day} {hour}:{minute}</h5>
);
}