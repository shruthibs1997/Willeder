import AnimatedSquare from "./animatedSquare";
import {styled} from "styled-components"

const AnimationComp =()=>{
    return(
        <AnimationCompStyle>
            <AnimatedSquare/>
        </AnimationCompStyle>
    )
}

export default AnimationComp;


const AnimationCompStyle = styled.div`
    width: 100%;
    padding: 200px 0px 200px 0px;
`
