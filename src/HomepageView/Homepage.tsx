import React from 'react';
import LessonForm from "./LessonForm/LessonForm";
import * as S from "./Homepage.style"
import Pricing from "./Pricing/Pricing";

const Homepage = () => {
    return (
        <S.Container>
            <Pricing/>
            <LessonForm/>
        </S.Container>
    );
};

export default Homepage;