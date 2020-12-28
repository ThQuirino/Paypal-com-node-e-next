
import react,{useState}from 'react'
import {Container,Card,BlocoA,Card2,BlocoB,ContainerBody} from '../../styles/estilo/ecommerce'
import tenis from '../fotos/ten.png'
import tenis2 from '../fotos/ten.png'
import Carrossel from './carross'
import Nav from './nav'
import axios from '../axios/api'
import { applyProps } from 'react-three-fiber'
import Router from 'next/router'
const Produtos=()=>{

    const data=[
        {
            nome:"tênis",
            preco:"15,05",
            cor:"#3E82FC"

        },{
            nome:"Tênis2",
            preco:"20,00",
            cor:"#FE2C54",
            
        },
        {
            nome:"Tênis3",
            preco:"35,00",
            cor:"#47C072"
        },
        {
            nome:"Tênis4",
            preco:"40,00",
            cor:"#FFA500"
        }
    ]

    async function handleSubmit(valor) {
        const {nome,preco}=valor
       
        const data={
            nome:nome,
            preco:preco
        }

         const response=await axios.post('gui',data);
         console.log( response.data)
         Router.push(response.data)
       }
    return(
        <Container>
          <Nav></Nav>
           <Carrossel/>
           <ContainerBody>
           {    
            data.map(valor=>(
                <Card key={valor.nome} background={valor.cor}>
                    <BlocoA>
                        <h1>{valor.nome}</h1>
                        <span>O máximo de inovação para o seu conforto</span>
                        <h2>Preço: R${valor.preco}</h2>
                    </BlocoA>
                    <BlocoB>
                        <img src={tenis} className="foto1"/>
                        <button className="button" onClick={()=>{handleSubmit(valor)}} type="submit">Enviar</button>
                    </BlocoB>
    
                </Card>
            ))
            }
           </ContainerBody>
            
        </Container>
    )
}
export default Produtos