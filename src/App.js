import React, {useEffect, useState} from "react";
import Header from "./conponents/Header";
import Body from "./conponents/Body";
import moment from "moment";
import Api from "./Api";


function App() {
    moment.updateLocale('en', {week: {dow: 1}});
    const [today, setToday] = useState(moment());
    const [events, setEvents] = useState([])
    const startDay = today.clone().startOf("month").startOf("week");

    const totalDays = 42

    const prevHandleClick = () => setToday(prev => prev.clone().subtract(1, 'month'));
    const todayHandleClick = () => setToday(moment())
    const nextHandleClick = () => setToday(prev => prev.clone().add(1, 'month'));

    const startDayQuery = startDay.clone().format("X");
    const endDayQuery = startDay.clone().add(totalDays, "days").format("X")

    window.moment = moment

    useEffect( () => {
        const fetchData = async () => {
            const {data} = await Api.getData(startDayQuery, endDayQuery );
            setEvents(data)

        }
        fetchData()
    }, [today])

    return (
        <div className="baseStyles">
            <Header
                prevHandleClick={prevHandleClick}
                todayHandleClick={todayHandleClick}
                nextHandleClick={nextHandleClick}
                today={today}
            />
            <Body startDay={startDay}
                  today={today}
                  totalDays={totalDays}
                  events={events}
            />
        </div>
    );
}

export default App;
