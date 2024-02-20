import ImageComp from "./ImageComp";
import Laptop1 from "../Images/Laptop1.png";
import Laptop2 from "../Images/Laptop2.png";
import Laptop3 from "../Images/Laptop3.png";
import styled from "styled-components";

const BodyOne =()=>{
    return(
        <BodyOneStyle>
            <div className ="blueBox"></div>
            <div className="outerComp">
                <div className="titleComp">
                    <div className="title" >Lorem</div>
                    <div className="subTitle" >Subtitel</div>
                </div>
                <div className="imageBox" >
                    <ImageComp img={Laptop1} text1={"01"} text2={"Lorem ipsum dolor sit"} text3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                    <ImageComp img={Laptop3} text1={"02"} text2={"Lorem ipsum dolor sit"} text3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                    <ImageComp img={Laptop2} text1={"03"} text2={"Lorem ipsum dolor sit"} text3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                </div>
            </div>
            
        </BodyOneStyle>
    )
}

export default BodyOne;


const BodyOneStyle = styled.div`
    position: relative;
    .blueBox{
        width: 15%;
        height: 1174px;
        background-color: #6A45FF;
        margin: auto;
    }
    .outerComp{
        position: absolute;
        top: 0px;
        width: 100%;
        margin-top: 200px;
        .titleComp{
            .title{
                color: #FFFFFF;
                font-family: Noto Sans;
                font-size: 40px;
                font-weight: 600;
                line-height: 64px;
                letter-spacing: 5px;
            }
            .subTitle{
                color: #FFFFFF;
                font-family: Noto Sans;
                font-size: 24px;
                font-weight: 600;
                line-height: 38.4px;
                letter-spacing: 5px;
            }
        }
        .imageBox{
            position: absolute;
            width: 100%;
            height: 600px;
            display: grid;
            grid-template-columns: repeat(3, calc(100%/3));
            margin-top:35px;
        }
    }
    @media screen and (max-width: 1120px){
        .blueBox{
            width: 20%;
        }
    }

    @media screen and (max-width: 768px){
        .blueBox{
            width: 10%;
            background-color: #6A45FF3D;
            height: 1118px;
        }
        .outerComp{
            margin-top: 80px;
            .titleComp{
                .title{
                    color: #6A45FF;
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 38.4px;
                    letter-spacing: 10px;
                }
                .subTitle{
                    color: #000000;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 32px;
                    letter-spacing: 10px;
                }
            }
            .imageBox{
                height: 816px;
                justify-content: center;
                grid-template-columns: 90%;
                margin-top: 65px;
            }
        }
    }
    
    
`