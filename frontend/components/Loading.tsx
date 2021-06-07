export default function Loading() {
    return <div className="loading">
        <div />
        <div />
        <div />

        <style jsx>{`
            .loading {
                display: inline-block;
                min-width: 30px;
                max-width: 30px;
                min-height: 20px;
                max-height: 20px;
                margin: 5px;
            }
            .loading > div {
                display: inline-block;
                height: 6px;
                width: 6px;
                margin: 2px;
                border-radius: 100%;
                background-color: black;
                animation-name: loadingAnimation;
                animation-duration: 1.5s;
                animation-iteration-count: infinite;
            }
            .loading > div:nth-child(2) {
                animation-delay: 0.1s;
            }
            .loading > div:nth-child(3) {
                animation-delay: 0.2s;
            }
            @keyframes loadingAnimation {
                5%   {transform: translate(0, 0px)}
                45%  {transform: translate(0, 10px)}
                55%  {transform: translate(0, 10px)}
                95% {transform: translate(0, 0px)}
            }
        `}</style>
    </div>
}
