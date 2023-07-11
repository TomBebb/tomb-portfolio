export interface HeroProps {
    title: string

    children: JSX.Element | JSX.Element[] | string
    className?: string
}
export default function Hero(props: HeroProps) {

    return <div
        className={"hero w-full h-full "+props.className}
    >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                    {props.title}
                </h1>
                {props.children}
            </div>
        </div>
    </div>
}