import MyComponent from "./MyComponent";
//Arquivo de estilo

const FirstComponent = () => {
    // comentario
    return (
        <div>
            {/* comentario */}
            <h1>Meu primeiro componente.</h1>
            <p className="teste">Legal</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;
