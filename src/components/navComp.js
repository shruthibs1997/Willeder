import styled from "styled-components";
import NavLogo from "./navLogo";
import Hamburger from "../Images/Hamburger.png"

const NavComp=()=>{
    return(
        <NavCompStyle>
            <NavLogo/>
            <div className="menuOptions">
                <div className="text">Home</div>
                <div className="text">page 1</div>
                <div className="text">page 2</div>
            </div>
            <div className="Hamburger">
                <img className="image" src={Hamburger} alt="Hamburger" />
            </div>
            
        </NavCompStyle>
    )
}

export default NavComp;


const NavCompStyle = styled.div`
    width: 100%;
    height: 64px;
    background: rgba(255,255,255,0.85);
    position: absolute;
    top: 0px;
    display: grid;
    grid-template-columns: 20% 80%;
    .menuOptions{
        width: 40%;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        margin: auto;
        .text{
            font-family: Nano Sans;
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;
        }
    }
    .Hamburger{
        text-align: end;
        margin-right: 15%;
        display: none;
        .image{
            width: 20px;
            height: 16px;
            margin-top: 16px;
        }
    }
    @media screen and (max-width: 768px){
        height: 48px;
        grid-template-columns: 80% 20%;
        .menuOptions{
            display: none;
        }
        .Hamburger{
            display: block;
        }
    }
`