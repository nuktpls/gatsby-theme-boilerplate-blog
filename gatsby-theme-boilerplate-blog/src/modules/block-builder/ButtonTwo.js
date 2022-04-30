import React from 'react'
import './button.css'

import { Row } from '../../components/InsertRow'
export const ButtonTwo = ({ label }) => {
  return (
    <>
      <Row
        opt={{ classes: 'button-container', bgColor: '#d333', isBoxed: true }}
      >
        <Row
          opt={{ classes: 'button-container', bgColor: '#d333', isBoxed: true }}
        >
          <h1>btn</h1>
        </Row>
        <button type="button">{label}</button>
      </Row>
    </>
  )
}
