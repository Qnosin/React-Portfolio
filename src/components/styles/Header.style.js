import styled from "styled-components";
import Header from "../Header";

export const HeaderStyled = styled(Header)`
    width: 100%;
    min-height: 10vh;
    @media screen and (min-width:800px) {
            width: 20%;
            display: inline-block;
            min-height: 100vh;
    }
    & nav{
        display: flex;
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: inherit;
        font-size: .7rem;
        @media screen and (min-width:800px) {
            font-size: 1rem;
            min-height: 100vh;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
             flex-direction: column;
            font-size: .7rem;
            border-right: 1px solid beige;
            padding: 1rem;
        }
        h2{
            position: relative;
            cursor: pointer;
            padding: .5rem;
            @media screen  and (min-width:600px){
                padding: 2rem;
            }
        }
        h2::after{
            content: '';
            position: absolute;
            height: 3px;
            background-color: #fffefe;
            left: 0px;
            bottom: 0px;
            width: 0;
        }
        h2:hover::after{
            width: 100%;
        }
        a{
            text-decoration: none;
        }
    }
`