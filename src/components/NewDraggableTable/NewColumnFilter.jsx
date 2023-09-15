import { useId } from "react";

export default function NewColumnFilter({ columns, setTableColumns }) {

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
}



const ColIndex = ({ col, i, setTableColumns }) => {
    const id = useId();
    // console.log(id);

    function handleCheckFilter(checked) {
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
            <label htmlFor={`filter-${id}`} className="cursor-pointer label justify-start gap-2">
                <input id={`filter-${id}`} name="checkbox" type="checkbox" defaultChecked className="checkbox" onChange={(e) => handleCheckFilter(e.target.checked)} />
                <span className="text-xs">{col.content}</span>
            </label>
        </li>
    )
}