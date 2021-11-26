import React from 'react'
import { Filters } from '../filters/'
import { DemoVis } from '../demo/'
import { useTicketData } from '../hooks/useTicketData'

export function Tickets() {
  const { loading, data, typeOptions, statusOptions, priorityOptions, onChange, filters  } = useTicketData()

  return (
    <div>
      <Filters
        filters={filters}
        onChange={onChange}
        typeOptions={typeOptions}
        statusOptions={statusOptions}
        priorityOptions={priorityOptions}/>
      <DemoVis data={data}/>
    </div>
  )
}