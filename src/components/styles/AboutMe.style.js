import styled from "styled-components";
import AboutMeSection from "../AboutMeSection";
export const AboutMeStyled = styled(AboutMeSection)`
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    padding: 2rem;
    text-align: center;
    font-weight: bold;
    min-height: calc(100vh - 52.09px);
    @media screen and (min-width:800px) {
        width: calc(100% - 20%);
        display: inline-block;
        font-size: 1rem;
        
    }
    & div p{
        font-size: 1rem;
    }
    .Picture{
        display: none;
        @media screen and (min-width:800px) {
            display: inline-block;
            max-width: 400px;
            margin-right: 5rem;
        }
    }
    & .wrapper{
        min-height: inherit;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        @media screen and (min-width:800px) {
            min-height: 80vh;
            width: 100%;
            flex-direction:column;
        }
    }
    & .images{
        @media screen and (min-width:800px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    & .github{
        margin-bottom: 2rem;
        cursor: pointer;
    }
    & img[alt='Linkedin']{
        cursor: pointer;
    }
`