import { useEffect, useState } from 'react';

import CardRecipe from '../../components/CardRecipe/CardRecipe'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'

import { useIsOpen } from '../../hooks/useIsOpen';
import { api } from '../../services/api'

import styles from './styles.module.css';

interface IRegistroObjectTypes {
  name: string,
  _id: string,
  description: string,
  ingredients: Array<string>
}



export function RecipeType() {
  const { isOpen, setIsOpen, resetIsOpen } = useIsOpen()
  useEffect(() =>{
    resetIsOpen();
  },[])

  const [ registroList, setRegistroList ] = useState<[]>([])  
    
    const handleGetData = async () => {
      const { data } = await api.get("/register");
      const { registro } = data;

      setRegistroList(registro);
    }

    useEffect(() => { handleGetData() }, [])
    
    

  return(
      <div className={styles.mainContainer}>
        <>
          {isOpen && <SideBar closeSideBar={()=>{setIsOpen(!isOpen)}}/> }
        </>
        <Header openFunction={()=>{setIsOpen(!isOpen)}}/>
        
        <main>
          {registroList.map((registro: IRegistroObjectTypes)=>{
            return(
              <CardRecipe title={registro.name} description={registro.description}/>
            )
            
          })}
        </main>
      </div>
 
    
  )
}