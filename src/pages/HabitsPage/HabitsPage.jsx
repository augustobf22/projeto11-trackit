import styled from "styled-components"
import Header from "../../components/header"
import Menu from "../../components/menu"
import mockHabits from "./mockHabits";
import { useState } from "react";

const buttonColors = { available: { bg: "#FFFFFF", border: "#D5D5D5", fontColor: "#DBDBDB" }, selected: { bg: "#CFCFCF", border: "#CFCFCF", fontColor: "#ffffff" } };

export default function HabitsPage() {
    const daysObj =  {0: "D", 1: "S", 2: "T", 3: "Q", 4: "Q", 5: "S", 6: "S"};
    const [add, setAdd] = useState(false);
    const [selected, setSelected] = useState([]);
    const [habitName, setHabitName] = useState();

    function addDay(index) {
        if (selected.includes(index)) {
            let nSel = [...selected];
            nSel.splice(nSel.indexOf(index), 1);
            setSelected(nSel);
        } else {
            let nSel = [...selected, index];
            setSelected(nSel);
        }
    }

    function save(){
        let obj = {id: mockHabits.length+1, name: habitName, days: selected};
        mockHabits.push(obj);
        setAdd(false);
    }

    function deleteHabit(h) {
        alert(h.id);
    }

    return (
        <Container>
            <Header />
            <HabitsContent>
                <AddHabit>
                    <MyHabits>
                        <p>Meus hábitos</p>
                        <button onClick={() => setAdd(!add)}>+</button>
                    </MyHabits>
                    <ContainerAdd add={add}>
                        <ContainerInput>
                            <input
                                required
                                placeholder="nome do hábito"
                                id="habitName"
                                type="text"
                                value={habitName} 
                                onChange={e => setHabitName(e.target.value)} 
                                /*data-test="client-name"*/
                            />
                            <div>
                                {Object.values(daysObj).map((d, index) => (
                                    <SelButton index={index} selected={selected} key={index} onClick={() => addDay(index)}>{d}</SelButton>
                                )
                                )}
                            </div>
                        </ContainerInput>
                        <SaveButtons>
                            <CancelButton>Cancelar</CancelButton>
                            <SaveButton onClick={save}>Salvar</SaveButton>
                        </SaveButtons>
                    </ContainerAdd>
                </AddHabit>
                <NoHabits>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NoHabits>
                {mockHabits.map(h => (
                    <DisplayHabits key={h.id}>
                        <ion-icon name="trash-outline" onClick={()=>deleteHabit(h)}></ion-icon>
                        <p>{h.name}</p>
                        <ContainerButtons>
                            {Object.values(daysObj).map((d, index) => (
                                <DaysButton key={index} days={h.days} index={index}>{d}</DaysButton>
                            )
                            )}
                        </ContainerButtons>
                    </DisplayHabits>
                )
                )}

            </HabitsContent>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
`;

const HabitsContent = styled.div`
    margin: 70px 20px;
`;

const AddHabit = styled.div`
    width: 100%;  
`;

const MyHabits = styled.div`
    height: 85px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    button{
        width: 40px;
        height: 35px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #FFFFFF;

        &:hover{
            cursor: pointer;
        }
    }
`;

const ContainerAdd = styled.div`
    height: 180px;
    margin-bottom: 30px;

    background: #FFFFFF;
    border-radius: 5px;  

    padding: 15px;

    display: ${props => props.add ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    input {
        height: 45px;

        border-radius: 5px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;

        padding-left: 10px;
    }
`;

const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const SelButton = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;

    background: ${props => props.selected.includes(props.index) ? buttonColors.selected.bg : buttonColors.available.bg};
    border: 1px solid ${props => props.selected.includes(props.index) ? buttonColors.selected.border : buttonColors.available.border};

    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: ${props => props.selected.includes(props.index) ? buttonColors.selected.fontColor : buttonColors.available.fontColor};

    &:hover{
        cursor: pointer;
    }
`;

const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

const DaysButton = styled.div`
        width: 30px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background: ${props => props.days.includes(props.index) ? buttonColors.selected.bg : buttonColors.available.bg};
        border: 1px solid ${props => props.days.includes(props.index) ? buttonColors.selected.border : buttonColors.available.border};

        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: ${props => props.days.includes(props.index) ? buttonColors.selected.fontColor : buttonColors.available.fontColor};

        &:hover{
            cursor: pointer;
        }
`;

const SaveButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;

const CancelButton = styled.button`
    width: 80px;
    border: none;
    background-color: #ffffff;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    text-align: center;

    color: #52B6FF;    

    &:hover{
        cursor: pointer;
    }
`;


const SaveButton = styled.button`
    width: 84px;
    height: 35px;

    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    text-align: center;

    color: #FFFFFF;    

    &:hover{
        cursor: pointer;
    }
`;

const NoHabits = styled.div`
    display: ${mockHabits.length !== 0 ? "none" : "block"};

    p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
}
`;

const DisplayHabits = styled.div`
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

    ion-icon{
        position: absolute;
        top: 10px;
        right: 10px;

        font-size: 15px;

        &:hover{
            cursor: pointer;
        }
    }
`;

