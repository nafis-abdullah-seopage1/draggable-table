import useFetchData from "../../hooks/useFetchData";
import { modal_table_columns } from "../../utils/modal-table-utils";
import Header from "../Header";
import DraggableTable from "./DraggableTable";

export default function ModalTable({ modal_data: { rowData, anchored_Cell },selectedCell,setSelectedCell }) {
    const [tableData] = useFetchData('/modal-table-data.json')

    return (
        <dialog id={`my_modal_1`} className="modal bg-slate-950/20 p-5">
            <div className="modal-box rounded h-full w-full max-w-none max-h-none relative">
                <button onClick={() => document.getElementById('my_modal_1').close()} className="btn btn-sm border-none btn-circle btn-outline flex items-center justify-center absolute top-5 right-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <Header project_manager={rowData?.project_manager} project_count={rowData?.no_of_project} project_value={rowData?.total_project_value} />

                <div className="flex gap-3 flex-wrap w-full justify-center">
                    {
                        Object.keys(rowData || {}).filter((data) => anchored_Cell[data]).map((data,i) => <button key={i} onClick={()=>setSelectedCell(data)} className={`btn btn-outline btn-primary rounded btn-sm basis-60 grow shrink ${selectedCell===data && 'btn-active'}`}>{data.split('_').join(' ')}</button>)
                    }
                </div>

                <DraggableTable anchored_Cell={{}} columns={modal_table_columns} tableData={tableData} />
            </div>
        </dialog>
    )
}