import styles from './styles.module.css';
import Header from '../Header/Header'
import Input from '../Input/Input';
import { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { stringify } from 'querystring';

interface INewRecipeProps {
  closeRegisterForm: any;
}
export default function NewRecipe({ closeRegisterForm }: INewRecipeProps) {
  
  let [isOpen, setIsOpen] = useState<Boolean>(false);

  let [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [""],
  });
  
  let [enter, setEnter] = useState(false)
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [ingredients, setIngredients] = useState("");

  // Iniciando o splice direto pra não ficar valores atrasados do state
  useEffect(()=>{
    recipe.ingredients.splice(0, 1);
  })
  
  useEffect(()=>{
    setRecipe({
      name: name,
      description: description,
      ingredients: [...recipe.ingredients, ingredients]
    })
  }, [enter])
  return (
    <>
      {isOpen && <SideBar closeSideBar={()=>{setIsOpen(!isOpen)}}/> }
      <Header openFunction={()=>{setIsOpen(!isOpen)}}/>
      
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <span className={styles.titleForm}>Adicione uma receita</span>
          
          <form action="" 
            className={styles.formRegister}
            onSubmit={e =>{
              e.preventDefault();
              
            }}
          >
            <div className={styles.alignItens}>
              <label>Digite o nome da receita *</label>
              <input 
                required type="text" 
                value={name} 
                onChange={e => setName(e.target.value )}
                placeholder="Ex: Galinha Cabidela"
              />
            </div>
            <div className={styles.alignItens}>
              <label>Digite uma descrição</label>
              <input type="text" 
                value={description} 
                onChange={(e)=>{setDescription(e.target.value)}} 
                placeholder="Ex: Receita da família, feita pela vovó"
              />
            </div>
            <div className={styles.alignItens}>
              <label>Digite os ingredientes *</label>
              <input 
                required type="text" 
                value={ingredients} 
                onChange={(e)=>{setIngredients(e.target.value)}} 
                placeholder="Ex: 200g de Frango" 
                onKeyDown={(e)=>{
                  if(e.key === "Enter"){
                    setEnter(!enter);
                  }
                }}
              />
            </div>

            <ul className={styles.listItems}>
               {
                  recipe.ingredients.map((ingredients, index) => {
                    return <li key={index}>{ingredients}</li>
                  })
                }
            </ul>
            <button type="submit">Adicionar</button>
          </form>
        
        </div>
      </div>

    </>
  );
}