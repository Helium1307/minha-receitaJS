import { useEffect, useState } from 'react';
import CardRecipe from '../../components/CardRecipe/CardRecipe'
import { api } from '../../services/api'

interface IRegistroObjectTypes {
  name: string,
  _id: string,
  __v: number,
  description: string,
  ingredients: Array<string>
}



export function RecipeType() {
 
  const [ registroList, setRegistroList ] = useState<IRegistroObjectTypes[]>([])  
    
    const handleGetData = async () => {
      const { data } = await api.get("/register");
      const { registro } = data;

      setRegistroList(registro);
    }

    useEffect(() => { handleGetData() }, [])
    
    
  

  return(
    <div>
      {registroList.map((registro: IRegistroObjectTypes)=>{
        return(
          <ul>
            <li key={registro._id}>{registro.name}</li>
          </ul>
        )
        
      })}
      

    </div>
  )
}