import React from "react";

const ErrorMessage = () => {
    return (
        <div>
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
        </div>
    );
};

export default ErrorMessage;
