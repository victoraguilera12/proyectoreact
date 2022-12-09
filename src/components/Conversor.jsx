// @ts-nocheck
import Form from 'react-bootstrap/Form';
import { Button, Card, Flex, Select, Stack, Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useState, } from "react";
function Conversor({ monedas }) {
    const [buscar, setBuscar] = useState("")

    return (
        <Card className='p-4'>
            <Stack gap={'1rem'}>
                <Text size={'2rem'}>Conversor de Monedas</Text>
                <Flex gap={'1rem'}>
                    <Input value={buscar} placeholder="Valor" variant='filled' />
                    <Select variant='filled' placeholder='Moneda' >
                        {
                            monedas?.map(x => (
                                <option value={x.codigo}></option>
                            ))
                        }
                    </Select>
                </Flex>
                <Flex gap={'1rem'}>
                    <Input value={buscar} placeholder="Valor" variant='filled' />
                    <Select variant='filled' placeholder='Moneda' >
                        {
                            monedas?.map(x => (
                                <option value={x.codigo}></option>
                            ))
                        }
                    </Select>
                </Flex>
                <Button>
                    Convertir
                </Button>
            </Stack>

        </Card>

        // <Form>
        //   <Form.Group className="mb-3" controlId="formBasicEmail">
        //     <Form.Label className='mb-3 mt-3 text-center'>Buscador de Monedas</Form.Label>
        //     <Form.Control type="text"    />
        //     <Form.Text className="text-muted">
        //       We'll never share your email with anyone else.
        //     </Form.Text>
        //   </Form.Group>
        //   <Button variant="primary" type="submit">
        //     Submit
        //   </Button>
        // </Form>
    );
}

export default Conversor;