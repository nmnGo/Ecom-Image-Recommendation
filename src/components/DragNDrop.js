import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragNDrop = ({operationToBePerformed,files,setFiles}) => {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: async(acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      await operationToBePerformed(acceptedFiles[0])
    },
  });

  const rootStyle = {
    cursor:"pointer",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: isDragActive ? 'green' : '#ccc',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const thumbsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '16px',
  };

  const thumbStyle = {
    display: 'inline-flex',
    borderRadius: '2px',
    border: '1px solid #eaeaea',
    marginBottom: '8px',
    marginRight: '8px',
    width: '100px',
    height: '100px',
    padding: '4px',
    boxSizing: 'border-box',
  };

  const thumbInnerStyle = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };

  const imgStyle = {
    display: 'block',
    width: 'auto',
    height: '100%',
  };

  return (
    <div>
      <div {...getRootProps()} style={rootStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default DragNDrop;