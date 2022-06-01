import styled from "styled-components";
import ProjectSection from "../ProjectSection";
export const ProjectSectionStyled = styled(ProjectSection)`
    font-family: 'Courier New', Courier, monospace;
    min-height: calc(100vh - 52.09px);
    @media screen and (min-width:800px) {
        width:calc(100% - 20%);
        min-height: 95vh;
        display: inline-block;
        vertical-align: bottom;
    }

    & .project__title__description{
        font-size: .8rem;
        margin-top: 1rem;
    }
    & .Project__desc{
        @media screen and (min-width:800px){
           margin-left: 1rem;
        }
    }
    & div img{
        max-width: 80%;
        @media screen and (min-width:800px) {
        max-width: 280px;
    }
    }
    & div p img{
        width: 20px;
        text-align: center;

    }
    & .created__with__desc p {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    & .project__title{
        margin-top: 1rem;
    }
    & .first__Project{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        text-align: center;
        @media screen and (min-width:800px) {
        flex-direction: row;
        justify-content: space-evenly;
        font-size: 1.2rem;
        }
        @media screen and (max-height:693px) {
            display: none;
            
        }
    
    & .finder__project{
        @media screen and (min-width:800px) {
            max-width: 210px;
        }
    }
    }
    & .Second__Project{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;

        @media screen and (min-width:800px) {
        flex-direction: row;
        justify-content: space-evenly;
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
    }
    & .third__Project{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        & .buttons{
            width: 100%;
        }
        @media screen and (min-width:800px) {
        flex-direction: row;
        justify-content: space-evenly;
        font-size: 1.2rem;
        width: 100%;
    }

    }
    & .buttons{
        display: flex;
        justify-content: space-evenly;
        align-items:center;
    }
    & .btn{
        margin-top:5px;
    }
    & .wrapper{
        display: flex;
        flex-direction: column;
        @media screen and (min-width:800px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
    }
    & .shoes__store__picture{
        @media screen and (min-width:800px) {
            max-width: 250px;

        }
    }
    & h1{
        text-align: center;
        margin-top: 4rem;
    }
    & button{
        padding:.2rem;
        cursor: pointer;
        border:none;
        margin-bottom: .5rem;
    }

`