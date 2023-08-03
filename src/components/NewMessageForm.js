import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewMessageForm.css";
import AudioRecorder from "./AudioRecorder";

//empty form data to reset form to
const INITIAL_FORM_DATA = {
    title: "",
    audio_message: ""
};

const NewMessageForm = ({ addMessageCallback }) => {
    
    const [messageFormData, setMessageFormData] = useState(INITIAL_FORM_DATA);

    const updatePreview = (event) => {
        console.log("DEBUG: updatePreview called")
        const updateFormData = {
        ...messageFormData,
        [event.target.name]: event.target.value,
        };
        setMessageFormData(updateFormData);
    };

    // function to save 64baseString to FormData
    const handleAudioData = (base64String) => {
        console.log("DEBUG: handleAudioData called")
        console.log(base64String)
        const updateFormData = {
            ...messageFormData,
            "audio_message": base64String
        };
        setMessageFormData(updateFormData)
    }

    //function to handle the submition of form and add new msg to initial data
    const handleSubmit = (event) => {
        event.preventDefault();
        addMessageCallback(messageFormData)
        //reset form data to blank
        setMessageFormData(INITIAL_FORM_DATA);
        };
    return (
        <section className="cardform__container">
        <h3 className="create-card-title"> New Farewell</h3>
        <form onSubmit={handleSubmit} className="cardform" >
            <div className="message">
            {/* title */}
            <label htmlFor='title'>Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={messageFormData.title}
                    onChange={updatePreview}
                />
            </div>
            {/* audio */}
            <label htmlFor='audio'>Audio Recording:</label>
            <AudioRecorder onAudioData={handleAudioData}/>
            <input type="submit" value="submit" onClick={handleSubmit} className="submit"/>
        </form>
        </section>
    );
    };

    NewMessageForm.propTypes = {
        addMessageCallback: PropTypes.func.isRequired,
    };

    export default NewMessageForm;