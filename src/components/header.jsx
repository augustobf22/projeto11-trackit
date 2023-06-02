import styled from "styled-components"
import logoMini from "../assets/img/logo-mini.svg"
import userImg from "../assets/img/vangogh.jpg"

export default function Header() {
    return(
        <ContainerHeader>
            <Logo src={logoMini} alt="logo-mini" />
            <UserImg src={userImg} alt="user-img" />
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