import React from 'react'
import Table from '@components/Table'

const TableRenderer = ({ node: { rows } = {} }) => <Table rows={rows} />

export default TableRenderer
