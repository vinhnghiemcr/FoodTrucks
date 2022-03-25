import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

function App() {
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])

  // handle file upload
  const handleFileUpload = e => {}

  return (
    <div>
      <h3>
        Read CSV file in React -{' '}
        <a
          href="https://www.cluemediator.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clue Mediator
        </a>
      </h3>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />
      <DataTable pagination highlightOnHover columns={columns} data={data} />
    </div>
  )
}

export default App
