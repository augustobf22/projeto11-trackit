import styled from "styled-components"
import logo from "../../assets/img/logo.svg"
import {Link} from "react-router-dom"

export default function SignupPage() {
    return (
        <Container>
            <img src={logo} alt="logo" />
            <FormContainer>
                <input 
                    required 
                    placeholder="email"   
                    id="email" 
                    type="email"
                    /*value={props.buyer} 
                    onChange={e => updateBuyer(e.target.value)} 
                    data-test="client-name"*/
                />

                <input 
                    required 
                    placeholder="senha" 
                    id="password" 
                    type="password"
                    /*value={props.cpf} 
                    onChange={e => updateCpf(e.target.value)} 
                    data-test="client-cpf"*/
                />

                <input 
                    required 
                    placeholder="nome"   
                    id="username" 
                    type="text"
                    /*value={props.buyer} 
                    onChange={e => updateBuyer(e.target.value)} 
                    data-test="client-name"*/
                />

                <input 
                    required 
                    placeholder="imagem"   
                    id="userpicture" 
                    type="url"
                    /*value={props.buyer} 
                    onChange={e => updateBuyer(e.target.value)} 
                    data-test="client-name"*/
                />

                <button 
                    type="submit"
                    //data-test="book-seat-btn"
                >
                    Cadastrar
                </button>              
            </FormContainer>
            <Link to="/">
                Já tem uma conta? Faça login!
            </Link>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        margin-top: 70px;
        margin-bottom: 30px;
    }

    a{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }

`
const FormContainer = styled.form`
    //width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 25px;

    button {
        //align-self: center;
        width: 303px;
        height: 45px;

        background-color: #52B6FF;
        border-radius: 5px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;

        &:hover{
            cursor: pointer;
        }
    }

    input {
        height: 45px;
        width: 303px;

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
`