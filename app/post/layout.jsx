import { Counter } from "./Counter";
export default function PostLayout({ children }) {
    return (
        <div>
            <Counter />
            <div>{children}</div>
        </div>
    );
}
