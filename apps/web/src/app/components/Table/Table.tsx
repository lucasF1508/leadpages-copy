import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'

export interface RowType {
  _key: string
  cells: string[]
}
export interface TableProps
  extends Omit<React.ComponentProps<'table'>, 'className'> {
  className?: ClassValue
  rows: RowType[]
}

const Table = ({ className, rows }: TableProps) => {
  if (!rows) return null

  return (
    <div className="relative overflow-x-auto max-sm:box-[mx*-1] max-sm:w-auto max-sm:box-px my-6">
      <div className="max-sm:min-w-[35rem] rounded-sm border border-border">
        <table
          className={clsx(
            'mx-auto w-full sm:table rounded-sm overflow-hidden',
            className
          )}
        >
          <tbody className="sm:table-row-group">
            {rows &&
              rows.map(({ _key, cells }, rowIndex) => {
                const isHeaderRow = rowIndex === 0
                return (
                  <tr
                    className={clsx(
                      'block sm:table-row odd:bg-surface-muted/50',
                      isHeaderRow && '[&_td]:!border-0 [&_td]:!font-bold'
                    )}
                    key={_key}
                  >
                    {!!cells?.length &&
                      cells.map((cell, cellIndex) => {
                        const isEmpty = !cell

                        return (
                          <td
                            className={clsx(
                              'type-body-sm border-border box-border border-t px-2 py-1 text-left',
                              'block sm:table-cell',
                              'sm:align-left',
                              // Mobile: flex layout with heading
                              'flex flex-row flex-nowrap items-center justify-between sm:flex-none',
                              'w-full sm:w-auto',
                              isEmpty && 'hidden sm:table-cell',
                              // Remove first:w-1/3 to prevent overlap
                            )}
                            data-heading={rows[0]?.cells[cellIndex]}
                            key={`${_key}-${cell}-${cellIndex}`}
                          >
                            {/* Mobile: show heading before content */}
                            <span className="flex-0 flex-shrink-0 font-bold mr-3 sm:hidden">
                              {rows[0]?.cells[cellIndex]}:{' '}
                            </span>
                            {cell && <span className="flex-1 sm:flex-none">{cell}</span>}
                          </td>
                        )
                      })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
