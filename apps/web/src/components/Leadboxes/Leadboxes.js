import React from 'react'
import { useRouter } from 'next/router'
import LeadboxesExitIntent from './LeadboxesExitIntent'
import LeadboxesPopUp from './LeadboxesPopUp'

const Leadboxes = ({ data }) => {
  const { asPath } = useRouter()

  const leadboxes =
    data?.reduce((acc, curr) => {
      const { placementRegex } = curr
      const isMatch = new RegExp(placementRegex, 'i').test(asPath)
      return isMatch ? [...acc, curr] : acc
    }, []) || []

  return (
    <>
      {leadboxes?.map(({ trigger, _key, ...props }) => (
        <React.Fragment key={_key}>
          {
            {
              popUp: <LeadboxesPopUp {...props} />,
              exitIntent: <LeadboxesExitIntent {...props} />,
            }[trigger]
          }
        </React.Fragment>
      ))}
    </>
  )
}

export default Leadboxes
