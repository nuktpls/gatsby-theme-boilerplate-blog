import React from 'react'
import Layout from 'gatsby-layout-builder'
import MainMenuData from '@Content/menus/main-menu.yaml'

const HeaderBlock = ({ logotipoSvg }) => {
  console.log('MainMenuData')
  console.log(MainMenuData)

  return (
    <Layout
      type="HEADER"
      opt={{
        mainMenuStatus: MainMenuData.menu.status,
        logoSvg: logotipoSvg,
        bgOne: '#262A33',
        bgTwo: 'transparent',
        classes: 'header-block',
      }}
      mainMenu={MainMenuData.menu.items}
    />
  )
}

export default HeaderBlock
