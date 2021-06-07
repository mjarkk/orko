import { ReactNode } from "react";

interface Args {
    children: ReactNode[]
    page: number
}

export default function SetupModal({ children, page }: Args) {
    return <div className="root">
        <style jsx>{`
            .root {
                height: 100vh;
                width: 100vw;
                padding: 40px 20px;
                display: fixed;
                justify-content: center;
                align-items: end;
                top: 0;
                left: 0;
            }
            .root > div {
                max-height: 500px;
                width: 100%;
                max-width: 600px;
                background-color: #fff;
                border-radius: 40px;
                padding: 40px 20px;
                text-align: center;
                box-shadow: 0 10px 70px -10px rgba(0, 0, 0, 0.15);
            }
        `}</style>
        <div>{children[page]}</div>
    </div>
}
