
const Table = ({columns,data}) => {

    return (<div className="overflow-x-auto">
        <table className="table column-border-table">
            {/* head */}
            <thead>
                <tr className="bg-base-200 font-bold text-black text-center border-l-2">
                    {columns.map((col,i)=>{
                        <th key={i}>{col}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {/* row */}
                {
                    data.map(({ _id,
                        project_manager,
                        no_of_project,
                        total_project_value,
                        total_released_amount,
                        no_of_completed_project,
                        no_of_completed_project_without_authorization,
                        project_completion_rate,
                        project_completion_rate_without_authorization,
                        no_of_first_time_clients,
                        milestone_completion_rate,
                        task_completion_rate,
                        average_project_completion_time,
                        no_of_upsale,
                        no_of_cross_sale,
                        value_of_upsale,
                        value_of_cross_sale,
                        canceled_projects,
                        delayed_projects,
                        delayed_completed,
                        percentage_of_delayed_projects,
                        canelation_rate,
                        avg_payment_rel_time }) => {
                        return (
                            <tr key={_id} className="text-center">
                                <td className="text-left">{project_manager}</td>
                                <td>{no_of_project}</td>
                                <td>${total_project_value}</td>
                                <td>${total_released_amount}</td>
                                <td>{no_of_completed_project}</td>
                                <td>{no_of_completed_project_without_authorization}</td>
                                <td>{project_completion_rate}%</td>
                                <td>{project_completion_rate_without_authorization}%</td>
                                <td>{no_of_first_time_clients}</td>
                                <td>{milestone_completion_rate}%</td>
                                <td>{task_completion_rate}%</td>
                                <td>{average_project_completion_time}</td>
                                <td>{`${no_of_upsale}${no_of_cross_sale && '/'}${no_of_cross_sale}`}</td>
                                <td>{`$${value_of_upsale}${value_of_cross_sale && '/$'}${value_of_cross_sale}`}</td>
                                <td>{canceled_projects}</td>
                                <td>{delayed_projects}</td>
                                <td>{delayed_completed}</td>
                                <td>{percentage_of_delayed_projects}%</td>
                                <td>{canelation_rate}%</td>
                                <td>{avg_payment_rel_time}/Day</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>)
}

export default Table;