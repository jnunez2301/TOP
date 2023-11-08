import { useParams } from "react-router-dom";
import useData from "../hooks/useData"
import { useEffect } from "react";

const MensajeId = () => {
    const { dataById, dataId }  = useData();
    const idParam = useParams();
    useEffect(() => {
        dataById(parseInt(idParam.id))
    }, [])

    console.log(dataId);
    
  return (
    <div className="publicaciones">
            
            <h2>Mis publicaciones</h2>
            <hr />
            <div>
                
                    {
                        dataId.id
                        ?
                        <>
                        {
                            
                                <div className="msg">
                                <h2>{dataId.title}</h2>
                                <p>{dataId.body}</p>
                                </div>
                           
                        }
                        </>
                        :
                        '404 Message does not exist'
                    }
                  
                
            </div>
        </div>
  )
}

export default MensajeId