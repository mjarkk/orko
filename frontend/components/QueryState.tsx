export default function QueryState({data, loading, error}) {
    if (error) return <div>Error: {error.toString()}</div>
    else if (!data || loading) return <div>Loading...</div>
}