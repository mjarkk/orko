import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import QueryState from '../../components/QueryState'

const QUERY = gql`
query getProject($id: String){
    project(id: $id) {
        name
        repo
    }
}`

export default function ProjectsProject() {
    const router = useRouter()
    const { id } = router.query
    const { data, loading, error } = useQuery(QUERY, { variables: { id }, skip: !id });

    const [nameEdit, setNameEdit] = useState({value: '', editing: false})

    const cantShowData = QueryState({loading, error, data})
    if (cantShowData) {
        return cantShowData;
    }

    const {project} = data
    return <div className="project">
        <h1>
            {nameEdit.editing
                ? <input
                    value={nameEdit.value}
                    onChange={e => setNameEdit(v => ({...v, value: e.target.value}) )}
                />
                : <span onClick={() => setNameEdit({value: project.name, editing: true})} className="editable">
                    {project.name || <span className="empty-name">No name given</span>}
                </span>
            }
        </h1>
        <p>{project.repo}</p>
        <style jsx>{`
            .project {
                padding: 20px;
            }
            .empty-name {
                color: gray;
            }
            .editable {
                cursor: pointer;
            }
        `}</style>
    </div>
}