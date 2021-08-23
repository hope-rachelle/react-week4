import React from "react";

export default function ForecastTime(){
        let hourIntervals = new Date();
        let hour = hourIntervals.getHours();
        let hourCode = "pm";
        if (hour < 12) {
        hourCode = "am"; } 
        if (hour > 12) {
        hour = hour - 12;}
    


return(
    <div class="row hour-intervals">
        <div class="col-2" id="two-hour">2pm</div>
        <div class="col-2" id="four-hour">4pm</div>
        <div class="col-2" id="six-hour">6pm</div>
        <div class="col-2" id="eight-hour">8pm</div>
        <div class="col-2" id="ten-hour">10pm</div>
        <div class="col-2" id="twelve-hour">12pm</div>
    </div>

);
}