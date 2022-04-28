import React from 'react'
import MainPageWrapper from '@BlockBuilder/MainPageWrapper'
import { defaultSchema } from '../configs/schemas'

const Documentacao = ({ location }) => {
  return (
    <MainPageWrapper seoSchema={defaultSchema(location)} title="Documentação">
      <h2>Glossário</h2>
      <p>Palavras-chave.</p>

      <h2>Pronto para começar</h2>
      <p>Palavras-chave.</p>
    </MainPageWrapper>
  )
}

export default Documentacao
