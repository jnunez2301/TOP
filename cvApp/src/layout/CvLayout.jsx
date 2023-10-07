import { CvElement } from "../Components/CvElement"
import { CvForm } from "../Components/CvForm"
import { useState } from "react"

const CvLayout = () => {

    /*
    The object MUST look like this
    [{
        name: 'Cinamon Roll Shy',
        email: 'cinamonrollshy@sanrio.com',
        phone: '+34 912 345 876',
        adress: 'Shukuru Town, Japan',
        titleDescription: 'Passionate Sanrio character',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6AlOdAOVljUpTt0q8E_bUYPjh924yHHpczJZz3c&s',
        education: 
            [{
                title: 'Sanrio University',
                previousDate: '01/05/2023',
                currentDate: 'Present'
            }],
        experience: 
            [{
                title: 'Cutest of Sanrio CO',
                previousDate: '25/10/2021',
                currentDate: 'Present'
            },
            {
                title: 'Funniest of Sanrio CO',
                previousDate: '01/01/1999',
                currentDate: 'present'
            }
        ]}]
     */
    const [inputValue, setInputValue] = useState([{
        name: 'Cinamon Roll Shy',
        email: 'cinamonrollshy@sanrio.com',
        phone: '+34 912 345 876',
        adress: 'Shukuru Town, Japan',
        titleDescription: 'Passionate Sanrio character',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6AlOdAOVljUpTt0q8E_bUYPjh924yHHpczJZz3c&s',
        education: 
            [{
                title: 'Sanrio University',
                description: 'Degree on being the cutest Sanrio Character',
                previousDate: '01/05/2023',
                currentDate: 'Present',
                adress: 'Tokyo, Japan'
            },
            {
                title: 'Sanrio HighSchool',
                description: 'Degree on funniest student',
                previousDate: '01/05/2019',
                currentDate: '20/12/2022',
                adress: 'Osaka, Japan'
            }
        ],
        experience: 
            [{
                title: 'Cutest of Sanrio CO',
                description: 'Working hard as always on being very cute',
                previousDate: '25/10/2021',
                currentDate: 'Present',
                adress: 'Tokyo, Japan'
            },
            {
                title: 'Funniest of Sanrio CO',
                description: 'Working hard as always on being funny',
                previousDate: '01/01/1999',
                currentDate: 'present',
                adress: 'Osaka, Japan'
            }
        ]}]
        )

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

    return (
        <>
             <CvForm
              handleName={handleName}
              handleEmail={handleEmail}
              handlePhone={handlePhone}
              handleAdress={handleAdress}
              handleTitleDescription={handleTitleDescription}
                 />
             <CvElement cvInfo={inputValue}/>

        </>
    )
}

export default CvLayout