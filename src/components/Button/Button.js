import React from 'react';
import Link from 'next/link';

import classes from './button.module.css';

const { btn } = classes;

const Button = (props) => {
    return (
        <Link href={props.link}>
            <a className={btn}>{props.children}</a>
        </Link>
    );
};


export default Button;