// @ts-nocheck
import { Flex, Input, Button } from '@chakra-ui/react';
import { useState } from "react";
function Buscador({onBuscar,onSort,onReverse}) {
    const [buscar, setBuscar] = useState("")
    
    
    const searcher = (e) =>{
        setBuscar(e.target.value)
        onBuscar(e.target.value);
     }
  
    return (
    <Flex gap={4} className="my-4">
    <Input value={buscar} placeholder="Busca Tu Moneda"  onChange={searcher} variant='filled' />
    <Button onClick={onSort} colorScheme='twitter'>Sort</Button>
    <Button onClick={onSort} colorScheme='twitter'>Reverse</Button>
    
    </Flex>
 
  );
}

export default Buscador;