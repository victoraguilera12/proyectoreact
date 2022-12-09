import { Card, Flex, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


function MyApi({onClickMoneda,onMonedasChange,buscar,orden}) {
    const [response, setResponse] = useState({});
    const [monedas, setMonedas] = useState([])
    const consultarInformacion = async () => {
        const url = 'https://mindicador.cl/api';
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        const _monedas = filtrarMonedas(data); 
        setResponse(data);
        setMonedas(_monedas)
        onMonedasChange(_monedas);
        onClickMoneda(_monedas[0])

    }
    useEffect(() => {
        consultarInformacion();
    },[]);



    const filtrarMonedas = (obj) => {
        const monedas = [];
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value == 'object') {
                monedas.push(value)
            }
        }
        return monedas;
    }

    const charDecider = (unidadDeMedida,valor) => (unidadDeMedida==='Pesos'||unidadDeMedida==='Dólar') ? `$${valor.toLocaleString('es-CL')}`:`${valor.toLocaleString('es-CL')}%`;
    return (
        <Flex className='monedas p-2'>
            {
                monedas.filter(x=>buscar?x.nombre.includes(buscar):true).sort((a,b)=>orden?a.valor-b.valor:b.valor-a.valor).map(x => (
                    <Card key={x.codigo} onClick={()=>onClickMoneda(x)} className='moneda p-2'>
                        <Stat className='moneda-label' >
                            <StatLabel>{x.nombre}</StatLabel>
                            <StatNumber>{charDecider(x.unidad_medida,x.valor)}</StatNumber>
                            <StatHelpText>{new Date(x.fecha).toLocaleString('es-CL').split(',')[0]}</StatHelpText>
                        </Stat>
                    </Card>

                ))
            }




        </Flex>
    );
}

export default MyApi;
