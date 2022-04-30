import React from 'react'
import { Link } from 'gatsby'
const MainMenu = ({ wrapperRef, isVisibleClass, ariaVisible }) => (
  <nav
    ref={wrapperRef}
    id="site-navigation"
    className={'main-nav menu-state-' + isVisibleClass}
    itemScope="itemScope"
    itemType="http://schema.org/SiteNavigationElement"
  >
    <ul
      className=""
      id="mainmenu"
      role="menu"
      aria-labelledby="check-toggle-icon"
    >
      <li role="none">
        <p>Login / Registre-se</p>
      </li>
      <li role="none">
        <a
          href="https://descola.org/cursos"
          role="menuitem"
          itemProp="url"
          title="Cursos da Descola"
          aria-label="Acesso a página: Cursos, no websítio da Descola"
        >
          Cursos
        </a>
      </li>
      <li role="none">
        <a
          href="https://descola.org/sobre"
          role="menuitem"
          itemProp="url"
          title="O que é a Descola?"
          aria-label="Acesso a página: O que é a Descola? No websítio da Descola"
        >
          O Que é a Descola?
        </a>
      </li>
      <li role="none">
        <a
          href="https://descola.org/empresas"
          role="menuitem"
          itemProp="url"
          title="Para Empresas"
          aria-label="Acesso a página: Para empresas, no websítio da Descola"
        >
          Para empresas
        </a>
      </li>
      <li role="none">
        <Link
          to="/"
          role="menuitem"
          itemProp="url"
          title="Blog da Descola"
          aria-label="Acesso a página: Blog, no websítio da Descola"
        >
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default MainMenu
