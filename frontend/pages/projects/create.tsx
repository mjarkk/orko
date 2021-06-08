import SetupModal from '../../components/SetupModal'
import Loader from '../../components/Loading'
import { ArrowRight, GitBranch } from 'react-feather'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PROJECT = gql`
  mutation CreateProject($repo: String!) {
    createProject(repo: $repo) {
      ID
    }
  }
`;

export default function ProjectsCreate() {
	const router = useRouter()
	const [repoUrl, setRepoUrl] = useState('')
	const [loading, setLoading] = useState(false)
	const [setupPage, setPage] = useState(0)
	const [createProjectReq] = useMutation(CREATE_PROJECT)

	const createProject = async () => {
		setLoading(true)
		try {
			const {data} = await createProjectReq({ variables: { repo: repoUrl } })
			const id = data?.createProject?.ID
			if (id) {
				router.push('/projects/' + id)
			}
		} catch (e) {
			// TODO show error to user
			console.log(e)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			<SetupModal page={setupPage}>{[
				<div key="1">
					<h1>Create a project</h1>
					<p>Every app is deployed as a project, start here to create one</p>
					<div className="actions">
						<button onClick={() => setPage(1)}><GitBranch /> From git repo <ArrowRight /></button>
					</div>
				</div>,
				<div key="2">
					<h1>Git repo</h1>
					{loading
						? <Loader />
						: <div className="inputAndAction">
							<input autoFocus value={repoUrl} onChange={e => setRepoUrl(e.target.value)} placeholder="Repo URL" />
							<button onClick={createProject}>Setup <ArrowRight /></button>
						</div>
					}
				</div>
			]}</SetupModal>
			<style jsx>{`
				.actions {
					padding: 20px 20px 0 20px;
				}
				.actions > button {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 8px 15px;
					width: 100%;
					font-size: 16px;
				}
				.inputAndAction {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.inputAndAction input, .inputAndAction button {
					font-size: 16px;
					padding: 5px 10px;
				}
				.inputAndAction button {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.inputAndAction input {
					flex-grow: 1;
					margin-right: 10px;
				}
			`}</style>
		</div>
	)
}
