import { useState } from "react";

const Button = () => {
    const [value, setValue] = useState(0)

    function Add () {
        setValue(value + 1);
    };

    return <>
        <br/>
        <button onClick={Add}>
            Valor: {value}
        </button>
    </>;
};

export default Button;