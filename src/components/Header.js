
import React from 'react';

const Header = (props) => {
  return(
    <div className='header'>
      <div className='container'>
        <h1 className="header__title">{props.title}</h1> {/* here, we access to the props defined in the header tag above in the form a js object called props */}
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>
  );
};

// you can provide a default prop, so if one is not defined above in the parent componenent, it ill use wtvr ins in the function
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
