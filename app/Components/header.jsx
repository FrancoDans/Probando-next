import Link from "next/link";
import styles from "./header.module.css";
const links = [
    {
        label: "INICIO",
        route: "/",
    },
    {
        label: "CARGADORES",
        route: "/about",
    },
    {
        label: "AURICULARES",
        route: "/post",
    },
];

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navigation}>
                        {links.map(({ label, route }) => (
                            <li key={route}>
                                <Link className={styles.links} href={route}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
}
