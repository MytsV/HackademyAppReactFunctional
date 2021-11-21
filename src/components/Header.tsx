import { useState } from 'react';
import { HeaderProps } from '../objects/HeaderProps';
import MenuItem from './MenuItem';

export default function Header(props: HeaderProps) {

    const [menuExpanded, setMenuExpanded] = useState(false);

    let getMenuItems = (): JSX.Element[] => {
      return props.menuItems
      .map((item, index) => 
        <MenuItem info={item} active={isActive(index)}/>
      );
    };
  
    let isActive = (index: number): boolean => {
        return props.activeIndex === index;
    };

    let onClickBurger = (): void => {
      setMenuExpanded(!menuExpanded)
    }

    let getBurgerClass = () => {
      var className: string = menuExpanded ? 'fas fa-times ' : 'fas fa-bars ';
      className += 'text-indigo-900 text-2xl';
      return className;
    }
  
    return <div id="header" className="bg-white py-6 px-5 flex justify-between align-center items-center">
      <a href="."><span id="logo">CryptoTrade</span></a>
      <div id="nav-bar">
        {getMenuItems()}
      </div>
      <i className={getBurgerClass()} id="burger-menu" onClick={onClickBurger}></i>
      { menuExpanded ? <div id="menu-expanded">
        {getMenuItems()}
      </div> : null}
    </div>
  }