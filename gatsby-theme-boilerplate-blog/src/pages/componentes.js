import React from 'react'
import MainPageWrapper from '@BlockBuilder/MainPageWrapper'
import { defaultSchema } from '../configs/schemas'

const Componentes = ({ location }) => {
  return (
    <MainPageWrapper seoSchema={defaultSchema(location)} title="Componentes">
      <p>
        O mundo da programação e da internet pode ser resumido como um gigante
        serviço de correspondência. Cartas são enviadas para todos os lados na
        velocidade da luz contendo textos que serão interpretados por um
        dispositivo eletrônico.
      </p>
      <p>
        Existém <em>"coisas"</em> nesse mundo que são <em>"algo"</em> apenas
        porque fazem parte de um todo. Esses mecanismos são chamados de
        componentes e são encontrados nos mais diversos ambientes.
      </p>
      <h2>O que são componentes?</h2>
      <p>
        Um componente é parte de um módulo. Serve para reutilizar códigos,
        mudando apenas o que é necessário dentro de uma repetição inteligente. É
        comum encontrar componentes visuais, mas também existem componentes que
        são mais complexos, como por exemplo, o componente de formulário.
      </p>

      <blockquote cite="http://developer.mozilla.org">
        <p>Zumba frenética.</p>
      </blockquote>
    </MainPageWrapper>
  )
}

export default Componentes
