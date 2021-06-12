import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import QueryState from '../../components/QueryState'
import EditableH1 from '../../components/EditableH1'

const FetchProjectQuery = gql`
query getProject($id: String){
    project(id: $id) {
        name
        repo
    }
}`

const UpdateProjectQuery = gql`
mutation updateProject($id: String) {
    updateProject(id: $id) { name }
}
`

export default function ProjectsProject() {
    const router = useRouter()
    const { id } = router.query
    const { data, loading, error } = useQuery(FetchProjectQuery, { variables: { id }, skip: !id })
    const cantShowData = QueryState({ loading, error, data })
    if (cantShowData) {
        return cantShowData
    }

    const { project } = data
    return <div className="project">
        <EditableH1 value={project.name} save={v => console.log('todo', v)} placeholder="Project name">
            {project.name || <span className="empty-name">No name given</span>}
        </EditableH1>
        <p>{project.repo}</p>
        <style jsx>{`
            .project {
                padding: 20px;
            }
            .empty-name {
                color: gray;
            }
        `}</style>
    </div>
}
