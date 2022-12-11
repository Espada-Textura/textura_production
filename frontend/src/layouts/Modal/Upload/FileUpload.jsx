import TextareaAutoSize from "react-textarea-autosize";

import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <>
      <div className={"upload-art-portal"}>
        <TextareaAutoSize placeholder={"What do you think of your work?"} />
        <div {...getRootProps({ className: "upload-dropzone" })}>
          <input {...getInputProps()} />
          <img src="/src/images/cloud.svg" alt="cloud" />
          <span>
            Drag and drop your artwork here, or click <span>Browse</span>
          </span>
          <span>Accept any image format.</span>
          <span>Size Limit : 10MB for one picture</span>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
