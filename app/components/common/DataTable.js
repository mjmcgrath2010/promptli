import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaterialTable from 'material-table'
import { forwardRef } from 'react'

import AddBox from '@material-ui/icons/AddBox'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import API from '../../utils/api'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [],
      headers: [],
    }
  }
  componentDidMount() {
    API.getTableData(this.props.resource, this.props.columnsHeaders).then(data => {
      return this.setTableData(data)
    })
  }
  static defaultProps = {
    title: '',
    columnsHeaders: undefined,
    resource: '',
  }

  static propTypes = {
    title: PropTypes.string,
    columnsHeaders: PropTypes.arrayOf(PropTypes.string),
    endpoint: PropTypes.string,
  }

  setTableData = ({ columns = [], headers = [] }) => {
    this.setState({ columns, headers })
  }
  render() {
    const { title } = this.props
    const { headers, columns } = this.state
    return (
      <div
        style={{
          maxWidth: '100%',
          marginTop: '2em',
        }}
      >
        {columns.length ? (
          <MaterialTable icons={tableIcons} columns={headers} data={columns} title={title} />
        ) : (
          <h2>No Resources found</h2>
        )}
      </div>
    )
  }
}

export default DataTable
