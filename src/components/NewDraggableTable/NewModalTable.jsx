import { Button } from "react-bootstrap";
import useFetchData from "../../hooks/useFetchData";
import { modal_table_columns } from "../../utils/modal-table-utils";
import Header from "../Header";
import NewDraggableTable from "./NewDraggableTable";
import style from './styles/modalTable.module.css';
import { useEffect, useState } from "react";

export default function NewModalTable({ modal_data: { rowData, anchored_Cell }, selectedCell, setSelectedCell, handleClose }) {
    // const [tableData] = useFetchData('/modal-table-data.json');
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        fetch('/modal-table-data.json').then(res => res.json()).then(data => setTableData(data));
    }, []);

    // console.log(tableData);

    return (
        <div
            className={`d-flex ${style.modal_container}`}
        >
            <div className={style.modal_box} style={{ position: "relative"}}>
                <div style={{ position: 'sticky',top:'10px',paddingRight:'10px',display:"flex",justifyContent:'end'}}>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >X</Button>
                </div>
                <section>

                    <Header project_manager={rowData?.project_manager} project_count={rowData?.no_of_project} project_value={rowData?.total_project_value} />

                    <div className={style.specified_columns_container}>
                        {
                            Object.keys(rowData || {}).filter((data) => anchored_Cell[data]).map((data, i) => <Button key={i} variant={`${selectedCell === data ? 'primary' : 'outline-primary'}`} onClick={() => setSelectedCell(data)}>
                                {data.split('_').join(' ')}
                            </Button>)
                        }
                    </div>

                    <NewDraggableTable anchored_Cell={{}} columns={modal_table_columns} tableData={tableData || []} />

                </section>
            </div>
        </div>
    )
}