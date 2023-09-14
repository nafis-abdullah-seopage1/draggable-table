const Header = ({project_manager, project_count, project_value})=>{
    return (
        <div className="px-5 py-8 text-center text-lg space-y-2">
            {project_manager && <h2 className="font-bold text-gray-800 text-2xl">Total Project : <span className="text-red-400">{project_manager}</span></h2>}
            <h2 className="font-bold text-gray-800 text-2xl">Total Project : <span className="text-red-400">{project_count}</span></h2>
            <h2 className="font-bold text-gray-800 text-2xl">Total Project Value : $<span className="text-red-400">{project_value?.split('$')[1]}</span></h2>
        </div>
    )
}

export default Header