import { Card, Text } from '@chakra-ui/react';
import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Grafico({ moneda }) {
  const [_moneda, setMoneda] = useState(null)
  const consultarInformacion = async () => {
    const url = 'https://mindicador.cl/api/'+moneda.codigo;
    const response = await fetch(url)
    const data = await response.json()
    setMoneda(data);     
  }
  useEffect(()=>{
    if(moneda){
      consultarInformacion();
    }
    }
    ,[moneda])


  const monthYear = (date) => `${date.toLocaleString('es-CL',{day:'numeric',month:'short',year:'numeric'})}`
  let labels = [];
  let data = null;
  if(_moneda){
    labels = _moneda.serie.map(x=>monthYear(new Date(x.fecha)))
    data = {
      labels,
      datasets:[
        {
          label:_moneda.nombre,
          data: _moneda.serie.map(x=>x.valor),
          backgroundColor: '#0078FF',
        }
      ]
    }
  }
  const opciones = {
    responsive: true
  }



  return (
    <Card className='p-3'>
      {
        _moneda ?
          (<>
            <Text size={'2rem'} fontWeight='bold'>{_moneda.nombre}
            </Text>

            <Bar
              options={opciones}
              data={data}
            />
          </>)
          : (<>Cargando</>)
      }
      {/* <Bar
    options={opciones}
    // @ts-ignore
    data={datos}
    />
   */}

    </Card>


  )
}

export default Grafico 