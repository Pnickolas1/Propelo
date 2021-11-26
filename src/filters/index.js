import React from 'react'


function Select({ name, value, type, options, id, onChange }) {
  return (
    <div style={{ marginTop: 20 }}>
      <label>{name}</label>
      <select onChange={e => onChange(name, e.target.value)} name={name}>
        <option value={""}>select</option>
        {options.map((option, i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}



export function Filters({ typeOptions, statusOptions, priorityOptions, onChange, filters }) {
  return (
    <div>
      <form>
        <Select name="type" value={filters['type']} options={typeOptions} onChange={onChange}/>
        <Select name="status" value={filters['status']} options={statusOptions} onChange={onChange}/>
        <Select name="priority" value={filters['priority']} options={priorityOptions} onChange={onChange}/>
      </form>
    </div>
  )
}