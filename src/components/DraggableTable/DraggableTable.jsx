import React, { useCallback, useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import ColumnFilter from './ColumnFilter';

const DraggableTable = ({ columns }) => {
  const [draggedColumn, setDraggedColumn] = useState(null);
  const [tableColumns, setTableColumns] = useState([...columns]);
  const [tableData, setTableData] = useFetchData();

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


  const getData = useCallback((data)=>{
    return [...data];
  },[tableColumns])

  return (
    <>
      <ColumnFilter columns={columns} setTableColumns={setTableColumns} />

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
                  className='py-5 px-8 cursor-grab active:cursor-grabbing border border-gray-700 text-center'
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
                  [...tableColumns].map((cell, i) => {
                    // console.log({col:cell.title,cell:row[cell.title]});
                    // console.log(row[cell.title]);
                    return <td key={i}>{row[cell.title]}</td>
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

export default DraggableTable;
