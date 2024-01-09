import React from 'react';
import * as S from './Navbar.style'
import {NAV_ITEMS, NavItem} from "./const/NavItems";
// @ts-ignore
import { ReactComponent as Logo } from "../../assets/schoolLogo.svg"


const Navbar = () => {
    const navbarClickHandler = (item:NavItem) => {

    }
    return (
        <S.Container>
            <S.Logo>
                <Logo width={"50px"} height={"50px"} />
                <p>School name</p>

            </S.Logo>
            {NAV_ITEMS.map((item: NavItem) => {
                return <S.NavItem onClick={() => navbarClickHandler(item)}>{item.label}</S.NavItem>
            })}
        </S.Container>
    );
};

export default Navbar;