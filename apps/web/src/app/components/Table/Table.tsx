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
    <div className="relative overflow-x-auto max-sm:box-[mx*-1] max-sm:w-auto max-sm:box-px">
      <div className="max-sm:min-w-[35rem] rounded-sm border border-border">
        <table
          className={clsx(
            'mx-auto block w-full sm:table sm:table-fixed rounded-sm overflow-hidden',
            className
          )}
        >
          <tbody className="block w-full sm:table-row-group">
            {rows &&
              rows.map(({ _key, cells }, rowIndex) => {
                const isHeaderRow = rowIndex === 0
                return (
                  <tr
                    className={clsx(
                      'odd:bg-surface-muted/50 table-row',
                      isHeaderRow &&
                        '[&_td]:!border-0 table-row [&_td]:!font-bold'
                    )}
                    key={_key}
                  >
                    {!!cells?.length &&
                      cells.map((cell, cellIndex) => {
                        const isEmpty = !cell

                        return (
                          <td
                            className={clsx(
                              '[&_span]:flex-auto type-body-sm align-left border-border box-border flex w-full flex-row flex-nowrap items-center justify-between border-t px-2 py-1 text-left table-cell',
                              isEmpty && 'hidden sm:table-cell',
                              'first:w-1/3'
                            )}
                            data-heading={rows[0]?.cells[cellIndex]}
                            key={`${_key}-${cell}-${cellIndex}`}
                          >
                            {cell && <span>{cell}</span>}
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
