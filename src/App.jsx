import Header from './components/Header';
import { anchored_Cell, columns } from './utils/table-utils';
import useFetchData from './hooks/useFetchData';
import NewDraggableTable from './components/NewDraggableTable/NewDraggableTable';

function App() {
  const [tableData] = useFetchData('/table-data.json');

  return (
    <main>
      <Header project_count={63} project_value={'$75,600.00'}/>
      <NewDraggableTable columns={columns} tableData={tableData} anchored_Cell={anchored_Cell} />
    </main>
  )
}

export default App;
