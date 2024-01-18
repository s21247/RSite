import React from 'react';
// @ts-ignore
import * as S from "./SubPage.style"
import {PageI} from "../const/AboutItems";


const SubPage = ({image,title,text, isReversed}: PageI) => {
    return (
        <S.BottomSection isReversed={isReversed}>
            <S.ImageContainer>
                <S.Image src={image} alt={"image"}/>
            </S.ImageContainer>
            <S.BottomSectionText>
                <h2>{title}</h2>
                <p>{text}</p>
            </S.BottomSectionText>
        </S.BottomSection>
    );
};

export default SubPage;