import { Link } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs'
import styles from './styles.module.css';


interface ISideBarProps {
  closeSideBar: any;
}

export default function SideBar ({ closeSideBar }: ISideBarProps) {
  
  
  return (
    <>
      <div className={styles.container} onClick={()=>{closeSideBar()}}>
        
      </div>
     
      
      <nav className={styles.sidebar}>
          <span>Minhas Receitas</span>
          
          <ul>
            <li><Link to="/recipes">Carnes</Link></li>
            <li><Link to="/recipes">Bebidas</Link></li>
            <li><Link to="/recipes">Sobremesas</Link></li>
            <li><Link to="/recipes">Vegetariano</Link></li>
          </ul>

          <Link to="/register/new-recipe" className={styles.link} ><BsPlusCircle/> Adicionar receita</Link>
        </nav>
    </>
  );
}