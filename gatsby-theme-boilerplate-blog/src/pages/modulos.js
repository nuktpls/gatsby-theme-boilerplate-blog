import React from 'react'
import MainPageWrapper from '@BlockBuilder/MainPageWrapper'
import { defaultSchema } from '../configs/schemas'

const Modulos = ({ location }) => {
  return (
    <MainPageWrapper seoSchema={defaultSchema(location)} title="Módulos">
      <h2>O que são módulos?</h2>
      <p>Teste aqui de tipografia aleatório contendo texto em língua nativa.</p>
    </MainPageWrapper>
  )
}

export default Modulos
