import React from "react";


function Button({text, disable})   {

    const clickEvent = () =>    {
        console.log({text}.text);
    }

    return  (
        <>
            <button
                onClick={clickEvent}
                disabled={disable}
            >
                {text}
            </button>
        </>
    )
}

export default Button;
