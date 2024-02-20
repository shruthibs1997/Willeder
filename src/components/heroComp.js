import styled from "styled-components";
import Laptop2 from "../Images/Laptop2.png"
import LogoComp from "./logoComp";
import NavComp from "./navComp";

const HeroComp =()=>{
    return(
        <HeroCompStyle imageUrl={Laptop2}>
            <NavComp/>
            <LogoComp/>
            <div className="heading"> Lorem ipsum dolor sit amet </div>
            <div className="subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="scrollComp">
                <div className="scroll">Scroll</div>
                <div className="line"></div>
            </div> 
        </HeroCompStyle>
    )
}

export default HeroComp;

const HeroCompStyle = styled.div`
    position: relative;
    border: 1px solid black;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(${props => props.imageUrl});
    background-repeat: none;
    background-size: 100% 100vh;
    .heading{
        color: #FFFFFF;
        background-color: #6A45FF;
        height: 48px;
        font-family: Noto Sans;
        font-size: 32px;
        font-weight: 600;
        line-height: 51.2px;
        letter-spacing: 5px;
        margin-top: 4vh;
    }
    .subTitle{
        width: 70%;
        color: #FFFFFF;
        font-family: Noto Sans;
        font-size: 20px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 3px;
        margin: auto;
        margin-top: 0.8vh;
    }
    .scrollComp{
        position: absolute;
        width: 100%;
        bottom: 0px;
        .scroll{
            color: #FFFFFF;
            font-family: Noto Sans;
            font-size: 16px;
            font-weight: 600;
            line-weight: 25.6px;
            letter-spacing: 3px;
        }
        .line{
            margin: auto;
            width: 1px;
            height: 32px;
            background-color: #FFFFFF;
        }
    } 
    @media screen and (max-width: 768px){
        background-size: cover;
        background-position: center;
        .heading{
            background-color: transparent;
            height: auto;
            font-size: 20px;
            line-height: 32px;
            margin-top: 6vh;
        }
        .subTitle{
            width: 90%;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            margin-top: 6vh;
        }
        .scrollComp{
            .line{
                height: 64px;
            }
        } 
    }
`