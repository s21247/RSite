import React from 'react';
import LessonForm from "./LessonForm/LessonForm";
import Navbar from "../components/Navbar/Navbar";
import * as S from "./Homepage.style"
import Pricing from "./Pricing/Pricing";

const Homepage = () => {
    return (
        <S.Container>
            {/*<Navbar/>*/}
            <Pricing/>
            <LessonForm/>
        </S.Container>
    );
};

export default Homepage;