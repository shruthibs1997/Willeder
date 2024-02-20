import styled from "styled-components";
import Laptop4 from "../Images/Laptop4.png";
import arrow from "../Images/arrow.png"

const BodyTwo =()=>{
    return(
        <BodyTwoStyle>
            <div className ="blueBox"></div>
            <img className="image" src={Laptop4} alt="laptop Image"/>
            <div className="heading">Lorem ipsum</div>
            <div className="line"></div>
            <div className="descriptionComp">
                <div className="description">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.`}
                </div>
                <div className="buttonComp">
                    <div className="name">Lorem ipsum</div>
                    <img className="arrow" src={arrow} alt="arrow"/>
                </div>
            </div>
        </BodyTwoStyle>
    )
}

export default BodyTwo;


const BodyTwoStyle = styled.div`
    position: relative;
    background-color: #DCE1E6;
    .blueBox{
        width: 15%;
        height: 840px;
        background-color: #6A45FF;
        margin: auto;
    }
    .image{
        position: absolute;
        top: 200px;
        left: 14%;
        width: 42%;
        height: 440px;
    }
    .heading{
        position: absolute;
        top: 260.5px;
        left: 62%;
        width: 23%;
        text-align: left;
        font-family: Noto Sans;
        font-size: 32px;
        font-weight: 600;
        line-height: 51.2px;
        letter-spacing: 4px;
    }
    .line{
        position: absolute;
        background-color: #6A45FF;
        left: 62%;
        top: 311px;
        height: 8px;
        width: 23%;
    }
    .descriptionComp{
        position: absolute;
        top: 311.5px;
        left: 62%;
        width: 23%;
        height: 268px;
        .description{
            font-family: Noto Sans;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            margin-top: 20px;
        }
        .buttonComp{
            width: 100%;
            display: flex;
            bottom: 0px;
            position: absolute;
            .name{
                font-family: Noto Sans;
                font-size: 16px;
                font-weight: 600;
                line-height: 26px;
                letter-spacing: 5px;
                margin-top: 13px;
            }
            .arrow{
                width: 52px;
                height: 52px;
                margin-left: 5%;
            }
        }
    }
    @media screen and (max-width: 1120px){
        .blueBox{
            width: 20%;
        }
        .heading{
            width: 35%;
        }
        .line{
            width: 35%;
        }
        .descriptionComp{
            width: 35%;
            height: 290px;
        }
    }

    @media screen and (max-width: 768px){
        .blueBox{
            width: 10%;
            background-color: #6A45FF3D;
            height: 654px;
        }
        .heading{
            top: 80px;
            left: 0%;
            padding-left: 3%;
            width: 81%;
            text-align: left;
            font-size: 20px;
            font-weight: 600;
            line-height: 32px;
        }
        .line{
            position: absolute;
            background-color: #6A45FF;
            left: 0%;
            top: 112px;
            height: 4px;
            width: 83%;
        }
        .image{
            position: absolute;
            top: 132px;
            left: 0%;
            width: 83%;
            height: 200px;
        }
        .descriptionComp{
            position: absolute;
            top: 350px;
            left: 0%;
            width: 83%;
            height: 200px;
            padding-left: 3%;
            .description{
                font-size: 14px;
                font-weight: 400;
                line-height: 21px;
            }
            .buttonComp{
                width: 100%;
                display: flex;
                bottom: 0px;
                position: absolute;
                .name{
                    margin-top: 6px;
                }
                .arrow{
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
`