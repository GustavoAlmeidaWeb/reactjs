
const Events = () => {
    const handleMyEvent = e => {
        console.log(e);
        console.log('Evento Ativo');
    };

    const renderTeste = x => {
        if(x){
            return <h1>Isso funciona</h1>;
        } else {
            return <h1>Isso tambem funciona</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={()=> console.log('Clicadooooo')}>Clique aqui tbm!</button>
            </div>
            <div>
                <button onClick={()=>{
                    if(true){
                        console.log('Isso não é bom!');
                    }
                }}>Clique aqui please</button>
            </div>
            {renderTeste(true)}
            {renderTeste(false)}
        </div>
  )
}

export default Events;