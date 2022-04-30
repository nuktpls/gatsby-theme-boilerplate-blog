import React from 'react'
import BodyContainer from './BodyContainer'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'
import RowContainer from './RowContainer'
const LayoutResolver = ({
  subAgent,
  opt,
  type,
  sectionTitle,
  setLocation,
  logo,
  mainMenu,
}) => {
  function renderComponent(renderThis) {
    switch (renderThis) {
      case 'BODY':
        return <BodyContainer children={subAgent} opt={opt} />
      case 'FOOTER':
        return <FooterContainer children={subAgent} opt={opt} />
      // case 'SEARCH':
      //   return <FormContainer opt={opt} />
      // case 'BLOCK_SHARE':
      // return <BlockShareContainer opt={opt} />
      case 'HEADER':
        return <HeaderContainer logo={logo} opt={opt} mainMenu={mainMenu} />
      case 'ROW':
        return (
          <RowContainer
            opt={opt}
            children={subAgent}
            sectionTitle={sectionTitle}
            setLocation={setLocation}
          />
        )
      default:
        return console.log(renderThis)
    }
  }
  return <>{renderComponent(type)}</>
}
export default LayoutResolver
