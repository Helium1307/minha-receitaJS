import { Link } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs'
import styles from './styles.module.css';
import { useState } from 'react';
import NewRecipe from '../NewRecipe/NewRecipe';


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
            <li><Link to="/">Carnes</Link></li>
            <li><Link to="/">Bebidas</Link></li>
            <li><Link to="/">Sobremesas</Link></li>
            <li><Link to="/">Vegetariano</Link></li>
          </ul>

          <Link to="/register/new-recipe" className={styles.link} ><BsPlusCircle/> Adicionar receita</Link>
        </nav>
    </>
  );
}