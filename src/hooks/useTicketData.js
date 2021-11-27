import React, { useEffect, useState } from 'react'
import data from './data.json'



const defaultFilters = {
  status: '',
  type: '',
  priority: '',
}

function mutateData(rawData = [], filters = {}) {
  let data = []

  if (filters?.type) {
    rawData = rawData.filter(item => item.issue_type === filters.type)
  }
  if (filters?.status) {
    rawData = rawData.filter(item => item?.status === filters.status)
  }
  if(filters?.priority) {
    rawData = rawData.filter(item => item?.priority === filters.priority)
  }
  const test = rawData?.reduce((accum, data) => {
      if (data?.assignee in accum) {
        accum[data?.assignee]++
      } else {
        accum[data?.assignee] = 1
      }
      return accum  
  }, {})
  Object.entries(test).forEach((item, i) => {
    data.push({ x: item[0], y: item[1]})
  })

  return data
}


function handleData(data, key) {
  let rawData = {}
  // could use a set, rather not, it's doing this under the hood anyways
  data.forEach(item => rawData[item.[`${key}`]] = true)
  return Object.keys(rawData)
}


export function useTicketData() {
  const [loading, setLoading] = useState(false);
  const [rawData, setRawData] = useState([])
  const [typeOptions, setTypeOptions] = useState([])
  const [statusOptions, setStatusOptions] = useState([])
  const [priorityOptions, setPriorityOptions] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const [currentFilters, setFilters] = useState(defaultFilters)


  useEffect(() => {
    const d = data
    setRawData(d?.records)
  }, [])

  useEffect(() => {
    setFilteredData(
      mutateData(rawData, currentFilters) 
    )

  }, [currentFilters?.status, currentFilters?.type, currentFilters?.priority, rawData])

  

  useEffect(() => {
    setTypeOptions(handleData(rawData, 'issue_type'))
  }, [rawData])

  useEffect(() => {
    setStatusOptions(handleData(rawData, 'status'))
  }, [rawData])

  useEffect(() => {
    setPriorityOptions(handleData(rawData, 'priority'))
  }, [rawData])

  function handleChange(e, value) {
    setFilters(filters => ({
      ...filters,
      [e]: value,
    }))
  }
  

  console.log(currentFilters)
  
  return {
    loading,
    rawData,
    typeOptions,
    statusOptions,
    priorityOptions,
    data: filteredData,
    onChange: handleChange,
    filters: currentFilters,
  }
}