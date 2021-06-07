import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return <div className="root">
		<style global jsx>{`
			body {
				background-color: #eee;
				font-family: sans-serif;
			}
			* {
				box-sizing: border-box;
				padding: 0px;
				margin: 0px;
			}
			h1 {
				margin-bottom: 10px;
			}
			p {
				color: gray;
			}
			input {
				border: 1px solid #ccc;
				border-radius: 5px;
				transition: border 0.1s;
			}
			input:focus {
				border: 1px solid rgb(100, 220, 100);
			}
			button {
				background-color: rgb(100, 230, 100);
				border: 0;
				border-radius: 5px;
				cursor: pointer;
				transition: background-color 0.1s;
				color: black
			}
			button:hover, button:focus {
				background-color: rgb(100, 240, 100);
			}
		`}</style>
		<Head>
			<title>Orko</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Component {...pageProps} />
	</div>
}
