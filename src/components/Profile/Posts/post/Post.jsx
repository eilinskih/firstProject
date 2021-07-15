import React from 'react';
import p from './Post.module.css';

function Post(props) {
    return (
        <div className={p.post}>
            <img src="https://memepedia.ru/wp-content/uploads/2017/04/%D0%BA%D0%B0%D0%BC%D0%B0-%D0%BF%D1%83%D0%BB%D1%8F2.jpg" alt="ava" />
            <p>{props.message}</p>
        </div>
    );
}

export default Post;