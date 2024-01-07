import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const UploadSyllabus = () => {
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
    
        axios.post('http://localhost:5000/api/uploads', formData)
          .then(response => {
            console.log("Upload successful: ", response.data);
          })
          .catch(error => {
            console.error("Error uploading file: ", error);
          });
    };

    return (
        <div className="upload-container">
            <div className="upload-button">
                <input type="file" id="fileInput" onChange={onFileChange} />
                <label htmlFor="fileInput"></label>
                <button onClick={onFileUpload}>Upload Syllabus</button>
            </div>
        </div>
    );
};

export default UploadSyllabus;
