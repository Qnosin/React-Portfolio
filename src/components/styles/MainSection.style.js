import styled from "styled-components";
import MainSection from "../MainSection";

export const MainSectionStyled = styled(MainSection)`
    width: 100%;
    min-height: 80vh;
    display: inline-block;
    padding: 1rem;
    font-size: .7rem;
    font-family: 'Josefin Sans', sans-serif;
    @media screen and (min-width: 800px) {
        width: calc(100% - 20%);
    }
    & section img{
        max-width: 80%;
        margin-left: 2rem;
        @media screen and (min-width: 800px) {
            max-width: 400px;
        }
    }
    & section{
        min-height: 80vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction:column;
        width: 100%;
        span{
            background: rgb(68,37,52);
            background: linear-gradient(90deg, rgba(68,37,52,1) 0%, rgba(116,11,133,1) 44%, rgba(52,54,148,1) 100%);
        }
        span:last-child{
            background: rgb(185,91,29);
            background: linear-gradient(90deg, rgba(185,91,29,1) 0%, rgba(7,33,128,1) 47%, rgba(194,136,18,1) 100%);
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .otherPic{
            position: absolute;
            margin: 0;
            top: 100%;
            left: -10%;
            display: none;
            cursor: pointer;
            @media screen and (min-width:800px) {
                display: block;
            }
        }
        .Sass{
            left: -20%;
            top: 70%;
        }
        .Html{
            left: -15%;
            top: 40%;
        }
        .Git{
            top: 100%;
            left: 100%;
        }
        .webpack{
            top: 65%;
            left: 110%;
        }
        .Npm{
            top: 35%;
            left: 90%;
        }

    }
    & section h1{
        text-align: center;
        border-bottom: 2px solid  #fffefe;
        @media screen and (min-width:800px){
            font-size: 2rem;
            border-bottom: 5px solid  #fffefe;
        }
    }
`