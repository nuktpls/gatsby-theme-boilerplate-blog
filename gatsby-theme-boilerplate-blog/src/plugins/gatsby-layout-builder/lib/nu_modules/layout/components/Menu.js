import React from 'react'
import { Link } from 'gatsby'
const Menu = ({ wrapperRef, isVisibleClass, isHiddenState, link_01 }) => (
	<nav
		ref={wrapperRef}
		className={'main-nav zin menu-state-' + isVisibleClass}
		id="site-navigation"
		aria-hidden={isHiddenState}
	>
		<ul className="" id="mainmenu" aria-labelledby="check-toggle-icon">
			<li role="none">
				<p>
					<a href={link_01}>Login / Registre-se</a>
				</p>
			</li>
			<li role="none">
				<a href="https://descola.org/cursos" role="menuitem" tabIndex="0">
					Cursos
				</a>
			</li>
			<li role="none">
				<a href="https://descola.org/sobre" role="menuitem" tabIndex="0">
					O Que é a Descola?
				</a>
			</li>
			<li role="none">
				<a href="https://descola.org/empresas" role="menuitem" tabIndex="0">
					Para empresas
				</a>
			</li>
			<li role="none">
				<Link to="/" role="menuitem" tabIndex="0">
					Blog
				</Link>
			</li>
		</ul>
	</nav>
)

export default Menu
