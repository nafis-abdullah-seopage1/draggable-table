const Header = ({project_manager, project_count, project_value})=>{
    return (
        <div className="text-center pt-5 pb-2">
            {project_manager && <h2 className="font-weight-bold text-dark">Total Project : <span className="text-danger">{project_manager}</span></h2>}
            <h2 className="font-weight-bold text-dark">Total Project : <span className="text-danger">{project_count}</span></h2>
            <h2 className="font-weight-bold text-dark">Total Project Value : $<span className="text-danger">{project_value?.split('$')[1]}</span></h2>
        </div>
    )
}

export default Header