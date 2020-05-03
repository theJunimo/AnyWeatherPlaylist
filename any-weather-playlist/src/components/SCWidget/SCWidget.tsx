import React from "react";
import { useSelector } from "react-redux";
import "./SCWidget.scss";
import { RootState } from "stores/modules";
import { getSoundCloudURL } from "lib/api";

const SCWidget = () => {
    const { main } = useSelector((state: RootState) => state.base.weather);

    const getPlaylistURL = () => {
        let playlist;
        if (["clear sky", "clear"].includes(main)) {
            playlist = 871183640;
        } else if (["shower rain", "rain", "thunderstorm"].includes(main)) {
            playlist = 871190231;
        } else if (main === "snow") {
            playlist = 871195301;
        } else {
            playlist = 871176140;
        }
        return getSoundCloudURL(playlist);
    };

    return (
        <div className="SCWidget">
            <iframe
                title="SCwidget"
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={getPlaylistURL()}
            ></iframe>
        </div>
    );
};

export default SCWidget;
