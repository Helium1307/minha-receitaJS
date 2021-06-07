import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface IHeaderProps {
  openFunction: any;
}

export default function Header({ openFunction }: IHeaderProps) {
  

  return (
    <header>
      <div className={styles.container}>
        <TiThMenu className={styles.icon} onClick={()=>{openFunction()}} />
        <span>
          <Link to="/">Minha Receita</Link>
        </span>
      </div>
    </header>
  );
}
