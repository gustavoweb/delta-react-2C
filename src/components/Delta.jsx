import React, {useState} from 'react';
import './Delta.css';

function Delta(){
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [delta, setDelta] = useState(null);
    
    const Calculo = () =>{
        //converte os valores em Float
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numC = parseFloat(c);

        //verifica se os valores são válidos
        if(isNaN(numA) || isNaN(numB) || isNaN(numC)){
            setDelta('Por favor, digite valores válidos');
            return;
        }

        //calculo do Delta(b*b-4*a*c)
        const res = (numB*numB)-4*numA*numC;
        setDelta(res);
    }

    return(
        <>
            <main>
                <h1>Calculo do Delta</h1>

                <input type="number" placeholder="A" value={a} 
                onChange={(e) => setA(e.target.value)}/>

                <input type="number" placeholder="B" value={b} 
                onChange={(e) => setB(e.target.value)}/>

                <input type="number" placeholder="C" value={c} 
                onChange={(e) => setC(e.target.value)}/>

                <button onClick={Calculo}>Calcular</button>
                 
                <h3>O Delta é: {delta}</h3>
            </main>
        </>
    );
};
export default Delta;