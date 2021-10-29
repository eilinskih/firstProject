import React from 'react';
import p from './Post.module.css';

type PostPropsType = {
    message: string
    ava: string
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={p.post}>
            <img src={props.ava} alt="ava" />
            <p>{props.message}</p>
        </div>
    );
};

export default Post;