import React from "react";
import { getSoundCloudURL } from "lib/api";
import styled from "styled-components";
import media from "styles/media";

const SCWidgetBlock = styled.div`
    margin: 0 auto;
    margin-top: 1rem;
    border-top: 1px solid #e8e8e8;
    padding: 2rem 0;
    width: 30rem;
    height: 40rem;
    ${media("tablet")`
        width: 100%`};
`;

type propsType = {
    weather: string;
};

const SCWidget = ({ weather }: propsType) => {
    return (
        <SCWidgetBlock>
            <iframe
                title="SCwidget"
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={getSoundCloudURL(weather)}
            ></iframe>
        </SCWidgetBlock>
    );
};

export default SCWidget;
