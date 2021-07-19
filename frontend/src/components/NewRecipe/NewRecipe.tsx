import { useEffect, useState } from 'react';

import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar';

import styles from './styles.module.css';

import { AiOutlineEnter } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'

import { useIsOpen } from '../../hooks/useIsOpen';

import { api } from '../../services/api';
import { FormEvent } from 'react';

interface IRegistrationFormData {
  name: string,
  description: string,
}

export function NewRecipe() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  let [ingredient, setIngredient] = useState('')
  let [ingredientsList, setIngredientsList] = useState<Array<string>>([])
  const { isOpen, setIsOpen, resetIsOpen } = useIsOpen()

  // const { register , handleSubmit} = useForm();
  // const onSubmit = (data: IRegistrationFormData) =>{ console.log(data) }
 

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleRemoveIngredient(item: string, id: number) {
    setIngredientsList(
      ingredientsList.filter((ingredient) => ingredientsList.indexOf(ingredient) !== id )
    ) 
  }

  async function handlePost() {
    await api.post('/register', { 
      name: name, 
      description: description, 
      ingredients: ingredientsList  
    });
    console.log(name, description, ingredientsList);
  }

  //Reseta o isOpen do context 
  useEffect(() =>{
    resetIsOpen();
  },[])
 
  

  return (
    <>
      {isOpen && <SideBar closeSideBar={()=>{setIsOpen(!isOpen)}}/> }
      <Header openFunction={()=>{setIsOpen(!isOpen)}}/>
      
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <span className={styles.titleForm}>Adicione uma receita</span>
          
          <form  
            className={styles.formRegister}
            onSubmit={(event)=>{handleSubmit(event)}}
          >
            <div className={styles.alignItens}>
              <label>Digite o nome da receita *</label>
              <input 
                onChange={(e)=>{ setName(e.target.value) }}
                
                placeholder="Ex: Galinha Cabidela"
              />
            </div>
            <div className={styles.alignItens}>
              <label>Digite uma descrição</label>
              <input 
                type="text"
                placeholder="Ex: Receita da família, feita pela vovó"
                onChange={(e)=>{ setDescription(e.target.value) }}
              />
            </div>
            <div className={styles.alignItens}>
              <label>Digite os ingredientes *</label>
              <input 
                required
                type="text" 
                placeholder="Ex: 200g de Frango"
                value={ingredient}
                onChange={(e)=>{setIngredient(e.target.value)}}
                onKeyDown={(key)=>{
                  if(key.key === "Enter"){
                    key.preventDefault();
                    setIngredientsList([...ingredientsList, ingredient])
                  }
                }}
              />
              <div> <p>Pressione Enter para salvar <AiOutlineEnter/></p> </div>
            </div>

            <ul className={styles.listItems}>
               {ingredientsList.map((ingredient, index) => {
                 return (
                 <li key={index}> 
                  {ingredient} 
                  <button 
                    type="button"
                    className={styles.deleteIngredient}
                    onClick={()=>{ handleRemoveIngredient(ingredient,index) }}
                  >
                    <CgClose/>
                  </button>
                </li>)
                  
               })}
            </ul>
            <button 
              type="submit"
              className={styles.submitButton}
              onClick={()=>{ handlePost() }}
            >
                Adicionar</button>
          </form>
        </div>
      </div>

    </>
  );
}