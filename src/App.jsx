import Header from './components/Header';
import { anchored_Cell, columns } from './utils/table-utils';
import useFetchData from './hooks/useFetchData';
import NewDraggableTable from './components/NewDraggableTable/NewDraggableTable';
import { Button } from 'react-bootstrap';

function App() {
  const [tableData] = useFetchData('/table-data.json');

  return (
    <main>
      <Button variant='dark' style={{position:'fixed',top:'0',left:'0'}} onClick={()=>{
        window.navigator.vibrate[200];
      }}>vibrate</Button>
      <Header project_count={63} project_value={'$75,600.00'}/>
      <NewDraggableTable columns={columns} tableData={tableData} anchored_Cell={anchored_Cell} />
    </main>
  )
}

export default App;
