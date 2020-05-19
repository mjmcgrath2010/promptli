import { h } from 'preact'
import FullScreenModal from '../displays/FullScreenModal'

const Widget = props => {
  const { ctaText, title } = props
  return (
    <div>
      <FullScreenModal ctaText={ctaText} title={title} />
    </div>
  )
}

export default Widget
