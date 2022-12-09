
import { Box, Flex } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import Buscador from './components/Buscador';
import Conversor from './components/Conversor';
import Grafico from './components/Grafico';
import Menu from './components/NavBar';
import MyApi from './MyApi';
import { useToast } from '@chakra-ui/react'

function App() {
  const toast = useToast()
  const [monedaSeleccionada,setMonedaSeleccionada]  = useState(null);
  const [monedas,setMonedas]  = useState([]);
  const [dolares,setDolares]  = useState([]);
  const [buscar,setBuscar] = useState('');
  const [sort, setsort] = useState(false); 
  const setMonedaSeleccionado = (e)=>{
    setMonedaSeleccionada(e);
  }

  const onMonedasChange = (e) =>{
    setMonedas(e);
  }

  const onBuscar=(e)=>{
    setBuscar(e);
  }

  const onReverse=()=>{
    //TODO: implementar
  }

  const switchBusqueda = ()=>{
    setsort(!sort);
    toast({
      title: 'Sort!',
      description: `Se ordenó el array de forma ${sort?'descendente':'ascendente'} `,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }


  return (
    <div className="container">
      <Menu/>
      <Buscador onReverse={onReverse} onBuscar={onBuscar} onSort={switchBusqueda} />      
      <div className="my-3">
        <MyApi orden={sort} buscar={buscar}  onMonedasChange={onMonedasChange} onClickMoneda={setMonedaSeleccionado}/>
      </div>
      <Flex width={'100%'} gap={'2rem'} >
        <Box flex={1}>
        <Grafico moneda = {monedaSeleccionada}  />
        </Box>
        <Box width={"400px"}>
          <Conversor monedas={monedas}/>
        </Box>
      </Flex>
      
    </div>
  );
}

export default App;
