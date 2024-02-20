import styled from "styled-components";
import logo from "../Images/logo.png";

const NavLogo =()=>{
    return(
        <NavLogoStyled>
            <img className="logo" src={logo} alt="logo"/>
            <div className="name">LOGO</div>
        </NavLogoStyled>
    )
}

export default NavLogo;

const NavLogoStyled = styled.div`
    display: flex;
    .logo{
        width: 44px;
        height: 44px;
        margin-top: 10px;
        margin-left: 10%;
    }
    .name{
        font-family: Revalia;
        font-size: 32px;
        font-weight: 400;
        line-height: 64px;
        letter-spacing: 8px;
        color: #000000;
        margin-left: 5px;
    }
    @media screen and (max-width: 768px){
        .logo{
            width: 30px;
            height: 30px;
            margin-left: 2%;
        }
        .name{
            font-size: 20px;
            line-height: 48px;
            letter-spacing: 8px;
            margin-left: 5px;
        }
    }
`