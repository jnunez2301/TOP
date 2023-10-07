import { CvElement } from "../Components/CvElement"
import { CvForm } from "../Components/CvForm"
import { useState } from "react"

const CvLayout = () => {

    /*
    The object MUST look like this
    {
        name: name,
        email: email,
        phone: phone,
        adress: adress,
        education: {
            previousDate: DD/MM/YYYY,
            currentDate: DD/MM/YYYY or Present
        },
        experience: {
            previousDate: DD/MM/YYYY,
            currentDate: DD/MM/YYYY or Present
        }
    }
     */
    const [inputValue, setInputValue] = useState({
        name: 'Cinamon Roll Shy',
        email: 'cinamonrollshy@sanrio.com',
        phone: '+34 912 345 876',
        adress: 'Shukuru Town, Japan',
        titleDescription: 'Passionate Sanrio character'
    })

    const handleName = (event) =>{
        if(event.target.value.trim().length > 0){
            setInputValue({
                name: event.target.value,
            })
        }
    }
    const handleEmail = (event) =>{
        if(event.target.value.trim().length > 0){
            setInputValue({...inputValue, email: event.target.value})
        }
    }

    const handlePhone = (event) => {
        if(event.target.value.trim().length > 0){
            setInputValue({...inputValue, phone: event.target.value})
        }
    }

    const handleAdress = (event) => {
        if(event.target.value.trim().length > 0){
            setInputValue({...inputValue, adress: event.target.value})
        }
    }
    
    const handleTitleDescription = (event) => {
        if(event.target.value.trim().length > 0){
            setInputValue({...inputValue, titleDescription: event.target.value})
        }
    }

    console.log(inputValue);

    return (
        <>
             <CvForm
              handleName={handleName}
              handleEmail={handleEmail}
              handlePhone={handlePhone}
              handleAdress={handleAdress}
              handleTitleDescription={handleTitleDescription}
                 />
             <CvElement inputValue={inputValue}/>

        </>
    )
}

export default CvLayout