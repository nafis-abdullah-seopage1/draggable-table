const Header = ({project_count, project_value})=>{
    return (
        <div className="p-5 text-center text-lg">
            <h2>Total Project : {project_count}</h2>
            <h2>Total Project Value : ${project_value}</h2>
        </div>
    )
}

export default Header