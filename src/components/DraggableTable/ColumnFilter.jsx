import { useEffect, useRef, useState } from "react"

export default function ColumnFilter({ columns, setTableColumns }) {
    const [colsList, setColsList] = useState(columns);

    useEffect(()=>{
        console.log(colsList);
        setTableColumns(colsList);
    },[colsList])

    return (
        <div className="p-3 flex justify-end">
            <details className="dropdown dropdown-end w-40">
                <summary className="m-1 btn btn-neutral btn-sm btn-outline">Select Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] flex-nowrap rounded bg-white border-2 w-52 space-y-1 max-h-[50vh] overflow-y-auto">
                    {
                        [...columns].map((col, i) => {
                            const [checked,setCheck] = useState(true);

                            useEffect(()=>{
                                if (checked) {
                                    // console.log(colsList[i]);
                                    if (colsList[i]?.title === col?.title) {
                                        console.log('exist');
                                        setCheck(prev=>prev);
                                    } else {
                                        console.log('not exist');
                                        const newList = [...colsList];
                                        setColsList(newList.splice(i,0,col));                              
                                    }
                                } else {
                                    setColsList(prev=>{
                                        const filteredList = [...prev].filter(c=>c.title!==col.title)
                                        return filteredList;
                                    })
                                }
                            },[checked])

                            return (
                                <li key={i} className="form-control">
                                    <label htmlFor={`filter-${i}`} className="cursor-pointer label justify-start gap-2">
                                        <input id={`filter-${i}`} name="checkbox" type="checkbox" className="checkbox" checked={checked} onChange={(e)=>setCheck(e.target.checked)}/>
                                        <span className="text-xs">{col.content}</span>
                                    </label>
                                </li>
                            )
                        })
                    }

                </ul>
            </details>
        </div>
    )
}