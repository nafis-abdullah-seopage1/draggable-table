import { useEffect, useState } from "react";

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/table-data.json').then(res => res.json()).then(data => setData(data));
    }, [])


    return (<div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr className="bg-base-200 font-bold text-black text-center">
                    <th>Project Manager</th>
                    <th>No. of Projects <br /> <span className="font-normal text-red-600">{'(Minimum Ideal 18)'}</span> </th>
                    <th>Total Project Value <br /> <span className="font-normal text-red-600">{'(Minimum Ideal 8000 USD)'}</span> </th>
                    <th>Total Released Amount</th>
                    <th>No. of <br /> Fully Completed Project</th>
                    <th>No. of Completed Projects <br />Without Authorization</th>
                    <th>Project Completion Rate <br /> <span className="font-normal text-red-600">{'(Minimum Ideal 85%)'}</span> </th>
                    <th>Project Completion Rate <br /> <span>{'(Without Authorization)'}</span> </th>
                    <th>No. of First Time Clients</th>
                    <th>Milestone Completion Rate</th>
                    <th>Task Completion Rate</th>
                    <th>Average Project Completion Time</th>
                    <th>No. of Upsale/Cross Sales</th>
                    <th>Value of Upsale/Cross Sales</th>
                    <th>Canceled Projects</th>
                    <th>Delayed Projects</th>
                    <th>Delayed Completed</th>
                    <th>Percentage of br Delayed Projects</th>
                    <th>Cancelation Rate</th>
                    <th>Avg. Payment Rel. Time</th>
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