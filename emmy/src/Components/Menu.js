
import React, { Fragment }  from 'react';
import {
    Link
  } from "react-router-dom";

function Menu(props) {
    return <Fragment>
        <Link to="/random">Random</Link>
    </Fragment>
  }

export default Menu;