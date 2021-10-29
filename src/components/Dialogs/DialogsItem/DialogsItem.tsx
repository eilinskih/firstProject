import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './DialogsItem.module.css';

type DialogsPropsType = {
    id: number
    name: string
}

const DialogsItem: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={d.dialoger_name}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    );
}

export default DialogsItem;