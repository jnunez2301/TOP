import { CvElement } from "../Components/CvElement"
import { CvForm } from "../Components/CvForm"
import { useState } from "react"
import EditEducation from "../Components/EditEducation"
import EditJob from "../Components/EditJob"

const CvLayout = () => {

    const [showImg, setShowImg] = useState(true)

    const [showSchoolModal, setShowSchoolModal] = useState('hidden')
    const [showJobModal, setShowJobModal] = useState('hidden')

    const [schoolIndex, setSchoolindex] = useState(null)
    const [jobIndex, setJobIndex] = useState(null)

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
            []
    }
    )

    const onShowImg = () => {
        setShowImg(!showImg)
    }

    const handleName = (event) => {
        if (event.target.value.trim().length > 0) {
            setInputValue({
                ...inputValue,
                name: event.target.value,
            })
        }
    }
    const handleEmail = (event) => {
        if (event.target.value.trim().length > 0) {
            setInputValue({ ...inputValue, email: event.target.value })
        }
    }

    const handlePhone = (event) => {
        if (event.target.value.trim().length > 0) {
            setInputValue({ ...inputValue, phone: event.target.value })
        }
    }

    const handleAdress = (event) => {
        if (event.target.value.trim().length > 0) {
            setInputValue({ ...inputValue, adress: event.target.value })
        }
    }

    const handleTitleDescription = (event) => {
        if (event.target.value.trim().length > 0) {
            setInputValue({ ...inputValue, titleDescription: event.target.value })
        }
    }

    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0]
        if (selectedImage) {
            const reader = new FileReader

            reader.onload = (e) => {
                const dataUrl = e.target.result;
                setInputValue({ ...inputValue, img: dataUrl })
            }
            reader.readAsDataURL(selectedImage)
        }
    }

    const handleUpdate = (newInputValue) => {
        setInputValue(newInputValue);
    }

    const submitSchool = (event) => {
        event.preventDefault()
        const schoolForm = {
            title: event.target[0].value.trim(),
            description: event.target[1].value,
            previousDate: event.target[2].value.trim(),
            currentDate: event.target[3].value.trim(),
            adress: event.target[4].value.trim()
        }

        if (schoolForm.title.length > 0) {

            setInputValue({
                ...inputValue,
                education: [...inputValue.education, schoolForm]
            })
            event.target.reset();
            alert('Task Completed!')
        }

    }

    const submitJob = (event) => {
        event.preventDefault()

        const jobForm = {
            title: event.target[0].value.trim(),
            description: event.target[1].value,
            previousDate: event.target[2].value.trim(),
            currentDate: event.target[3].value.trim(),
            adress: event.target[4].value.trim()
        }

        if (jobForm.title.length > 0) {

            setInputValue({
                ...inputValue,
                experience: [...inputValue.experience, jobForm]
            })
            event.target.reset()
            alert('Task Completed!')
        }
    }

    const handleEditSchool = (index) => {
        /* console.log(inputValue.education[index]); */
        setSchoolindex(index)
        setJobIndex(null); // Reset the job index to avoid displaying job info
        setShowSchoolModal('visible')
    }

    const handleEditJob = (index) => {
        setJobIndex(index)
        setSchoolindex(null); // Reset the school index to avoid displaying education info
        setShowJobModal('visible')
    }

    const hideModal = () => {
        setShowSchoolModal('hidden');
        alert('Task Completed!')
    }
    const hideJobModal = () =>{
        setShowJobModal('hidden')
        alert('Task Completed!')
    }

    const updateSchoolForm = (index, event) => {
        event.preventDefault()

        const updatedValue = {
            title: event.target[0].value.trim(),
            description: event.target[1].value.trim(),
            previousDate: event.target[2].value.trim(),
            currentDate: event.target[3].value.trim(),
            adress: event.target[4].value.trim()
        };

        const updatedEducation = [...inputValue.education];
        updatedEducation[index] = updatedValue;

        setInputValue({
            ...inputValue, 
            education: updatedEducation
        })
    }

    const updateJobForm = (index, event) =>{

        event.preventDefault()

        const updatedValue = {
            title: event.target[0].value.trim(),
            description: event.target[1].value.trim(),
            previousDate: event.target[2].value.trim(),
            currentDate: event.target[3].value.trim(),
            adress: event.target[4].value.trim()
        };

        const updatedJob = [...inputValue.experience];
        updatedJob[index] = updatedValue

        setInputValue({
            ...inputValue,
            experience: updatedJob
        })
    }
   
    const handleDeleteEducation = (index) => {
        // Make a copy of the current education array
        const updatedEducation = [...inputValue.education];
    
        // Check if the index is valid
        if (index >= 0 && index < updatedEducation.length) {
            if (window.confirm('Do you want to delete this education item?')) {
                // Remove the education item at the specified index
                updatedEducation.splice(index, 1);
    
                // Update the state with the modified education array
                setInputValue({
                    ...inputValue,
                    education: updatedEducation,
                });
                hideModal(); // Hide the education modal if it's open
            }
        } else {
            console.error('Invalid index for deleting an education item.');
        }
    };
    
    const handleDeleteJob = (index) => {
        // Make a copy of the current experience array
        const updatedExperience = [...inputValue.experience];
    
        // Check if the index is valid
        if (index >= 0 && index < updatedExperience.length) {
            if(window.confirm('Do you want to delete this item?')){
                // Remove the job at the specified index
            updatedExperience.splice(index, 1);
    
            // Update the state with the modified experience array
            setInputValue({
                ...inputValue,
                experience: updatedExperience,
            });
            hideJobModal()
            }
        } else {
            console.error("Invalid index for deleting a job.");
        }
    };

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
                handleEditJob={handleEditJob}
            />
            <CvElement
                cvInfo={inputValue}
                showImg={showImg} />
            <EditEducation
                showModal={showSchoolModal}
                hideModal={hideModal}
                education={inputValue.education[schoolIndex]}
                updateForm={updateSchoolForm}
                schoolIndex={schoolIndex}
                handleDeleteEducation={handleDeleteEducation} />
            <EditJob 
                showModal={showJobModal}
                hideModal={hideJobModal}
                jobs={inputValue.experience[jobIndex]}
                updatedJobForm={updateJobForm}
                jobIndex={jobIndex}
                handleDeleteJob={handleDeleteJob}
            />
        </>
    )
}

export default CvLayout