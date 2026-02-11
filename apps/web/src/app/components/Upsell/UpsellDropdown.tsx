'use client'

import type { ControlProps, Props as SelectProps } from 'react-select';
import React from 'react'
import Select, { components } from 'react-select'

interface UpsellDropdownProps {
  options: OptionType[]
  title: string
}

export interface OptionType {
  label: string
  value: number | string
}

const Control = (props: ControlProps<OptionType, false>) => {
  const { children, selectProps } = props
  const { prefixTitle } = selectProps as SelectProps<OptionType, false> & { prefixTitle?: string }

  return (
    <components.Control {...props}>
      <div className='flex justify-between items-center w-full font-medium'>
        <div>{prefixTitle}</div>
        <div className='flex gap-2'>{children}</div>
      </div>
    </components.Control>
  )
}

const UpsellDropdown = ({ options, title }: UpsellDropdownProps) => 
   (
    <div>
      <Select<OptionType, false>
        className="bg-surface-neutral-medium rounded-md border border-surface-neutral-light/60 type-body-sm"
        classNames={{
          control: () => "px-2 py-[0.875rem]",
          menu: () => "bg-surface-neutral-medium rounded-md px-2 py-[0.875rem] mt-2",
          option: () => 'font-medium mb-1 last:mb-0'
        }}
        components={{ Control }}
        defaultValue={options[0]}
        isSearchable={false}
        options={options}
        {...{ prefixTitle: title } as Record<string, unknown>}
        unstyled
      />
    </div>
  )


export default UpsellDropdown