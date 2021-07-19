import styles from './styles.module.css';

interface ICardRecipeProps {
  title: string,
  description: string
}

export default function CardRecipe({title, description}: ICardRecipeProps) {
  return (
    <div className={styles.cardContainer}>
      <img src="github.com/Helium1307.png" alt="Foto da receita" />
      <div className={styles.content}>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </div>
  );
}