import React, { useState, useEffect, useCallback } from "react";
import "./Greetings.scss";

type GreetingsProps = {
    userName: string;
    weather: string;
};

const Greetings = ({ userName, weather }: GreetingsProps) => {
    const [msg, setMsg] = useState("Welcome!");

    const handleMsg = useCallback(() => {
        if (weather === "clear sky") {
            setMsg("What a nice day!");
        } else if (weather === "few clouds" || weather === "scattered cloud" || weather === "broken clouds") {
            setMsg("Everybody else shares the same cloudy sky.");
        } else if (weather === "shower rain" || weather === "rain" || weather === "thunderstorm") {
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
