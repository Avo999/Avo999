import React, {useState} from "react";
import Header from "./conponents/Header";
import Body from "./conponents/Body";
import moment from "moment";


function App() {
    moment.updateLocale('en', {week: {dow: 1}});
    const [today, setToday] = useState(moment())

    const startDay = today.clone().startOf("month").startOf("week")

    const prevHandleClick = () => setToday(prev => prev.clone().subtract(1, 'month'));
    const todayHandleClick = () => setToday(moment())
    const nextHandleClick = () => setToday(prev => prev.clone().add(1, 'month'));



    window.moment = moment

    return (
        <div className="baseStyles">
            <Header
                prevHandleClick={prevHandleClick}
                todayHandleClick={todayHandleClick}
                nextHandleClick={nextHandleClick}
                today={today}
            />
            <Body startDay={startDay}/>
        </div>
    );
}

export default App;
