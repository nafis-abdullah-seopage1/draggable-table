export const columns = [
    { 
        title: 'project_manager', 
        content: <>Project Manager</>
    },
    { 
        title: 'no_of_project', 
        content: <>No. of Projects <br /> <span className="highlight">{'(Minimum Ideal 18)'}</span> </> 
    },
    {
        title:'total_project_value',
        content: <>Total Project Value <br /> <span className="highlight">{'(Minimum Ideal 8000 USD)'}</span> </>
    },
    {
        title:'total_released_amount',
        content: <>Total Released Amount</>
    },
    {
        title: 'no_of_completed_project',
        content: <>No. of Fully Completed Project</>
    },
    {
        title: 'no_of_completed_project_without_authorization',
        content: <>No. of Completed Projects Without Authorization</>
    },
    {
        title: 'project_completion_rate',
        content: <>Project Completion Rate <br /><span className="highlight">{'(Minimum Ideal 85%)'}</span> </>
    },
    {
        title: 'project_completion_rate_without_authorization',
        content: <>Project Completion Rate <br /><span>{'(Without Authorization)'}</span> </>
    },
    {
        title: 'no_of_first_time_clients',
        content: <>No. of First Time Clients</>
    },
    {
        title: 'milestone_completion_rate',
        content: <>Milestone Completion Rate</>
    },
    {
        title: 'task_completion_rate',
        content: <>Task Completion Rate</>
    },
    {
        title: 'average_project_completion_time',
        content: <>Average Project Completion Time</>
    },
    {
        title: 'no_of_sale',
        content: <>No. of Upsale/Cross Sales</>
    },
    {
        title: 'value_of_sale',
        content: <>Value of Upsale/Cross Sales</>
    },
    {
        title: 'canceled_projects',
        content: <>Canceled Projects</>
    },
    {
        title: 'delayed_projects',
        content: <>Delayed Projects</>
    },
    {
        title: 'delayed_completed',
        content: <>Delayed Completed</>
    },
    {
        title: 'percentage_of_delayed_projects',
        content: <>Percentage of br Delayed Projects</>
    },
    {
        title: 'canelation_rate',
        content: <>Cancelation Rate</>
    },
    {
        title: 'avg_payment_rel_time',
        content: <>Avg. Payment Rel. Time</>
    }
]


export const anchored_Cell = {
    no_of_project : "no_of_project",
    total_project_value : "total_project_value",
    total_released_amount : "total_released_amount",
    no_of_completed_project : "no_of_completed_project",
    project_completion_rate : "project_completion_rate",
    milestone_completion_rate : "milestone_completion_rate",
    average_project_completion_time : "average_project_completion_time",
    no_of_sale : "no_of_sale",
    value_of_sale : "value_of_sale",
    canceled_projects : "canceled_projects",
    delayed_projects : "delayed_projects",
    delayed_completed : "delayed_completed"
}