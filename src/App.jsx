import styled from "styled-components"
import ResetStyle from "./style/ResetStyle"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoryPage from "./pages/HistoryPage/HistoryPage"
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { AppContext } from "./appContext";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(0);
  const progObj = {progress, setProgress};
  const userObj = {user, setUser};
  const appObj = {progObj, userObj};

  return (
    <AppContext.Provider value={appObj}>
      <ContainerApp>
        <ResetStyle />    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/cadastro" element={<SignupPage/>} />
            <Route path="/habitos" element={<HabitsPage/>} />
            <Route path="/hoje" element={<TodayPage/>} />
            <Route path="/historico" element={<HistoryPage/>} />
          </Routes>
        </BrowserRouter>
      </ContainerApp>
    </AppContext.Provider>
  )
};

const ContainerApp= styled.div`
    height: 100%;
    width: 100%;
`;