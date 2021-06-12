import { gql, useMutation, useQuery } from "@apollo/client"
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
mutation updateProject($id: String $name: String) {
    updateProject(id: $id, name: $name) { name }
}
`

export default function ProjectsProject() {
    const router = useRouter()
    const { id } = router.query
    const variables = { id }
    const { data, loading, error, refetch } = useQuery(FetchProjectQuery, { variables, skip: !id })
    const cantShowData = QueryState({ loading, error, data })
    const [updateProjectReq] = useMutation(UpdateProjectQuery)

    if (cantShowData) {
        return cantShowData
    }

    const saveNewName = async (name: string) => {
        await updateProjectReq({variables: {id, name}})
        await refetch(variables)
    }

    const { project } = data
    return <div className="project">
        <EditableH1 value={project.name} save={newName => saveNewName(newName)} placeholder="Project name">
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
