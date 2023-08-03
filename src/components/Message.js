import React, { useState, useEffect } from 'react';

const Message = ({title, audio_message}) => {
    const [audio, setAudio] = useState(null)

    async function loadPlayer() {
        let newAudioBinary = await fetch(audio_message)
        let newAudioBlob = await newAudioBinary.blob()
        const audioURL = URL.createObjectURL(newAudioBlob);
        setAudio(audioURL)
    }
    useEffect(() => { loadPlayer();}, []);

    return (
        <section>
            <div>
                <h1>Title: {title}</h1>
                <audio src={audio} controls></audio>
            </div>

        </section>
    )
}

export default Message;