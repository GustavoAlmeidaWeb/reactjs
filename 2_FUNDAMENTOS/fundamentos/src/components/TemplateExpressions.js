const TemplateExpressions = () => {
    const name = 'Gustavo';

    const data = {
        age: 33,
        job: 'Programador',
    };

  return (
    <div>
        <h2>Olá {name}, tudo bem? </h2>
        <h3>Você é um: {data.job}</h3>
    </div>
  )
}

export default TemplateExpressions