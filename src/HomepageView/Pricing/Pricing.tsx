import React from 'react';
import * as S from "./Pricing.style"
// @ts-ignore
import background from '../../assets/background.jpg'
// @ts-ignore
import {ReactComponent as UKFlag } from '../../assets/UKFlag.svg'
// @ts-ignore
import {ReactComponent as SpainFlag} from '../../assets/SpainFlag.svg'

const Pricing = () => {
    return (
        <S.Container>
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
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>5 latki</S.Text>
                                    <S.Text>2 x 30 lub 1x 60min</S.Text>
                                    <S.Text>190.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>6 latki</S.Text>
                                    <S.Text>2x 60min</S.Text>
                                    <S.Text>300.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>klasa 1-3</S.Text>
                                    <S.Text>2x 60min</S.Text>
                                    <S.Text>300.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>klasa 4-5</S.Text>
                                    <S.Text>2x 60min</S.Text>
                                    <S.Text>300.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>klasa 6-8</S.Text>
                                    <S.Text>2x 90min</S.Text>
                                    <S.Text>390.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.Text>Zajęcia próbne są dostępne dla dzieci w klasie od 1-3 do 6-7</S.Text>
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
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>5 latki</S.Text>
                                    <S.Text>1x 50min</S.Text>
                                    <S.Text>185.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>6 latki</S.Text>
                                    <S.Text>1x 60min</S.Text>
                                    <S.Text>200.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>klasa 1-3</S.Text>
                                    <S.Text>1x 60min</S.Text>
                                    <S.Text>200.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>klasa 4-5</S.Text>
                                    <S.Text>1x 90min</S.Text>
                                    <S.Text>290.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                            <S.PricingItem>
                                <S.PricingItemRow>
                                    <S.Text>klasa 6-8</S.Text>
                                    <S.Text>1x 90min</S.Text>
                                    <S.Text>290.00zł</S.Text>
                                </S.PricingItemRow>
                            </S.PricingItem>
                        <S.Text>Zajęcia próbne są dostępne dla dzieci od lat 5 do klasy 6-7</S.Text>
                        </S.PricingList>
                    </S.PricingContent>

                </S.PricingElement>
            </S.ContainerContent>
            </S.ContainerBox>

        </S.Container>
    );
};

export default Pricing;