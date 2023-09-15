import { useId } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function NewColumnFilter({ columns, setTableColumns }) {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Select Month
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <div style={{ maxHeight: '50vh', overflowY: 'auto', maxWidth: '20rem', width: '100%' }}>
                    {
                        [...columns].map((col, i) => <ColIndex key={i} col={col} i={i} setTableColumns={setTableColumns} />)
                    }
                </div>
            </Dropdown.Menu>
        </Dropdown>
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
        <div>
            {i > 0 && <Dropdown.Divider />}
            <Dropdown.Item>
                <label htmlFor={`filter-${id}`} className="d-inline-flex justify-content-start align-items-center" style={{ cursor: 'pointer', gap: '1rem' }}>
                    <input id={`filter-${id}`} name="checkbox" type="checkbox" defaultChecked className="checkbox" onChange={(e) => handleCheckFilter(e.target.checked)} />
                    <span className="text-xs">{col.content}</span>
                </label>
            </Dropdown.Item>
        </div>
    )
}