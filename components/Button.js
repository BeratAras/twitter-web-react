import React from 'react'

import ClassNames from 'classnames'

import styles from './button.module.css'

export default function Button({ children, className, ...props }) {
  return (
    <button type="button" className={ClassNames(styles.button, className)} {...props}>
      {children}
    </button>
  )
}
