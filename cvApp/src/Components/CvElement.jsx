/* eslint-disable react/prop-types */
import React from "react"
import { usePDF } from "react-to-pdf"


export const CvElement = ({ cvInfo }) => {
    const { toPDF, targetRef } = usePDF({ filename: `CV.pdf` })
    // editMode, setEditMode = useState(false)
    // !editmode ? editBtn : <form>Your form to edit</form> 
    /* 
    $("input").on("blur", function() {
                // Interrumpimos el evento default
                event.preventDefault();

                // Eliminamos los espacios en blanco
                $(this).val($.trim($(this).val()));
            });
    ctrl + alt + A */

    return (
        <section ref={targetRef} className="cv-element" style={{ position: 'relative' }}>
            <button
                className="btn-download"
                onClick={() => toPDF()}
            >Download PDF</button>
            {/* REMEMBER TO MAP THE INPUTVALUE */}
            {
                cvInfo.map((cv, index) => (
                    <React.Fragment key={index}>
                    <div className="cv-title">
                        <div>
                            <h2>{cv.name}</h2>
                            <p>{cv.email}</p>
                            <p>{cv.phone}</p>
                            <p>{cv.adress}</p>
                            <p>{cv.titleDescription}</p>
                        </div>
                        <figure>
                            <img src={cv.img} alt={cv.name} />
                        </figure>
                    </div>
                    <div>
                        <h3 className="cv-part">Education</h3>
                        
                            
                                {
                                    cv.education.map((study, index) =>(
                                        <React.Fragment key={index}>
                                        <div className="cv-experience">
                                        <div>
                                            <p>{study.previousDate} - {study.currentDate}</p>
                                            <p>{study.adress}</p>
                                        </div>
                                        <div>
                                            <p className="sub-title">{study.title}</p>
                                            <p>{study.description}</p>
                                        </div>
                                        </div>
                                        </React.Fragment>
                                    ))
                                }

                        <div>
                            <h3 className="cv-part">Professional Experience</h3>
                            {
                                cv.experience.map((work, index) => (
                                    <div key={index} className="cv-experience">
                                        <div>
                                            <p>{work.previousDate} - {work.currentDate} </p>
                                            <p>{work.adress}</p>
                                        </div>
                                        <div>
                                            <p className="sub-title">{work.title}</p>
                                            <p>{work.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    </React.Fragment>
                ))
            }
        </section>
    )
}
