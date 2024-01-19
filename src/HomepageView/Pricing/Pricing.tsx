import React from 'react';
import * as S from "./Pricing.style"
// @ts-ignore
import background from '../../assets/background.jpg'
// @ts-ignore
import {ReactComponent as UKFlag } from '../../assets/UKFlag.svg'
// @ts-ignore
import {ReactComponent as SpainFlag} from '../../assets/SpainFlag.svg'
import PricingItemI, {PRICING_LIST_ITEMS_ENGLISH, PRICING_LIST_ITEMS_SPANISH} from "./const/PricingList";

const Pricing = () => {
    return (
        <S.Container id={"Cennik"}>
                <S.Image src={background}/>
            <S.ContainerBox>
                <S.StyledH1>Cennik</S.StyledH1>

                <S.ContainerContent>
                <S.PricingElement>
                    <S.PricingHeader>
                        <UKFlag width={"60px"} height={"60px"}/>
                        <S.styledH3>Zajęcia Angielskiego</S.styledH3>
                    </S.PricingHeader>
                    <S.PricingContent>
                        <S.Line/>
                        <S.PricingList>
                                {
                                    PRICING_LIST_ITEMS_ENGLISH.map((item: PricingItemI) => {
                                        return <S.PricingItem>
                                        <S.PricingItemRow>
                                            <S.Text>{item.age}</S.Text>
                                            <S.Text>{item.lessonDuration}</S.Text>
                                            <S.Text>{item.price}</S.Text>
                                        </S.PricingItemRow>
                                        </S.PricingItem>
                                    })
                                }
                            <S.Text>Zajęcia próbne są dostępne dla dzieci z klas od 1-3 do 6-7</S.Text>
                        </S.PricingList>
                    </S.PricingContent>

                </S.PricingElement>
                    <S.PricingElement>
                    <S.PricingHeader>
                        <SpainFlag width={"60px"} height={"60px"}/>
                        <S.styledH3>Zajęcia Hiszpańskiego</S.styledH3>
                    </S.PricingHeader>
                    <S.PricingContent>
                        <S.Line/>
                        <S.PricingList>
                            {
                                PRICING_LIST_ITEMS_SPANISH.map((item: PricingItemI) => {
                                    return <S.PricingItem>
                                        <S.PricingItemRow>
                                            <S.Text>{item.age}</S.Text>
                                            <S.Text>{item.lessonDuration}</S.Text>
                                            <S.Text>{item.price}</S.Text>
                                        </S.PricingItemRow>
                                    </S.PricingItem>
                                })
                            }
                        <S.Text>Zajęcia próbne są dostępne dla dzieci z klas od 1-3 do 6-7</S.Text>
                        </S.PricingList>
                    </S.PricingContent>
                </S.PricingElement>
            </S.ContainerContent>
            </S.ContainerBox>

        </S.Container>
    );
};

export default Pricing;