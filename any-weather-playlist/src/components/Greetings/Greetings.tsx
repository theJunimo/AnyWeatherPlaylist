import React, { useState, useEffect } from "react";
import "./Greetings.scss";

type GreetingsProps = {
    userName: string;
    weather: string;
};

const Greetings = ({ userName, weather }: GreetingsProps) => {
    const [msg, setMsg] = useState("Welcome!");

    useEffect(() => {
        if (["clear sky", "clear"].includes(weather)) {
            setMsg("What a nice day!");
        } else if (
            ["clouds", "few clouds", "scattered clouds", "broken clouds"].includes(weather)
        ) {
            setMsg("Everybody else shares the same cloudy sky.");
        } else if (["shower rain", "rain", "thunderstorm"].includes(weather)) {
            setMsg("Stay dry");
        } else if (weather === "snow") {
            setMsg("HOORAY for Snow Days!");
        } else {
            setMsg("Today's weather is...¯\\_(ツ)_/¯");
        }
    }, [weather]);

    return (
        <div className="Greetings">
            <div className="content">
                <span>{`${userName},`} &nbsp; </span>
                <span>{msg}</span>
            </div>
        </div>
    );
};

export default Greetings;
