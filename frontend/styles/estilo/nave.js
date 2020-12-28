import styled from 'styled-components'

const Container =styled.div`

    display:flex;
    justify-content:space-between;
    padding:3rem;
    position:absolute;
    z-index:1000;
    top:0;
    width:100vw;
    box-sizing:border-box;
    text-align:center;
    align-items:center;
    li{
        display:inline;
        &:hover>a{
            color:#222527;
        }
    }
    ul{
        list-style:none;
        top:0;
        @media(max-width:500px ){
        display:none;
        }
    }
    a{
        
        text-decoration:none;
        color:#fff;
        padding-left:1rem;
        font-size:1.2rem;
        font-family:Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
   
`
export {Container}