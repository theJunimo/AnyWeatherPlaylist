import React from "react";
import styled from "styled-components";

const ErrorMessageBlock = styled.div``;

const ErrorMessage = () => {
    return (
        <ErrorMessageBlock>
            <h1>
                Oops!{" "}
                <span role="img" aria-label="oops">
                    🤭
                </span>
            </h1>
            <p>
                에러가 발생했습니다. 열심히 고치고 있으니 잠시만 기다려주세요!{" "}
                <span role="img" aria-label="fix">
                    🛠👩‍🔧
                </span>
            </p>
        </ErrorMessageBlock>
    );
};

export default ErrorMessage;
