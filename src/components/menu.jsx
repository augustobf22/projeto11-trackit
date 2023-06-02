import styled from "styled-components"

export default function Menu() {
    return(
        <ContainerMenu>
            <p>Hábitos</p>
            <p>Histórico</p>
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

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;

        &:hover{
            cursor: pointer;
        }
    }
`;