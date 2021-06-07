import styles from "./styles.module.css";

interface IHomeProps {
  imgURL: string;
  alt: string;
  title: string;
  content: string;
  style?: any;
}

export default function Section({
  imgURL,
  alt,
  title,
  content,
  style
}: IHomeProps) {
  return (
    <section className={styles.container} style={style}>
      <img src={imgURL} alt={alt} />

      <div className={styles.contentContainer}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}
