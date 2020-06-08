import { h } from 'preact'
import FullScreenModal from '../displays/FullScreenModal'
import { useMemo, useState } from 'preact/hooks'
import PromptliAPI from '../api'

const Widget = props => {
  const { ctaText, title, identifier, widgetId } = props
  const api = useMemo(() => new PromptliAPI(identifier, widgetId), [identifier, widgetId])

  return (
    <div>
      <FullScreenModal api={api} ctaText={ctaText} title={title} />
    </div>
  )
}

export default Widget
