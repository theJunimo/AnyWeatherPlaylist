import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1.3rem 0;
    border-bottom: 1px solid #e8e8e8;

    h1 {
        margin: 0;
        text-align: center;
        font-style: italic;
    }

    p {
        margin-bottom: 0;
        text-align: center;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <h1>AnyWeatherPlayList</h1>
            <p>Updated Every Saturday</p>
        </HeaderBlock>
    );
};

export default Header;
