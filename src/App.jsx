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

export default function App() {
  return (
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
  )
};

const ContainerApp= styled.div`
    height: 597px;
    width: 375px;
`;