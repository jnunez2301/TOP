/* eslint-disable react/prop-types */
import { usePDF } from "react-to-pdf"


export const CvElement = ({ inputValue }) => {
    const { toPDF, targetRef } = usePDF({ filename: `CV.pdf` })

    /* 
    $("input").on("blur", function() {
                // Interrumpimos el evento default
                event.preventDefault();

                // Eliminamos los espacios en blanco
                $(this).val($.trim($(this).val()));
            });
    ctrl + alt + A */

    return (
        <div style={{ position: 'relative' }}>
            <button
                className="btn-download"
                onClick={() => toPDF()}
            >Download PDF</button>
            {/* REMEMBER TO MAP THE INPUTVALUE */}
            <section ref={targetRef} className="cv-element">
                <div className="cv-title">
                    <div>
                        <h2>Cinamon Roll Shy</h2>
                        <p>cinamonrollshy@sanrio.com</p>
                        <p>+34 912 345 876</p>
                        <p>Shukuru Town, Japan</p>
                        <p>Passionate Sanrio character</p>
                    </div>
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6AlOdAOVljUpTt0q8E_bUYPjh924yHHpczJZz3c&s" alt="profile-pic" />
                    </figure>
                </div>
                <div>
                    <h3 className="cv-part">Education</h3>
                    <div className="cv-experience">
                        <div>
                            <p>10/2023 - Present</p>
                            <p>Country Adress</p>
                        </div>
                        <div>
                            <p className="sub-title">University of Sanrio</p>
                            <p>Degreee on being the cutest Sanrio character</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="cv-part">Professional Experience</h3>
                    <div className="cv-experience">
                        <div>
                            <p>Date - Date</p>
                            <p>Adress</p>
                        </div>
                        <div>
                            <p className="sub-title">Sanrio CO</p>
                            <ul>
                                <li>Being the cutest</li>
                                <li>Sleeping on the cutest position ever</li>
                                <li>Doing skincare and cleaning the dishes uwu</li>

                            </ul>
                        </div>
                    </div>
                    <div className="cv-experience">
                        <div>
                            <p>Date - Date</p>
                            <p>Adress</p>
                        </div>
                        <div>
                            <p className="sub-title">This is a very large company name so it suits</p>
                            <ul>
                                <li>This is a very large thing to describe about my experience</li>
                                <li>This is another very large thing to describe my previous experience</li>
                                <li>More and more things to describe my prev experience</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
