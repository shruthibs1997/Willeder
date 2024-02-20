import {styled} from "styled-components"

const AnimatedSquare =()=>{
    return(
        <AnimatedSquareStyled></AnimatedSquareStyled>
    )
}

export default AnimatedSquare;


const AnimatedSquareStyled = styled.div`
    border: 1px solid black;
    width: 0px;
    height: 0px;
    margin: auto;
    border-top: 75px solid green;
    border-right: 75px solid yellow;
    border-bottom: 75px solid red;
    border-left: 75px solid blue;
    animation: rotateAndScale 8s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;

    @keyframes rotateAndScale {
        0% {
            transform: rotate(0deg) scale(1);
        }
        60% {
            transform: rotate(360deg);
        }
        80% {
            transform: rotate(360deg) scale(1.5);
        }
        100%{
            transform: rotate(360deg) scale(1)
        }
    }

    @media screen and (max-width: 768px){
        border-top: 50px solid green;
        border-right: 50px solid yellow;
        border-bottom: 50px solid red;
        border-left: 50px solid blue;
    }
`
