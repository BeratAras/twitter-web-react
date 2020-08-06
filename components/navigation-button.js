import React from 'react'
import ClassNames from 'classnames'

import Button from './button'
import styles from './navigation-button.module.css'

export default function NavButton({ selected, notify, children, ...props }) {
  return (
  <Button className={ClassNames(styles.navButton, selected && styles.navButtonSelected)} 
    {...props}>{children}
    {notify && <span className={styles.notify}>{notify}</span>}
  </Button>
  )
}
