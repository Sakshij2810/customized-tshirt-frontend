import React from "react";
import CustomeButton from "./CustomeButton";

const FilePicker = ({ file, setFile, readFile }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomeButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customeStyles="text-xs"
        />
        <CustomeButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customeStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
