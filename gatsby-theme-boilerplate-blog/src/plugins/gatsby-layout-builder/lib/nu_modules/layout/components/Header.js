import React from 'react'
import Layout from '../../../'
import MainMenuContainer from '../containers/MainMenuContainer'

const Header = ({
  refState,
  menuActive,
  wrapperRef,
  bgOne,
  bgTwo,
  mainMenuStatus,
  mainMenuItems,
  mainMenu,
  logo,
}) => {
  return (
    <header>
      <Layout
        type="ROW"
        opt={{
          isBoxed: false,
          bgColor: bgOne,
          classes: 'main-header',
        }}
      >
        {/* mobile menu */}
        {mainMenuStatus === true ? (
          <>
            <div className={'mobile-only main-header-' + menuActive}>
              <MainMenuContainer
                wrapperRef={wrapperRef}
                refState={refState}
                mainMenuStatus={mainMenuStatus}
                isMobile={true}
                mainMenuItems={mainMenuItems}
              />
            </div>
            <div className="desktop-only">
              <MainMenuContainer
                wrapperRef={wrapperRef}
                refState={refState}
                mainMenuStatus={mainMenuStatus}
                isMobile={false}
                mainMenuItems={mainMenu}
              />
            </div>
          </>
        ) : null}
        {/* desktop menu */}
      </Layout>
      <Layout
        type="ROW"
        opt={{
          bgColor: bgTwo,
          isBoxed: false,
          classes: 'header-logo-wrapper desktop-only',
        }}
      >
        <Layout type="ROW" opt={{ isBoxed: true, classes: 'header-logo' }}>
          {logo}
        </Layout>
      </Layout>
    </header>
  )
}

export default Header
