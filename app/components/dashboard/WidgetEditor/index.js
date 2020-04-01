import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../pages/dashboard/design'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const IFrameEditor = styled.iframe`
  width: 75vw;
  height: calc(90vh - 70px);
  border: 3px solid gray;
  border-radius: 5px;
  position: absolute;
  right: 2em;
  top: 100px;
`
let iframeRef

const WidgetEditor = props => {
  const [title, setTitle] = useState('Hello')
  useEffect(() => {
    updateEditor()
  }, [])

  const updateEditor = () => {
    const document = iframeRef.contentDocument
    const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Widget Preview</title>
            <style>
            </style>
          </head>
          <body>
            <div id="editor" />
            <script src="${window.location.origin}/static/widget/promptli.js"></script>
            <script type="text/javascript">
              window.PromptliWidget && window.PromptliWidget.init({ title: '${title}' }, 'editor')
            </script>
          </body>
          </html>
        `

    document.open()
    document.write(documentContents)
    document.close()
  }
  return (
    <Fragment>
      <Sidebar />
      <section className="result">
        <input
          type="text"
          onChange={e => {
            setTitle(e.target.value)
            updateEditor()
          }}
        />
        <IFrameEditor ref={ref => (iframeRef = ref)} />
      </section>
    </Fragment>
  )
}

WidgetEditor.defaultProps = {}
WidgetEditor.propTypes = {}

export default WidgetEditor
