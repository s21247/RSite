import React, {useState} from 'react';
import * as S from './About.style'
import {NAV_ITEMSI, NAV_ITEMS, IntroductionPage, ProfilePage, FAQPage} from "./const/AboutItems";
import SubPage from "./SubPage/SubPage";


const About = () => {
    const [navItems, setNavItems] = useState(NAV_ITEMS);


    const handleItemClick = (clickedIndex: number) => {
        setNavItems((prevNavItems) =>
            prevNavItems.map((item, index) => ({
                ...item,
                isClicked: index === clickedIndex,
            }))
        );
    };
    const renderSubPage = () => {
        const clickedItem = navItems.find((item) => item.isClicked);

        if (!clickedItem) {
            return <SubPage title={IntroductionPage.title} image={IntroductionPage.image} text={IntroductionPage.text} isReversed={IntroductionPage.isReversed}/>;
        }

        switch (clickedItem.name) {
            case "introduction":
                return <SubPage title={IntroductionPage.title} image={IntroductionPage.image} text={IntroductionPage.text} isReversed={IntroductionPage.isReversed}/>;
            case "profile":
                return <SubPage image={ProfilePage.image} title={ProfilePage.title} text={ProfilePage.text} isReversed={ProfilePage.isReversed}/>;
            case "faqs" :
                return <SubPage image={FAQPage.image} title={FAQPage.title} text={FAQPage.text} isReversed={FAQPage.isReversed}/>;
        }
    };
    return (
        <S.Container id={"O nas"}>
            <S.Section>
                <S.TopSection>
                <S.Title>O nas</S.Title>
                    <S.WrapTopSection>
                        {
                            navItems.map((item: NAV_ITEMSI,index) => {
                                return <S.StyledNavItem
                                    isClicked={item.isClicked}
                                    key={index}
                                    onClick={() => handleItemClick(index)}
                                >{item.name}</S.StyledNavItem>
                            })
                        }
                        <S.DividerLine/>
                    </S.WrapTopSection>
                </S.TopSection>
                {renderSubPage()}

            </S.Section>

        </S.Container>
    );
};

export default About;