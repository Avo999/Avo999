import React, {useState} from 'react';
import moment from "moment";
import DayForm from "./DayForm";
import _ from 'lodash';
import {useSelector} from "react-redux";

function Body({startDay, today, totalDays,endDayQuery,startDayQuery}) {
    const [open, setOpen] = useState(null);
    const [value , setValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const events = useSelector(state => state.events.events);


    const week = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];

    const day = startDay.clone().subtract(1, 'day');

    const calendarArr = [...Array(totalDays)].map(() => day.add(1, "day").clone());

    const isCurrentMouth = (day) => today.isSame(day, 'month');

    const handleClose = () => {
        setOpen(null);
        setValue("")
        setDescriptionValue("")
    }

    return (
        <>

            <div className="tableCal">
                {
                    week.map(week => (
                        <div key={week}
                             className={week === "Sat" || week === "Sun" ? "bg-dark elem" : "elem"}>{week}</div>
                    ))
                }

                {
                    calendarArr.map((day) => (
                        <div key={day.unix()}
                             className={`${isCurrentMouth(day) ? "elem" : 'otherMouth elem'}
                        ${day.day() === 0 || day.day() === 6 ? "bg-dark elem" : "elem"} 
                    `}>
                        <span
                            onClick={() => setOpen(day.clone().format("X"))}
                            className={
                            day.clone().format("YYYY-MM-DD") === moment().format('YYYY-MM-DD') ? "currentDay" : ""
                        }>
                            {day.format("D")}
                        </span>
                            <div>
                                {
                                    events.filter(event => event.date >= day.format("X") && event.date <= day.clone().endOf("day").format("X"))
                                        .map(event => (
                                            <div key={_.uniqueId()}
                                                 onClick={() =>{
                                                     setValue(event.title)
                                                     setOpen("update")
                                                     setDescriptionValue(event.description)
                                                 }
                                            }
                                            >{event.title}</div>
                                        ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <DayForm
                open={!!open}
                id={open}
                handleClose={handleClose}
                onSetValue={(val) => setValue(val)}
                value={value}
                descriptionValue={descriptionValue}
                onSetDescriptionValue={(val) => setDescriptionValue(val)}
                startDayQuery={startDayQuery}
                endDayQuery={endDayQuery}
            />
        </>
    );
}

export default Body;