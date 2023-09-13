import { useEffect, useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import DraggableTable from './components/DraggableTable/DraggableTable'
import { columns } from './components/DraggableTable/table-utils'

function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/table-data.json').then(res => res.json()).then(data => setData(data));
    }, [])

    useEffect(()=>{
      console.log(data);
    },[data])

  return (
    <main>
      <Header project_count={63} project_value={'75,600.00'}/>
      {/* <Table columns={columns} data={data}/> */}
      <DraggableTable columns={columns} data={data} />
    </main>
  )
}

export default App
