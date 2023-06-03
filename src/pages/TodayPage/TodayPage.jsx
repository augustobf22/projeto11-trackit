import styled from "styled-components"
import Header from "../../components/header"
import Menu from "../../components/menu"
import mockToday from "./mockToday"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import {useContext, useState} from "react"
import { AppContext } from "../../appContext";

const now = dayjs().locale("pt-br").format("dddd, DD/MM");

const habitsColors = {complete: "#8FC549", incomplete: "#BABABA"};

export default function TodayPage() {
    const appObj = useContext(AppContext);
    const progObj = appObj.progObj;

    function markHabit(h){
        //change status
        h.done=(!h.done);

        //if status is now true, increase currentsequence
        h.done ? h.currentSequence++ : h.currentSequence--;
        (h.currentSequence>h.highestSequence) ? h.highestSequence=h.currentSequence : "";

        let count = 0;
        mockToday.forEach(hab=>hab.done?count++:"");

        let den = mockToday.length;
        let num = count;

        let n = Math.floor(100 * num / den);
        progObj.setProgress(n);
    }

    return (
        <Container>
            <Header />
            <TodayContent>
                <TodayInfo prog={progObj.progress}>
                    <p>{now}</p>
                    <h1>{progObj.progress !== 0 ? `${progObj.progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h1>
                </TodayInfo>
                {mockToday.map(h => (
                    <DisplayToday key={h.id} h={h}>
                        <ion-icon name="checkbox" onClick={() => markHabit(h)}></ion-icon>
                        <p>{h.name}</p>
                        <h1>Sequência atual: {h.currentSequence} dias</h1>
                        <Record h={h}>Seu recorde: {h.highestSequence} dias</Record>
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
            cursor: pointer;
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
