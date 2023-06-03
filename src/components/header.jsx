import styled from "styled-components"
import logoMini from "../assets/img/logo-mini.svg"
import userImg from "../assets/img/vangogh.jpg"
import {useContext} from "react"
import { AppContext } from "../appContext";

function img(userObj){
    userObj.setUser({img: userImg});
}

export default function Header() {
    const appObj = useContext(AppContext);
    const userObj = appObj.userObj;

    return(
        <ContainerHeader onClick={() => img(userObj)}>
            <Logo src={logoMini} alt="logo-mini" />
            <UserImg src={userObj.user.img} alt="user-img" />
        </ContainerHeader>
    );
};

const ContainerHeader = styled.div`
    width: 100%;
    height: 70px;

    position: fixed;
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 18px;
`;

const Logo = styled.img`
    width: 97px;
    height: 49px;
`;

const UserImg = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`;