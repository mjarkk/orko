import { gql, useQuery } from "@apollo/client";

const QUERY = gql`{
    projects {
        ID
        name
    }
}`

export default function Projects() {
    const { data, loading, error } = useQuery(QUERY);

    return <div>
        <h2>Loading</h2>
        <pre>{JSON.stringify(loading, null, 4)}</pre>

        <h2>Error</h2>
        <pre>{JSON.stringify(error, null, 4)}</pre>

        <h2>Data</h2>
        <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
}
