export default function ErrorMessage({ message }: { message: string }): React.JSX.Element {
    return (
        <>
            {message &&
                <p className="text-base text-red-600">{message}</p>
            }
        </>
    );
}
