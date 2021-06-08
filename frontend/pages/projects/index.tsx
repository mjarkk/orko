import Link from 'next/link'
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`{
    projects {
        ID
        repo
        name
    }
}`

export default function Projects() {
    const { data, loading, error } = useQuery(QUERY);
    
    if (loading) {
        return <div>Loading..</div>
    }

    if (error) {
        return <div>Error: {error.toString()}</div>
    }
    
    return <div className="projects">
        {data.projects.map(project => 
            <Link href={`/projects/${project.ID}`} key={project.ID}>
                <a className="project">
                    <h3>{project.name}</h3>
                    <p>{project.repo}</p>
                </a>
            </Link>
        )}
        <p className="noProjectsYet"><b>No projects, <Link href="/projects/create"><a>create one</a></Link></b></p>
        <style jsx>{`
            .projects {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
            .project {
                display: block;
                padding: 10px;
                background-color: white;
                margin: 10px;
                box-shadow: 0 5px 40px -5px rgba(0,0,0,0.3);
                border-radius: 5px;
                width: 400px;
                height: 100px;
                overflow: hidden;
            }
            .noProjectsYet {
                padding: 20px;
                width: 100%;
                text-align: center;
            }
            .noProjectsYet a {
                display: inline-block;
                padding: 5px 10px;
                background-color: transparent;
                transition: background-color 0.1s;
                border-radius: 5px;
            }
            .noProjectsYet a:hover {
                background-color: white;
            }
        `}</style>
    </div>
}
