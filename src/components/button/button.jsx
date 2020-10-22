import React from "react";

import './button.scss'

const Button = ({name, ...otherProps}) => (
    <div>
        <a {...otherProps}>{ name }</a>
    </div>
)

export default Button;