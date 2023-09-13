import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const DraggableTable = ({ columns, data }) => {
  const [draggedColumn, setDraggedColumn] = useState(null);
  const [tableColumns, setTableColumns] = useState(columns);
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleDragStart = (e, column) => {
    e.dataTransfer.setData('text/plain', column);
    setDraggedColumn(column);
  };

  const handleDragOver = (e, column) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    if (draggedColumn !== targetColumn) {
      const updatedColumns = [...tableColumns];
      const draggedIndex = tableColumns.indexOf(draggedColumn);
      const targetIndex = tableColumns.indexOf(targetColumn);
      updatedColumns.splice(draggedIndex, 1);
      updatedColumns.splice(targetIndex, 0, draggedColumn);

      // Reorder the data columns accordingly
      const updatedData = tableData.map((row) => {
        const newRow = {};
        updatedColumns.forEach((col) => (newRow[col] = row[col]));
        return newRow;
      });

      // Update the state with the new column order and data
      setTableColumns(updatedColumns);
      setTableData(updatedData);
    }
    setDraggedColumn(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className='table table-sm'>
        <thead>
          <tr className='bg-gray-800 text-white font-medium'>
            {tableColumns.map((column, i) => (
              <th
                key={i}
                draggable
                onDragStart={(e) => handleDragStart(e, column)}
                onDragOver={(e) => handleDragOver(e, column)}
                onDrop={(e) => handleDrop(e, column)}
                className='py-5 px-8'
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <TableRow rowData={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DraggableTable;
