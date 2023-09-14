import Header from './components/Header'
import DraggableTable from './components/DraggableTable/DraggableTable'
import { columns } from './components/DraggableTable/table-utils'
import useFetchData from './hooks/useFetchData';

function App() {
  const [tableData, setTableData] = useFetchData();

  return (
    <main>
      <Header project_count={63} project_value={'75,600.00'}/>
      <DraggableTable columns={columns} tableData={tableData} />
    </main>
  )
}

export default App
