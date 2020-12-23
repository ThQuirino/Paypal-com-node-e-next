import styled from 'styled-components'

const Container=styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    max-width:400px;
    
    
`;
const ContainerBody=styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    width:100vw;
    max-width:100vh;
    height:auto;
    @media(max-width:500px){
        display:flex;
        flex-direction:column;
       
    }
`;
const Card=styled.div`
    box-sizing:border-box;
    @media(max-width:500px){
       width:100vw;
       
    }
    display:flex;
    flex-direction:row;
    width:50vw;
    height:auto;
    background:${props=>props.background};
    align-items:center;
    
    justify-content:center;
    color:#fff;
    .foto1{
        width:28vw;
      
    }
    padding:3rem 1rem 3rem 1rem;
    &:hover{
        background:#222527;
        padding:1rem;
        z-index:1;
        transition:2s;
        
    }
`
const BlocoA=styled.div`
   h1{
       padding-bottom:1rem;
   }
   h2{
       padding-top:1rem;
   }
`;
const Card2=styled(Card)`
    background:#fff;
    color:#000;
`
const BlocoB=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .button{
        width:10vw;
        background:#222527;
        color:#fff;
        border:none;
        border-radius:1rem;
        height:2rem;
        
    }
    .button:hover{
        background:#fff;
        color:#000;
    }
`;
export{Container,Card,BlocoA,Card2,BlocoB,ContainerBody}