import styled from "styled-components"
import Header from "../../components/header"
import Menu from "../../components/menu"

export default function HistoryPage() {
    return (
        <Container>
            <Header />
            <HistoryContent>
                <HistoryInfo>
                    <p>Histórico</p>
                    <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
                </HistoryInfo>
            </HistoryContent>
            <Menu />
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
`;



const HistoryContent = styled.div`
    margin: 70px 20px;
`;

const HistoryInfo = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`;