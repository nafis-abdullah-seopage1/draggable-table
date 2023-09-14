import { useEffect, useRef, useState } from "react"
import { columns } from "./table-utils";

export default function ColumnFilter({ columns, setTableColumns }) {

    return (
        <div className="p-3 flex justify-end">
            <details className="dropdown dropdown-end w-40">
                <summary className="m-1 btn btn-neutral btn-sm btn-outline">Select Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] flex-nowrap rounded bg-white border-2 w-52 space-y-1 max-h-[50vh] overflow-y-auto">
                    {
                        [...columns].map((col, i) => <ColIndex key={i} col={col} i={i} setTableColumns={setTableColumns} />)
                    }

                </ul>
            </details>
        </div>
    )
}



const ColIndex = ({ col, i, setTableColumns }) => {

    function handleCheckFilter(checked){
        // console.log(checked);
        if (checked) {
            setTableColumns((prev) => {
                const newList = [...prev, col];
                newList.splice(i, 0, col);
                newList.pop();
                return newList;
            });
        } else {
            setTableColumns(prev => {
                const filteredList = [...prev].filter(c => c.title !== col.title)
                return filteredList;
            })
        }
    }

    return (
        <li key={i} className="form-control">
            <label htmlFor={`filter-${i}`} className="cursor-pointer label justify-start gap-2">
                <input id={`filter-${i}`} name="checkbox" type="checkbox" defaultChecked className="checkbox" onChange={(e) => handleCheckFilter(e.target.checked)} />
                <span className="text-xs">{col.content}</span>
            </label>
        </li>
    )
}