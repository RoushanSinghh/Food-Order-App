import React, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PetuMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src="https://source.unsplash.com/1600x900/?food,meals" alt="A table full of delicious food!"/>
      </div>
    </Fragment>
  );
};
export default Header;