import React from 'react'

const HeadingBlock = ({ importance = 6, children, classes = '' }) => {
  let HeadingNow = text => (
    <h1 className={`boilerplate-heading ${classes}`}>{text}</h1>
  )
  const WrapperHR = ({ children }) => {
    return (
      <div className="wrapper-hr">
        <div className="inner-hr left-hr">
          <span className="ht-top"></span>
        </div>
        {children}
        <div className="inner-hr right-hr">
          <span className="ht-top"></span>
        </div>
      </div>
    )
  }

  function Heading(props) {
    switch (importance) {
      case 6:
        return <h5 className={'boilerplate-heading ' + classes}>{children}</h5>
      case 7:
        return <h4 className={'boilerplate-heading ' + classes}>{children}</h4>
      case 8:
        return <h3 className={'boilerplate-heading ' + classes}>{children}</h3>
      case 9:
        return <h2 className={'boilerplate-heading ' + classes}>{children}</h2>
      case 10:
        return <h1 className={'boilerplate-heading ' + classes}>{children}</h1>
      default:
        return <h1 className={'boilerplate-heading ' + classes}>{children}</h1>
    }
  }

  return (
    <WrapperHR>
      <Heading>{children}</Heading>
    </WrapperHR>
  )
}

export default HeadingBlock
