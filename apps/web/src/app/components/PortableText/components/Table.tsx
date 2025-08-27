import type { RowType } from '@/components/Table'
import React from 'react'
import Table from '@/components/Table'

const TableType = ({
  className,
  value: { rows } = {},
}: {
  className?: string
  value?: { rows?: RowType[] }
}) => (!rows?.length ? null : <Table className={className} rows={rows} />)

export default TableType
