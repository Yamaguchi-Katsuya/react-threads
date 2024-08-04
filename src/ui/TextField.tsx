import { ITextField } from "../lib/interface";

export default function TextField({ label, name, value, setValue }: ITextField): React.JSX.Element {
    return (
        <>
            <div className="grid grid-cols-5 gap-2 text-lg w-full">
                <label htmlFor={name} className="col-span-1">{label}</label>
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="rounded-md border border-solid border-black w-full col-span-4"
                    placeholder={`${label}を入力してください`}
                />
            </div>
        </>
    );
}
