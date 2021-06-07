import SetupModal from '../../components/SetupModal'
import { ArrowRight, GitBranch } from 'react-feather'
import { useState } from 'react'

export default function CreateProject() {
	const [repoUrl, setRepoUrl] = useState('');
	const [setupPage, setPage] = useState(0);

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
					<div className="inputAndAction">
						<input value={repoUrl} onChange={e => setRepoUrl(e.target.value)} placeholder="Repo URL" />
						<button>Setup <ArrowRight /></button>
					</div>
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
