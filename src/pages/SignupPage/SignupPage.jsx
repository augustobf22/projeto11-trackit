import styled from "styled-components"
import logo from "../../assets/img/logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";

export default function SignupPage() {
    const [signUp, setSignUp] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);

    function submitForm(event){
        event.preventDefault();
        const promise = axios.post(url, signUp);
    
        promise.then(r => {
            navigate("/")});
        promise.catch(r => {
            setLoading(false);
            alert(r.data.message);
        });
        
        if(!loading) {
            setLoading(true);
        }
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <FormContainer onSubmit={submitForm} loading={loading}>
                <input 
                    required 
                    placeholder="email"   
                    id="email" 
                    type="email"
                    value={signUp.email} 
                    onChange={e => setSignUp({
                        email: e.target.value,
                        name: signUp.name,
                        image: signUp.image,
                        password: signUp.password
                    })} 
                    disabled={loading}
                    data-test="email-input"
                />

                <input 
                    required 
                    placeholder="senha" 
                    id="password" 
                    type="password"
                    value={signUp.password} 
                    onChange={e => setSignUp({
                        email: signUp.email,
                        name: signUp.name,
                        image: signUp.image,
                        password: e.target.value
                    })} 
                    disabled={loading}
                    data-test="password-input"
                />

                <input 
                    required 
                    placeholder="nome"   
                    id="username" 
                    type="text"
                    value={signUp.name} 
                    onChange={e => setSignUp({
                        email: signUp.email,
                        name: e.target.value,
                        image: signUp.image,
                        password: signUp.password
                    })} 
                    disabled={loading}
                    data-test="user-name-input"
                />

                <input 
                    required 
                    placeholder="imagem"   
                    id="userpicture" 
                    type="url"
                    value={signUp.image} 
                    onChange={e => setSignUp({
                        email: signUp.email,
                        name: signUp.name,
                        image: e.target.value,
                        password: signUp.password
                    })} 
                    disabled={loading}
                    data-test="user-image-input"
                />

                <button 
                    disabled={loading}
                    type="submit"
                    data-test="signup-btn"
                >
                    <ThreeDots color='#ffffff' visible={loading}/>
                    {loading ? "": "Cadastrar"}
                </button>              
            </FormContainer>
            <Link to="/" data-test="login-link">
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

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            ${props => props.loading ? "" : "cursor: pointer"};
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