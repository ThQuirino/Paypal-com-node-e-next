import styled,{keyframes} from 'styled-components'
const keyfr=keyframes`
    from {
        transform:scale(0.9)
    }to{
        transform:scale(1)
    }
`;

const Container=styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    color:#fff;
    height:100vh;
    overflow:hidden;
    max-width:100vw;
    background:#3E82FC;
`;
const Body =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    position:absolute;
    background-color:${props=>props.color ? props.color:"#FE2C54"};
    height:100%;
    min-height:100vh;
    transition:3s;
    
`;
const BodyContainer=styled.div`
    height:100vh;
    overflow:hidden;
   

`

const BlocoConteudo=styled.div`
        position:relative;
        height:100%;
        width:100%;
        .carrossel{
        margin-top:100%;
        opacity:0;
    }.carrossel2{
        margin-top:0%;
        z-index:1;
        opacity:1;
    }
       

       
`;
export {Container,Body,BlocoConteudo,BodyContainer}