import styled from "styled-components"
import Header from "../../components/header"
import Menu from "../../components/menu"
import mockHabits from "./mockHabits";

const buttonColors = {available: {bg: "#FFFFFF", border: "#D5D5D5", fontColor: "#DBDBDB"}, selected: {bg: "#CFCFCF", border: "#CFCFCF", fontColor: "#ffffff"}};

export default function HabitsPage() {
    return (
        <Container>
            <Header />
            <HabitsContent>
                <AddHabit>
                    <MyHabits>
                        <p>Meus hábitos</p>
                        <button>+</button>
                    </MyHabits>
                    <ContainerAdd>
                        <ContainerInput>
                            <input
                                required
                                placeholder="nome do hábito"
                                id="habitName"
                                type="text"
                            /*value={props.buyer} 
                            onChange={e => updateBuyer(e.target.value)} 
                            data-test="client-name"*/
                            />
                            <DaysButtons>
                                <button>D</button>
                                <button>S</button>
                                <button>T</button>
                                <button>Q</button>
                                <button>Q</button>
                                <button>S</button>
                                <button>S</button>
                            </DaysButtons>
                        </ContainerInput>
                        <SaveButtons>
                            <CancelButton>Cancelar</CancelButton>
                            <SaveButton>Salvar</SaveButton>
                        </SaveButtons>
                    </ContainerAdd>
                </AddHabit>
                <NoHabits>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NoHabits>
                {mockHabits.map(h => (
                    <DisplayHabits key={h.id}>
                        <ion-icon name="trash-outline"></ion-icon>
                        <p>{h.name}</p>
                        <DaysButtons>
                            <button>D</button>
                            <button>S</button>
                            <button>T</button>
                            <button>Q</button>
                            <button>Q</button>
                            <button>S</button>
                            <button>S</button>
                        </DaysButtons>
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

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    display: none;

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

const DaysButtons = styled.div`
    button{
        width: 30px;
        height: 30px;
        margin-right: 4px;

        background: ${buttonColors.selected.bg};
        border: 1px solid ${buttonColors.selected.border};

        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: ${buttonColors.selected.fontColor};

        &:hover{
            cursor: pointer;
        }
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
display: none;
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
`