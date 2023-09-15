import React from 'react';

const NewColumnFilter = ({ columns, setTableColumns }) => {
    return (
        <details className="dropdown dropdown-end">
            <summary className="m-1 btn btn-neutral btn-sm btn-outline rounded">Select Column</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] flex-nowrap rounded bg-white border-2 w-52 space-y-1 max-h-[50vh] overflow-y-auto">
                {
                    [...columns].map((col, i) => <ColIndex key={i} col={col} i={i} setTableColumns={setTableColumns} />)
                }

            </ul>
        </details>
    )
};

export default NewColumnFilter;