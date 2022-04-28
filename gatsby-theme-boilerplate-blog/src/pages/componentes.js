import React from 'react'
import MainPageWrapper from '@BlockBuilder/MainPageWrapper'
import { defaultSchema } from '../configs/schemas'

const Componentes = ({ location }) => {
  return (
    <MainPageWrapper
      seoSchema={defaultSchema(location)}
      title="Componentes"
      classes="main-page-wrapper"
    >
      <p>
        O mundo da programação e da internet pode ser resumido como um gigante
        serviço de correspondências. <br />
        Cartas são enviadas para todos os lados na velocidade da luz contendo
        textos que serão interpretados por um dispositivo eletrônico.
      </p>
      <p>
        Existém <em>"coisas"</em> nesse mundo que somente se tornam{' '}
        <em>"algo"</em> porque fazem parte de um todo, sem o todo não haveria
        esse algo. <br />
        Esses mecanismos atuam dentro apenas de seus escopos, chamados de
        componentes, são encontrados nos mais diversos tipos de ambientes.
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
      <h2>Vamos falar mais sobre componentes?</h2>
      <p>
        Dentro do sistema <strong>Te[i]as</strong> de classificação cibernética
        os componentes NÃO guardam códigos contendo lógicas, apenas a parte
        visual, ou seja a saída visual da lógica é que são escritas em
        componentes.
      </p>

      <p>
        Fossem apenas{' '}
        <sup>
          <a name="ref1" href="#myfootnote1" id="ref1">
            1
          </a>
        </sup>{' '}
        componentes visuais não necessitariam serem escritos em código
        dinâmicos, pois a função deles é visual e não de inteligência. Os
        componentes não possuem a lógica em si e geralmente também não possuem a
        informação. Sem informação e sem lógica, resta uma estrutura inteligente
        que fará o invólucro de qualquer informação corretamente padronizada.
      </p>
      <h2>Componentes e containers, quem é quem?</h2>
      <p>
        Essa estrutura é dinâmica e tem em sua cabeça do tempo a lógica guardada
        em uma pasta nomeada de <em>containers</em>.
      </p>
      <p>
        Os <em>containers</em> geralmente chamam como retorno de suas próprias
        chamadas um componente, mas não carrega o seu código, pois a função dos
        containers é guardar os códigos contendo as lógicas de manipulação de
        dados. Por sua vez, o componente separado da lógica, funciona como uma
        carroceria acoplada a inteligência mecânica de um carro.
      </p>
      <sup id="myfootnote1" name="myfootnote1">
        1. Some: Existe sim.{' '}
        <a href="#ref1" title="Voltar para footnote 1.">
          ↩
        </a>
      </sup>
    </MainPageWrapper>
  )
}

export default Componentes
