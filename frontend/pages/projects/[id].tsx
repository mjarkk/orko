import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const QUERY = gql`
query getProject($id: string){
    project(id: $id) {
        name
    }
}`

export function ProjectsProject() {
    const router = useRouter()
    const { id } = router.query
    const { data, loading, error } = useQuery(QUERY, { variables: { id }, skip: !id });

    return <div>
        <pre>{JSON.stringify({ data, loading, error }, null, 4)}</pre>
    </div>
}
