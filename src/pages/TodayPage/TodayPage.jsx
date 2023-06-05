import styled from "styled-components"
import Header from "../../components/header"
import Menu from "../../components/menu"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import {useContext, useState, useEffect} from "react"
import { AppContext } from "../../appContext"
import axios from "axios"
import { RotatingLines } from "react-loader-spinner";

const now = dayjs().locale("pt-br").format("dddd, DD/MM");

const habitsColors = {complete: "#8FC549", incomplete: "#BABABA"};

export default function TodayPage() {
    const appObj = useContext(AppContext);
    const progObj = appObj.progObj;
    const userObj = appObj.userObj;
    const [habitsDay, setHabitsDay] = useState([]);
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const [loading, setLoading] = useState(false);

    function markHabit(h){
        const urlCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`;
        const urlUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`;
        const config = {
            headers: {
                "Authorization": `Bearer ${userObj.user.token}`
            }
        }

        if (h.done){
            const request = axios.post(urlUncheck, [], config);

            request.then(r => {
                setLoading(false);
                updateHabits();
            });
            request.catch(r => {
                setLoading(false);
                alert(r.message);
            });

            if(!loading) {
                setLoading(true);
            }
        } else {
            const request = axios.post(urlCheck, [], config);

            request.then(r => {
                setLoading(false);
                updateHabits();
            });
            request.catch(r => {
                setLoading(false);
                alert(r.message);
            });

            if(!loading) {
                setLoading(true);
            }
        }
    }

    function updateProgress(){
        let count = 0;
        habitsDay.forEach(hab=>hab.done?count++:"");

        let den = habitsDay.length;
        let num = count;

        let n = Math.floor(100 * num / den);
        progObj.setProgress(n);
    }

    function updateHabits(){
            const config = {
                headers: {
                    "Authorization": `Bearer ${userObj.user.token}`
                }
            }
            const request = axios.get(url,config);

            request.then(r => {
                setHabitsDay(r.data);
            });
            request.catch(r => {
                alert(r.message);
            });

            updateProgress();
    }

    updateHabits();

    return (
        <Container>
            <Header />
            <TodayContent>
                <TodayInfo prog={progObj.progress}>
                    <p data-test="today">{now}</p>
                    <h1 data-test="today-counter">{progObj.progress !== 0 ? `${progObj.progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h1>
                </TodayInfo>
                {habitsDay.map(h => (
                    <DisplayToday key={h.id} h={h} loading={loading} data-test="today-habit-container">
                        <ion-icon name="checkbox" onClick={() => markHabit(h)} data-test="today-habit-check-btn"></ion-icon>
                        <p data-test="today-habit-name">{h.name}</p>
                        <h1 data-test="today-habit-sequence">Sequência atual: {h.currentSequence} dias</h1>
                        <Record h={h} data-test="today-habit-record">Seu recorde: {h.highestSequence} dias</Record>
                    </DisplayToday>
                    )    
                )}
                <Wrapper>
                    <RotatingLines
                        strokeColor="#52B6FF"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={loading}
                    />    
                </Wrapper>
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

        color: ${props => props.prog !== 0 ? habitsColors.complete : habitsColors.incomplete};
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

        color: ${props => props.h.done ? habitsColors.complete : "#666666"};
    }

    ion-icon{
        position: absolute;
        top: 5px;
        right: 5px;

        font-size: 80px;

        color: ${props => props.h.done ? habitsColors.complete : habitsColors.incomplete};

        &:hover{
            ${props => props.loading ? "" : "cursor: pointer"};
        }
    }
`;

const Record = styled.h2`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: ${props => (props.h.done && props.h.currentSequence===props.h.highestSequence && props.h.currentSequence!==0) ? habitsColors.complete : "#666666"};
`;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%,0);
`