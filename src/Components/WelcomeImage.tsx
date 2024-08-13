import styles from '../Styles/WelcomeImage.module.css';
interface ImageProps {
    src: string;
    alt: string;
}

export default function WelcomeImage({src, alt, children}: ImageProps & { children?: React.ReactNode }) {
    return (
        <div className={styles.imgDiv}>
            <img src={src} alt={alt} className={styles.wizard} />{children}
        </div>
    )
}