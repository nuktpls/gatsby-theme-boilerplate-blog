// eslint-disable-next-line
import React from 'react'

import GlobalContext from '../services/context'
import Body from '../components/Body'

const BodyContainer = ({ children, opt }) => {
  const bgStyle = opt?.bgImage?.src ? `url(${opt.bgImage.src || ' '})` : 'unset'
  return (
    <GlobalContext.Consumer>
      {value => (
        <>
          <Body
            opt={opt || false}
            customClasses={opt?.classes || ''}
            bgImage={bgStyle || false}
          >
            {children}
          </Body>
        </>
      )}
    </GlobalContext.Consumer>
  )
}
export default BodyContainer
