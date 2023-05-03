import { useDropzone } from "react-dropzone";
import { StyledDetailsDropzone } from "../../../../constats/styles";
import dropIcon from "../../../../assets/images/dropzone.svg";

export const Dropzone = () => {
  const onDrop = (acceptedFiles) => {};
  // doc, docx, jpg, png, jpeg, pdf, xls, xlsx.
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/gif": [".gif"],
    },
  });

  return (
    <StyledDetailsDropzone isDragActive={isDragActive}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} accept=" .jpg, .png, .gif" />
        <div className="icon">
          <img src={dropIcon} alt="" />
        </div>
        <div className="title">Browse or drop your logo here</div>
        <div>
          Maximum 5MB in size. JPG, PNG, or GIF formats. Recommended size: 300 x
          200 pixels.
        </div>
      </div>
    </StyledDetailsDropzone>
  );
};
