import React, { useState } from 'react';
import axios from 'axios';
import './css/upload.modules.css';

const UploadSyllabus = () => {
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
        
        try{
        axios.post('http://localhost:3000/api/upload', formData)
          .then(response => {
            console.log("Upload successful: ", response.data);
          })
          .catch(error => {
            console.error("Error uploading file: ", error);
          });
        }catch(error){
            console.log(error)
        }
    };

    return (
        <div className="upload-container">
            <input type="file" accept=".pdf" id="fileInput" onChange={onFileChange} />
            <label htmlFor="fileInput"></label>
            <div className="upload-button">
                <button type="button" onClick={onFileUpload}>Upload Syllabus</button>
            </div>
        </div>
    );
};

export default UploadSyllabus;
