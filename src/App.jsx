import Header from './components/Header'
import Table from './components/Table'
import DraggableTable from './components/DraggableTable/DraggableTable'
import { columns } from './components/DraggableTable/table-utils'

function App() {

  return (
    <main>
      <Header project_count={63} project_value={'75,600.00'}/>
      {/* <Table columns={columns} data={data}/> */}
      <DraggableTable columns={columns} />
    </main>
  )
}

export default App
