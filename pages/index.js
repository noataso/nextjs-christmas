import Link from "next/link";
import styles from "../styles/christmas.module.css"
const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link href="/christmas">
                    <p className={styles.title}>christmas</p>
                </Link>
            </div>
        </div>
    );
}

export default index;