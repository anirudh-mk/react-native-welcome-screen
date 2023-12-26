import React from 'react'
import { Text } from 'react-native'

import styles from './style'

function WelcomText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}
export default WelcomText