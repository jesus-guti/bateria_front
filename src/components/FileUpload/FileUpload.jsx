import React, { useRef, useCallback } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit } = useForm();
    const dropzoneRef = useRef(null);

    const handleUpload = (data) => {
        const files = dropzoneRef.current.getAcceptedFiles();

        // Prepare form data for the upload
        const formData = new FormData();
        formData.append('text', data.text);
        formData.append('email', data.email);

        // Append the file(s) to the form data
        files.forEach(file => {
            formData.append('files', file);
        });

        // use `fetch` or `axios` library to send the form data to the server
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <form onSubmit={handleSubmit(handleUpload)}>
            <label>
                Text:
                <input type="text" name="text" ref={register} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" ref={register} />
            </label>
            <br />
            <Dropzone ref={dropzoneRef} onDrop={acceptedFiles => { /* handle files here */ }}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <button type="submit">Upload</button>
        </form>
    );
}