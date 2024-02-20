import styled from "styled-components";
import logo from "../Images/logo.png";

const LogoComp =()=>{
    return(
        <LogoCompStyled>
            <img className="logo" src={logo} alt="logo"/>
            <div className="name">LOGO</div>
        </LogoCompStyled>
    )
}

export default LogoComp;

const LogoCompStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 45vh;
    .logo{
        width: 145px;
        height: 145px;
    }
    .name{
        font-family: Revalia;
        font-size: 78px;
        font-weight: 400;
        line-height: 133px;
        letter-spacing: 10px;
        color: #FFFFFF;
        margin-left: 25px;
    }
    @media screen and (max-width: 768px){
        margin-top: 38vh;
        .logo{
            width: 70px;
            height: 70px;
        }
        .name{
            font-size: 36px;
            font-weight: 400;
            line-height: 61.5px;
            letter-spacing: 10px;
            margin-left: 20px;
        }
    }
`