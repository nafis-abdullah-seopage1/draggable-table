import React, { useEffect, useState } from 'react';
import NewMonthFilter from './NewMonthFilter';
import NewColumnFilter from './NewColumnFilter';
import NewModalTable from './NewModalTable';

const NewDraggableTable = ({ columns, tableData, anchored_Cell }) => {
  const [draggedColumn, setDraggedColumn] = useState(null);
  const [tableColumns, setTableColumns] = useState([...columns]);
  const [modalData, setModalData] = useState({});
  const [modal_table_data, set_modal_table_data] = useState(null);
  const [selectedCell, setSelectedCell] = useState('');

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
      <section className='p-3 flex justify-between'>
        <NewMonthFilter />
        <NewColumnFilter columns={columns} setTableColumns={setTableColumns} />
      </section>

      <div className="overflow-x-auto">

        <table className='table table-sm'>
          <thead>
            <tr className='bg-gray-800 text-white font-medium'>
              {tableColumns.map((column, i) => (
                <th
                  key={i}
                  draggable
                  onDragStart={(e) => { handleDragStart(e, column) }}
                  onDragOver={(e) => { handleDragOver(e, column) }}
                  onDrop={(e) => { handleDrop(e, column) }}
                  className='py-3 px-5 cursor-grab active:cursor-grabbing border border-gray-700 text-center'
                >
                  {column.content}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...tableData].map((row, i) => (
              // <TableRow key={i} rowData={row} />
              <tr key={i} className="text-center">
                {
                  [...tableColumns].map((cell, j) => {
                    // console.log({col:cell.title,cell:row[cell.title]});
                    // console.log(row[cell.title]);
                    return (
                      <td key={j}>
                        {
                          anchored_Cell[cell.title] ?
                            <>
                              <span className="font-medium text-blue-600 underline underline-offset-2 decoration-2 cursor-pointer" onClick={() => {
                                setModalData({rowData:row,anchored_Cell});
                                setSelectedCell(cell.title);
                                fetch('/modal-table-data.json').then(res => res.json()).then(data => set_modal_table_data(data));
                                document.getElementById(`my_modal_1`).showModal();
                              }}>{row[cell.title]}</span>
                              <NewModalTable modal_data={modalData} selectedCell={selectedCell} setSelectedCell={setSelectedCell} tableData={modal_table_data}/>
                            </>
                            :
                            <span className='font-medium text-gray-500'>{row[cell.title]}</span>
                        }

                      </td>)
                  })
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewDraggableTable;