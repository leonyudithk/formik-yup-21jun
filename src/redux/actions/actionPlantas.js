import { addDoc, collection } from 'firebase/firestore'
import { DB } from '../../Firebase/firebaseConfig'
import {typesPlantas} from '../types/types'
//---------------Agregar Planta-----------------------/

export const addPlantaAsync = (planta) => {
    return async (dispatch)=>{
        addDoc(collection(DB, "plantas"), planta)
        .then(resp => dispatch(addPlantaSync(planta)))
        .catch(error => console.warn(error))

    }
}
export const addPlantaSync = (planta) => {
    return {
        type: typesPlantas.add,
        payload: planta
    }
}