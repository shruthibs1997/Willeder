import styled from "styled-components";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import tiktok from "../Images/tiktok.png";
import twitter from "../Images/twitter.png";

const SocialMediaIcon =()=>{
    return(
        <SocialMediaIconStyle>
            <img src={facebook} className="icons"/>
            <img src={instagram} className="icons"/>
            <img src={tiktok} className="icons"/>
            <img src={twitter} className="icons"/>
        </SocialMediaIconStyle>
    )
}

export default SocialMediaIcon;


const SocialMediaIconStyle = styled.div`
    width: 30%;
    height: 48px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 26%);
    grid-columnGap: 2%;
    margin-top: 28px;
    .icons{
        width: 48px;
        height: 48px;
    }
    @media screen and (max-width: 1120px){
        width: 35%;
    }
    @media screen and (max-width: 768px){
        width: 45%;
    }
    @media screen and (max-width: 568px){
        width: 65%;
        .icons{
            width: 40px;
            height: 40px;
        }
    }
    @media screen and (max-width: 320px){
        width: 77%;
    }
`