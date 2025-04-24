import type {LayoutProps} from 'sanity'
import React from 'react'
import styles from '../../../styles/styles.module.scss'

const Layout = (props: LayoutProps) => (
  <div className={styles.layout}>{props.renderDefault(props)}</div>
)

export default Layout
