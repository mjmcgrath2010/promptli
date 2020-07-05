import { h, Fragment } from 'preact'
import FullScreenModal from '../displays/FullScreenModal'
import { useDispatch, useSelector } from 'react-redux'
import { initPromptliApi } from '../actions/api/actionCreators'
import { initWidget } from '../actions/widget/actionCreators'

const Widget = props => {
  const { identifier, widgetId } = props
  const dispatch = useDispatch()
  const apiReady = useSelector(({ api: { ready } }) => ready)
  const widgetState = useSelector(({ widget }) => widget)
  const { items, initialized, ...rest } = widgetState

  if (identifier && widgetId && !apiReady) {
    dispatch(initPromptliApi({ identifier, widgetId }))
  }

  if (apiReady && !initialized) {
    dispatch(initWidget())
  }

  return <div>{initialized ? <FullScreenModal itemIds={items} {...rest} /> : <Fragment />}</div>
}

export default Widget
