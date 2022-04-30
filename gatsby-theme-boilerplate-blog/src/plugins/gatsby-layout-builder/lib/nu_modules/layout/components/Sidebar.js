import React from 'react'

const Sidebar = ({ subAgent }) => (
  <aside>
    <div className="aside-container-wrapper">
      <div className="aside-container">
        {subAgent.map((e, i) => (
          <section key={i}>{e}</section>
        ))}
      </div>
    </div>
  </aside>
)

export default Sidebar
