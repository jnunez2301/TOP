import { CvElement } from "../Components/CvElement"
import { CvForm } from "../Components/CvForm"
import { useState } from "react"
import EditEducation from "../Components/EditEducation"

const CvLayout = () => {

    const [showImg, setShowImg] = useState(true)
    
    const [showModal, setShowModal] = useState('hidden')
    
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        phone: '',
        adress: '',
        titleDescription: '',
        img: '',
        education: 
            [],
        experience: 
            []}
        )

    const onShowImg = () =>{
        setShowImg(!showImg)
    }

    const handleName = (event) =>{
        if(event.target.value.trim().length > 0){
            setInputValue({
                ...inputValue,
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

    const handleImageUpload = (event) =>{
        const selectedImage = event.target.files[0]
        if(selectedImage){
            const reader = new FileReader

            reader.onload = (e) => {
                const dataUrl = e.target.result;
                setInputValue({...inputValue, img: dataUrl})
            }
        reader.readAsDataURL(selectedImage)
        }
    }

    const handleUpdate = (newInputValue) =>{
        setInputValue(newInputValue);
    }

    const submitSchool = (event)=>{
        event.preventDefault()
        const schoolForm = {
            title: event.target[0].value.trim(),
            description: event.target[1].value.trim(),
            previousDate: event.target[2].value.trim(),
            currentDate: event.target[3].value.trim(),
            adress: event.target[4].value.trim()
        }

        if(schoolForm.title.length > 0){

        setInputValue({
            ...inputValue,
            education: [...inputValue.education, schoolForm]
        })
        event.target.reset();
        }
        
    }

    const submitJob = (event) =>{
        event.preventDefault()
        
        const jobForm = {
            title: event.target[0].value.trim(),
            description: event.target[1].value.trim(),
            previousDate: event.target[2].value.trim(),
            currentDate: event.target[3].value.trim(),
            adress: event.target[4].value.trim()
        }

        if(jobForm.title.length > 0){
            setInputValue({
                ...inputValue,
                experience: [...inputValue.experience, jobForm]
            })
            event.target.reset()
        }
    }

    const handleEditSchool = (index) => {
        console.log(inputValue.education[index]);
        setShowModal('visible')
    }
    const hideModal = () => {
        setShowModal('hidden');
    }
    const updateForm = () =>{

    }
    /* const handleDeleteEducation = (index) =>{
        const updatedInput = inputValue.filter(input => input.education !== )
    } */


    return (
        <>
             <CvForm
              handleName={handleName}
              handleEmail={handleEmail}
              handlePhone={handlePhone}
              handleAdress={handleAdress}
              handleTitleDescription={handleTitleDescription}
              cvInfo={inputValue}
              setCvInfo={setInputValue}
              handleUpdate={handleUpdate}
              handleImageUpload={handleImageUpload}
              submitSchool={submitSchool}
              submitJob={submitJob}
              onShowImg={onShowImg}
              handleEditSchool={handleEditSchool}
                 />
             <CvElement 
             cvInfo={inputValue}
             showImg={showImg}/>
             <EditEducation 
             showModal={showModal}
             hideModal={hideModal}
             education={inputValue.education}
             updateForm={updateForm}/>
        </>
    )
}

export default CvLayout