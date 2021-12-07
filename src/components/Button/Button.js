import React from 'react';
import Link from 'next/link';

import classes from './button.module.css';

const { btn } = classes;

const Button = (props) => {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={btn}>{props.children}</a>
            </Link>
        );
    }

    return (
        <button
            className={btn}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};


export default Button;