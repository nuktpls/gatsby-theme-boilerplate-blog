import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import Form from '../components/Form'
// import addToMailchimp from 'gatsby-plugin-mailchimp'
// import submitHandler from '../../PoupaLuz/containers/submit-handler'
// import mainYAML from '@Content/main.yaml'

import config from '../config/'
import slugify from '../../../tools/slugify'
// import { useSiteMetaDatas } from '../../../tools/useSiteMetaDatas'
export default function FormContainer({ opt }) {
  const [search, setSearch] = useState('')
  const [honey, setHoney] = useState('')
  const searchBaseUrl = opt.searchBaseUrl || 'sssxxx' || null
  // const { site } = useSiteMetaDatas()

  // const [mcRes, setMcRes] = useState('')
  // console.log(mcRes)
  // const [msg, setMsg] = useState('')
  // const [success, setSuccess] = useState('')
  // const handleMcRes = (msgReceived, resReceived) => {
  // 	setMcRes(resReceived)
  // 	handleMsg(msgReceived, resReceived)
  // 	handleSuccess(resReceived)
  // }
  // const handleMsg = (msgNow, resReceived) => {
  // 	let msgNull = null
  // 	if (resReceived === 'error') {
  // 		msgNull = config.nope_msg
  // 	}
  // 	if (resReceived === 'success') {
  // 		msgNull = config.success_msg
  // 	}
  // 	setMsg(msgNull)
  // }
  // const handleSuccess = (successNow) => {
  // 	setSuccess(successNow)
  // }
  const handleSearchChange = searchTyping => {
    setSearch(searchTyping)
  }
  const handleHoneypotChange = honeyTyping => {
    console.log('honeypot')
    setHoney(honeyTyping)
  }
  const theFunction = param => {
    return (document.location = searchBaseUrl + slugify(param))
  }
  const handleSubmit = async (e, search, honey) => {
    if (!e) {
      return null
    }
    // const configExample = {
    // 	ajax_url: 'http://localhost:3000/wp-admin/admin-ajax.php',
    // }
    // const dataExample = {
    // 	user: 'user',
    // 	pwd: 'pwd',
    // 	action: 'login_init',
    // }
    // easyAjax(configExample, dataExample, 'POST')
    e.preventDefault()
    honey || theFunction(search)
    // (await submitHandler(configExample, dataExample).then(
    // ({ msg, result }) => {
    // handleMcRes(msg, result)
    // return console.log('logo')
    // }
  }
  // const msgStyle =
  // 	success === 'success' ? config.success_class : config.nope_class

  return (
    <Form
      handleSubmit={handleSubmit}
      honeypotStateChanger={handleHoneypotChange}
      searchStateChanger={handleSearchChange}
      search={search}
      // msg={msg}
      // msgStyle={msgStyle}
      // success={success}
      honey={honey}
      bot_msg={config.bot_msg}
      form_class={config.form_class}
      size={config.size}
      // has_Link={nu_teias.link}
      // link_url={config.link_url}
      // link_text={config.link_text}
      search_placeholder={config.search_placeholder || opt.placeholder}
      noSPAM={config.noSPAM}
      warnME={config.warnME}
    />
  )
}
