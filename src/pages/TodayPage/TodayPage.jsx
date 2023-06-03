import styled from "styled-components"
import Header from "../../components/header"
import Menu from "../../components/menu"
import mockToday from "./mockToday"

const habitsColors = {complete: "#8FC549", incomplete: "#BABABA"};

export default function TodayPage() {
    return (
        <Container>
            <Header />
            <TodayContent>
                <TodayInfo>
                    <p>Segunda-feira, 17/05</p>
                    <h1>Nenhum hábito concluído ainda</h1>
                </TodayInfo>
                {mockToday.map(h => (
                    <DisplayToday key={h.id}>
                        <ion-icon name="checkbox"></ion-icon>
                        <p>{h.name}</p>
                        <h1>Sequência atual: {h.currentSequence} dias</h1>
                        <h1>Seu recorde: {h.highestSequence} dias</h1>
                    </DisplayToday>
                    )    
                )}
            </TodayContent>
            <Menu />
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
`;

const TodayContent = styled.div`
    margin: 70px 20px;
`;

const TodayInfo = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

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

        color: ${habitsColors.incomplete};
    }
`;

const DisplayToday = styled.div`
    height: 90px;
    margin-bottom: 10px;

    background: #FFFFFF;
    border-radius: 5px;  

    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    position: relative;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }

    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }

    ion-icon{
        position: absolute;
        top: 5px;
        right: 5px;

        font-size: 80px;

        color: ${habitsColors.complete};

        &:hover{
            cursor: pointer;
        }
    }
`;