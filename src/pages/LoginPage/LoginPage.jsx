import styled from "styled-components"
import logo from "../../assets/img/logo.svg"
import {Link, useNavigate} from "react-router-dom"
import {useContext,useState} from "react"
import { AppContext } from "../../appContext";
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
    const appObj = useContext(AppContext);
    const userObj = appObj.userObj;
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);

    function submitForm(event){
        event.preventDefault();
        const promise = axios.post(url, login);
    
        promise.then(r => {
            userObj.setUser(r.data);
            navigate("/hoje")});
        promise.catch(r => {
            alert(r.message);
            setLogin({
                email: "",
                password: ""
            });
            setLoading(false);
        });
        
        if(!loading) {
            setLoading(true);
        }
    };

    return (
        <Container>
            <img src={logo} alt="logo" />
            <FormContainer onSubmit={submitForm} loading={loading}>
                <input 
                    required 
                    placeholder="email"   
                    id="email" 
                    type="email"
                    value={login.email} 
                    onChange={e => setLogin({
                        email: e.target.value,
                        password: login.password
                    })} 
                    disabled={loading}
                    /*data-test="client-name"*/
                />

                <input 
                    required 
                    placeholder="senha" 
                    id="senha" 
                    type="password"
                    value={login.password} 
                    onChange={e => setLogin({
                        email: login.email,
                        password: e.target.value
                    })} 
                    disabled={loading}
                    /*data-test="client-cpf"*/
                />

                <button 
                    type="submit"
                    disabled={loading}
                    //data-test="book-seat-btn"
                >
                    <ThreeDots color='#ffffff' visible={loading}/>
                    {loading ? "": "Entrar"}
                </button>              
            </FormContainer>
            <Link to="/cadastro">
                Não tem uma conta? Cadastre-se!
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