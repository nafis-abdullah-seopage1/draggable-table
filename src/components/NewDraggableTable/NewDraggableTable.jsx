import { useState } from 'react';
import NewMonthFilter from './NewMonthFilter';
import NewColumnFilter from './NewColumnFilter';
import NewModalTable from './NewModalTable';
import style from './styles/newDraggableTable.module.css'
import Pagination from '../Pagination';

const NewDraggableTable = ({ columns, tableData, anchored_Cell }) => {
  const [draggedColumn, setDraggedColumn] = useState(null);
  const [tableColumns, setTableColumns] = useState([...columns]);
  const [modalData, setModalData] = useState({});
  const [selectedCell, setSelectedCell] = useState('');
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDragStart = (e, column) => {
    e.dataTransfer.setData('text/plain', column.content);
    setDraggedColumn(column);
  };

  const handleDragOver = (e, column) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    if (draggedColumn !== targetColumn.title) {
      const updatedColumns = [...tableColumns];
      const draggedIndex = tableColumns.indexOf(draggedColumn);
      const targetIndex = tableColumns.indexOf(targetColumn);
      updatedColumns.splice(draggedIndex, 1);
      updatedColumns.splice(targetIndex, 0, draggedColumn);

      // Reorder the data columns accordingly
      const updatedData = tableData.map((row) => {
        const newRow = {};
        updatedColumns.forEach((col) => {
          newRow[col.title] = row[col.title];
        });
        return newRow;
      });

      // Update the state with the new column order and data
      setTableColumns(updatedColumns);
      // setTableData(updatedData);
    }
    setDraggedColumn(null);
  };

  return (
    <>
      <section className='d-flex justify-content-between' style={{ margin: '25px 35px' }}>
        <NewMonthFilter />
        <NewColumnFilter columns={columns} setTableColumns={setTableColumns} />
      </section>

      <div className="" style={{ overflowX: 'auto', width: '97%', margin: '0 auto' }}>

        <table className={style.custom_table}>
          <thead className="">
            <tr>
              {tableColumns.map((column, i) => (
                <th
                  key={i}
                  draggable
                  onDragStart={(e) => { handleDragStart(e, column) }}
                  onDragOver={(e) => { handleDragOver(e, column) }}
                  onDrop={(e) => { handleDrop(e, column) }}
                  className={style.draggable_column_cell}
                >
                  {column.content}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...tableData].map((row, i) => (
              <tr key={i}>
                {
                  [...tableColumns].map((cell, j) => {
                    return (
                      <td key={j} className={style.tableRow_cell}>
                        {
                          anchored_Cell[cell.title] ?
                            <button
                              type='button'
                              className="btn text-danger font-weight-bold"
                              style={{ cursor: 'pointer', textDecoration: 'underline solid 2px', textUnderlineOffset: '2px' }}
                              data-toggle="modal"
                              data-target="#staticBackdrop"
                              onClick={() => {
                                setModalData({ rowData: row, anchored_Cell });
                                setSelectedCell(cell.title);
                                handleShow();
                              }}>{row[cell.title]}</button>
                            : (cell.title === 'freelancer_com_message_page_link' || cell.title === 'freelancer_com_profile_link') ?
                              <a href={row[cell.title]} style={{ textDecoration: 'underline 2px blue' }} target='_blank'>Visit Link</a> :
                              <span className='font-weight-bold text-secondary'>{row[cell.title]}</span>
                        }
                      </td>)
                  })
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {show ? <NewModalTable modal_data={modalData} selectedCell={selectedCell} setSelectedCell={setSelectedCell} handleClose={handleClose} /> : <></>}
      <Pagination page={page} setPage={setPage} totalPage={50} />
    </>
  );
};

export default NewDraggableTable;