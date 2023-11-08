import  { useRef } from "react";
import { useState } from "react"

const Tarea2 = () => {

    const [ inputValue, setInputValue ] = useState({});
    const [ messages, setMessages ] = useState([]);
    const [ isOpen, setIsOpen ] = useState(false);
    const formRef = useRef(null);
    const containerRef = useRef(null);
    

    const handleOpen = () => {
        const body = document.querySelector('body');

        if(!isOpen){
            
            formRef.current.style.display = 'none';
            formRef.current.style.opacity = 0;
            setIsOpen(!isOpen)
            body.style.backgroundColor = '#f2f2f2'
        }else{
            
            formRef.current.style.display = 'flex';
            formRef.current.style.opacity = 1;
            setIsOpen(!isOpen)
            body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setInputValue({...inputValue, [name]: value.trim()})
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.titulo.length > 0 && inputValue.mensaje.length > 0){
        setMessages([...messages, inputValue])
        handleOpen();
        formRef.current.reset();
        }else{
            alert('Fields must be longer than 0')
        }

    }
  return (
    <section ref={containerRef} className="tarea2-container">
        <form ref={formRef} className="form-modal" onSubmit={handleSubmit}
        >
            <div
            style={{
                position: 'relative'   
            }}>
            <h2
            style={{
                paddingBottom: '1rem'
            }}
            >Agregar nueva publicación</h2>
            <p>Para agregar una nueva publicación complete este formulario</p>
            <button
            style={{
                position: 'absolute',
                top: '0',
                right: '0',
            }}
            onClick={handleOpen} type="button">X</button>

            </div>
            <label htmlFor="titulo">Titulo:</label>
            <input 
            onChange={onInputChange}
            type="text" name="titulo" id="titulo"/>

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea name="mensaje" 
            onChange={onInputChange}
            id="mensaje" cols="30" rows="10" />
            <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
            >
                <button type="submit">Publicar</button>
            </div>

        </form>        
        <div className="publicaciones">
            <div>
                <h2>Mis publicaciones</h2>
                <div className="add-post">
                    <p>En este apartado se muestran todas las publicaciones que se han creado</p>
                    <button 
                    onClick={handleOpen}
                    type="submit">Agregar una publicación</button>
                </div>
            </div>
            <div>
                <div>
                    {
                        messages.length > 0 
                        ?
                        <>
                        {
                            messages.map((msg, index) => (
                                <div className="msg" key={index}>
                                <h2>{msg.titulo}</h2>
                                <p>{msg.mensaje}</p>
                                </div>
                            ))
                        }
                        </>
                        :
                        'No messages found'
                    }
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tarea2