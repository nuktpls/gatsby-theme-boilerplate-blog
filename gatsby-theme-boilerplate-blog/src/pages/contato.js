import React from 'react'
import MainPageWrapper from '@BlockBuilder/MainPageWrapper'
import { defaultSchema } from '../configs/schemas'

const Contato = ({ location }) => {
  return (
    <MainPageWrapper seoSchema={defaultSchema(location)} title="Contato">
      <h2>Fale Conosco</h2>
      <p>Sem falar.</p>
    </MainPageWrapper>
  )
}

export default Contato
