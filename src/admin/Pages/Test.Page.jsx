import React, { useState } from "react";
import Axios from "axios";
import { API_BASE_URL } from "../../Constraint/api";

function GoogleDriveFileUploader() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    console.log(file);
    e.preventDefault();
    let formData = new FormData();    //formdata object

        formData.append('file', file.data);  

        console.log(file);
        setLoading(true);
        Axios.post(API_BASE_URL + "upload-file-to-google-drive", formData)
            .then(response => {
                const id = response.data.response.data.id;
                setImage("https://drive.google.com/uc?id="+id);
                console.log(id);
                setLoading(false);
            })
            .catch(error => {
              setLoading(false);
                console.log(error);
            });
    // const responseWithBody = await response.json();
    // if (response) setUrl(responseWithBody.publicUrl);
  };

  const handleFileChange = (e) => {
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(file);
  };
  return (<>
  
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileChange}></input>
      <img src={image}></img>
      <audio controls>
                  <source src={"https://drive.google.com/uc?id=1J9RfJvDqCvTeLMeLzmQMIyhTfLsy7Sci"} type="audio/mpeg" />
                </audio>
      <button  className="btn btn-success" type="submit">{loading ? <div className="spinner"></div>:"Submit"}</button>
    </form>
    {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) :null}</>
  );
}

export default GoogleDriveFileUploader;