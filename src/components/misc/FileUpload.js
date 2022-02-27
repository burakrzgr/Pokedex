import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Button, Stack } from "react-bootstrap";
import AddImg from "../../resource/AddImg.png";
import "../../border.css";

const fileTypes = ["JPG", "PNG", "BMP"];
//npm i --save react-drag-drop-files
function FileUpload({file,setFile}) {
  const [tempUrl, setTempUrl] = useState(null);
  const handleChange = (f) => {
    setFile(f);
    setTempUrl(URL.createObjectURL(f));
  };
  const removeImg = () => {
    setFile(null);
    setTempUrl(null);
  };


  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      children={ChildComponent(tempUrl ? tempUrl:file, removeImg)}
      hoverTitle="Drop Here"
      types={fileTypes}
      multiple={false}
    />
  );
}

const ChildComponent = (tempUrl, removeImg) => (
  <>
    {tempUrl ? (
      <div
        style={{ height: "25rem" }}
        className="border border-secondary dashed rounded p-1"
      >
        <img
          src={tempUrl}
          alt=""
          style={{
            height: "100%",
            width: "20rem",
            objectFit: "contain",
          }}
        />
        <div className="d-grid mt-2">
          <Button variant="danger" size="sm" onClick={removeImg}>
            Change / Remove Image
          </Button>
        </div>
      </div>
    ) : (
      <div
        style={{ height: "28rem", width: "18rem" }}
        className="border border-secondary dashed rounded p-1"
      >
        <Stack className="align-items-center justify-content-center h-100">
          <div className="text-center ">Drag the image of<br />the pokemon here.</div>
          <div className="text-center pt-4 pb-4">
            <img
              src={AddImg}
              alt="Add Icon"
              style={{ width: "4rem" }}
            ></img>
          </div>
          <div className="text-center ">Accepted Formats</div>
          <div className="text-center ">JPG, PNG, BMP</div>
          
        </Stack>
      </div>
    )}
  </>
);

export default FileUpload;
