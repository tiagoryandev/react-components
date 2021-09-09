const Form = () => {
    function checkValue (event) {
        if (event.key === "Enter") {
            if (event.target.value !== "") {
                event.target.value = ""
            };
        };
    };

    return <fieldset>
        <legend>Componente: Formulário Simples</legend>
        <label htmlFor="username">Nome de Usuário: </label>
        <input type="text" id="username" onKeyPress={checkValue} />
    </fieldset>
};

export default Form;