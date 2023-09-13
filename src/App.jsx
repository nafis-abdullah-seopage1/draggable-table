import { useEffect, useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import DraggableTable from './components/DraggableTable'
import { columns } from './components/table-utils';

const datas = [
  { Name: 'John', Age: 30, Email: 'john@example.com' },
  { Name: 'Jane', Age: 25, Email: 'jane@example.com' },
  // Add more data as needed
];


function App() {


  return (
    <main>
      <Header project_count={63} project_value={'75,600.00'}/>
      {/* <Table/> */}
      <DraggableTable columns={columns} data={datas} />
    </main>
  )
}

export default App
