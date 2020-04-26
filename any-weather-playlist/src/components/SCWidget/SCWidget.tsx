import React from "react";
import { useSelector } from "react-redux";
import "./SCWidget.scss";
import { RootState } from "stores/modules";

const SCWidget = () => {
    const { weather } = useSelector((state: RootState) => state.base);
    const main = weather.main.toLowerCase();

    let playListId = "871176140";

    if (main === "clear sky" || main === "clear") {
        playListId = "871183640";
    } else if (main === "shower rain" || main === "rain" || main === "thunderstorm") {
        playListId = "871190231";
    } else if (main === "snow") {
        playListId = "871195301";
    }

    return (
        <div className="SCWidget">
            <iframe
                title="SCwidget"
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playListId}&color=%23000000&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`}
            ></iframe>
        </div>
    );
};

export default SCWidget;
