import React,{useRef, useState,useEffect }from 'react'
import {
    Container,
    Body,
    BlocoConteudo,
    BodyContainer} from '../../styles/estilo/carrosse'
import { Canvas, useFrame } from 'react-three-fiber'
import Nav from './nav'
import Fot from '../fotos/fot1.png'

import animationData from './travel-tickets.json'
const Carrossel =()=>{
    const bar=useRef([])

    let cont=0;
   useEffect(()=>{
       setInterval(()=>{
        let tamanho=bar.current.children
        tamanho[cont].classList.add("carrossel2")
        cont++;
        if(tamanho.length<=cont){
            cont=0;
        }
        tamanho[cont].classList.remove("carrossel2")
        },3000)
   },[])
    return(
        <Container>    
              
            <BlocoConteudo ref={bar}>
              
                <Body className='carrossel carrossel2' color='#3E82FC'>  
                    <h1>Mussum Ipsum, cacilds vidis litro abertis.</h1>
                </Body>
                <Body className='carrossel'  color='#FE2C54' >
                    <h1>Viva Forevis aptent taciti sociosqu ad litora torquent</h1>
                </Body>
                <Body className='carrossel'  color='#47C072' >
                    <h1> Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis</h1>
                </Body>         
         </BlocoConteudo>
        </Container>
    )
}
export default Carrossel;