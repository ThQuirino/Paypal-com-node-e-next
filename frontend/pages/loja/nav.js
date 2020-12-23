import { useEffect } from 'react'
import {Container} from '../../styles/estilo/nave'
const Nav =()=>{
    
    return (
     
            <Container>
                <a href="#">NevDeam</a>
                <ul>
                    <li><a href="#">home</a></li>
                     <li><a href="#">Cadastro</a></li>
                     <li><a href="#">Login</a></li>
                     <li><a href="#">Sobre</a></li>
                </ul>

            </Container>
       
        )
}
export default Nav