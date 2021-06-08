import styles from "./styles.module.css";

import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SideBar from '../../components/SideBar/SideBar'


import { useState } from "react"
import NewRecipe from "../../components/NewRecipe/NewRecipe";

export default function Home() {

  let [isOpen, setIsOpen] = useState<Boolean>(false);
  
  return (
    <div className={styles.container}>
      <>
        {isOpen && <SideBar closeSideBar={()=>{setIsOpen(!isOpen)}}/> }
      </>
      <Header openFunction={()=>{setIsOpen(!isOpen)}}/>
      <main>
        <Section
          imgURL="https://img.elo7.com.br/product/original/2B6D08E/livro-de-receita-inspirapano-feat-mok-atelie-unidade.jpg"
          alt="Livro de Receita"
          title="Guarde suas receitas"
          content="Nessa plataforma, você poderá guardar suas receitas favoritas e acessá-las quando e onde quiser."
        />

        <div className={styles.redline}></div>

        <Section
          imgURL="https://i2.wp.com/www.buenasdicas.com/wp-content/uploads/2020/01/comidas-tipicas-eua-macncheese.jpg?fit=900%2C675&ssl=1"
          alt="Comidas"
          title="Guarde suas receitas"
          content="Nessa plataforma, você poderá guardar suas receitas favoritas e acessá-las quando e onde quiser."
        />
      </main>

      
    </div>
  );
}
