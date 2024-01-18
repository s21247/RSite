import React from 'react';
import LessonForm from "./LessonForm/LessonForm";
import * as S from "./Homepage.style"
import Pricing from "./Pricing/Pricing";
import About from "./About/About";
import Navbar from "../components/Navbar/Navbar";

const Homepage = () => {
    return (
        <S.Container>
            <Navbar/>
            <About/>
            <Pricing/>
            <LessonForm/>
        </S.Container>
    );
};

export default Homepage;