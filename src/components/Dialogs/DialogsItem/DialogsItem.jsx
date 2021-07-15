import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './DialogsItem.module.css';

function DialogsItem(props) {
    return (
        <div className={d.dialoger_name}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    );
}

export default DialogsItem;