import { Button } from "react-bootstrap";
import { modal_table_columns } from "../../utils/modal-table-utils";
import Header from "../Header";
import NewDraggableTable from "./NewDraggableTable";
import style from "./styles/modalTable.module.css";
import { useEffect, useState } from "react";

export default function NewModalTable({
    modal_data: { rowData, anchored_Cell },
    selectedCell,
    setSelectedCell,
    handleClose,
}) {
    // const [tableData] = useFetchData('/modal-table-data.json');
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        fetch("/modal-table-data.json")
            .then((res) => res.json())
            .then((data) => setTableData(data));
    }, []);


    const handleSpecifiedBtns = (dataObj) => {
        const sepecifiedBtnsData = Object.entries(dataObj).filter((data) => {
            return anchored_Cell[data[0]];
        });
        return [...sepecifiedBtnsData];
    };

    return (
        <div className={`d-flex ${style.modal_container}`}>
            <div className={style.modal_box} style={{ position: "relative" }}>
                <div
                    style={{
                        position: "sticky",
                        top: "10px",
                        paddingRight: "10px",
                        display: "flex",
                        justifyContent: "end",
                        zIndex:'999'
                    }}
                >
                    <button
                        onClick={handleClose}
                        style={{
                            height:'2rem',
                            width: '2rem',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius: '50%',
                            border:'solid 2px red',
                            fontWeight:'bold',
                            backgroundColor:'white',
                            transform:'scale(1.2)'
                        }}>
                        X
                    </button>
                </div>
                <section>
                    <Header
                        project_manager={rowData?.project_manager}
                        project_count={rowData?.no_of_project}
                        project_value={rowData?.total_project_value}
                    />

                    <div className={style.specified_columns_container}>
                        {handleSpecifiedBtns(rowData).map((data, i) => {
                            return (
                                <Button
                                    key={i}
                                    variant={`${
                                        selectedCell === data[0]
                                            ? "danger"
                                            : "light"
                                    }`}
                                    onClick={() => setSelectedCell(data[0])}
                                >
                                    {data[0].split("_").join(" ")}
                                    <br />
                                    <span
                                        className={`${selectedCell === data[0]?style.black:'text-danger'}`}
                                        style={{fontSize:'15px',textDecoration:'underline'}}
                                    >
                                        {data[1]}
                                    </span>
                                </Button>
                            );
                        })}
                    </div>

                    <NewDraggableTable
                        anchored_Cell={{}}
                        columns={modal_table_columns}
                        tableData={tableData || []}
                    />
                </section>
            </div>
        </div>
    );
}
