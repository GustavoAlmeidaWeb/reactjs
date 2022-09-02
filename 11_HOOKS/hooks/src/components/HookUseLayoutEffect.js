import { useLayoutEffect, useEffect, useState} from "react"

const HookUseLayoutEffect = () => {

    const [name, setName] = useState('Um nome');

    useEffect(() => {
        console.log('2');
        setName('Terceiro o nome');
    }, []);

    // Execute por primeiro no load da pagina
    useLayoutEffect(() => {
        console.log('1');
        setName('Outro nome!');
    },[])

    console.log(name);

  return (
    <div>
        <h2>HookUseLayoutEffect</h2>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect