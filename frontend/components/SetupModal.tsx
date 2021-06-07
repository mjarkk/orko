import { ReactNode } from "react";

interface Args {
    children: ReactNode[]
    page: number
}

export default function SetupModal({ children, page }: Args) {
    return <div className="root">
        <style jsx>{`
            .root {
                padding: 40px 20px;
                position: fixed;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
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
