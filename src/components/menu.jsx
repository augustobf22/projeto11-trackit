import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Menu() {
    return(
        <ContainerMenu>
            <Link to="/habitos">
                Hábitos
            </Link>
            <Link to="/hoje">
                Hoje
            </Link>
            <Link to="/historico">
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