import React from 'react'

import './formInput.scss'

const FormInput = ({handleChange, ...otherProps}) => (
            <div>
              <input
                  className="form__input"
                  onChange={handleChange}
                  {...otherProps}
              />
            </div>
)

export default FormInput;