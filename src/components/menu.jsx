import styled from "styled-components"
import { Link } from "react-router-dom"
import {useContext} from "react"
import { AppContext } from "../appContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
    const appObj = useContext(AppContext);
    const progObj = appObj.progObj;

    return(
        <ContainerMenu data-test="menu">
            <Link to="/habitos" data-test="habit-link">
                Hábitos
            </Link>
            <Link to="/hoje" data-test="today-link">
                <ContainerProgress>
                    <CircularProgressbar 
                        value={progObj.progress} 
                        text={"Hoje"} 
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />                    
                </ContainerProgress>
            </Link>
            <Link to="/historico" data-test="history-link">
                Histórico
            </Link>
        </ContainerMenu>
    );
};

const ContainerMenu = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;

    position:fixed;
    bottom: 0px;
    left: 0px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px;

    z-index: 2;

    a{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;

        color: #52B6FF;

        &:hover{
            cursor: pointer;
        }
    }
`;

const ContainerProgress = styled.div`
    width: 90px;
    position: fixed;
    bottom: 10px;
    right: 50%;
    transform: translate(50%, 0);
`;