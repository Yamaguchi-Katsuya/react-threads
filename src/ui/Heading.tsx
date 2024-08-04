export default function Heading({ heading }: { heading: string }): React.JSX.Element {
    return (
        <>
            <h2 className="text-3xl font-bold">{heading}</h2>
        </>
    );
}
