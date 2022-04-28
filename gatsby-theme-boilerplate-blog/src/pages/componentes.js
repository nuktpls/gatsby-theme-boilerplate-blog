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
        Existém <em>"coisas"</em> nesse mundo que são somente se tornam{' '}
        <em>"algo"</em> porque fazem parte de um todo, sem o todo não haveria
        esse algo. Esses mecanismos atuantes dentro apenas de seus escopos, são
        chamados de componentes e são encontrados nos mais diversos ambientes.
      </p>
      <h2>O que são componentes?</h2>
      <p>
        Um componente é parte de um módulo. Serve para reutilizar códigos,
        mudando apenas o que é necessário dentro de uma repetição inteligente.
        Componentes podem ser visuais, mas também existem componentes que são
        mais complexos, como por exemplo, o componente de formulário.
      </p>
      <p>
        Agora que você já aprendeu um pouco mais sobre componentes, veja abaixo
        a lista dos compontes do <strong>Boilerplate Blog</strong>:
      </p>
      <ul>
        <li>Body</li>
        <li>Header</li>
        <li>Heading's</li>
        <li>Main page template</li>
        <li>Main template wrapper</li>
        <li>New footer block</li>
        <li>Page header</li>
        <li>Post card</li>
        <li>Posts block</li>
        <li>Single post block</li>
      </ul>
      <blockquote cite="Zen brush">
        <p>Zumba frenética.</p>
      </blockquote>
    </MainPageWrapper>
  )
}

export default Componentes
