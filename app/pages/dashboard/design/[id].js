import React from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import WidgetEditor from '../../../components/dashboard/WidgetEditor'
import DashboardLayout from '../../../components/dashboard/layouts'
import withAuth from '../../../lib/withAuth'

const DesignEdit = ({displays = []}) => {
  const router = useRouter()
  const { id } = router.query
  let display
  display = displays.find(d => d._id === id)
  return (
    <DashboardLayout>
      <div>
      {display && (
        <WidgetEditor {...display}/>
      )}
      </div>
    </DashboardLayout>
  )
}

const mapStateToProps = ({ dashboard }) => {
  return {
    displays: dashboard.displays,
  }
}

const mapDispatchToProps = dispactch => {
  return {
    dispatch: action => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(DesignEdit))
