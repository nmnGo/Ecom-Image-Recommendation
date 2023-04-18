import React from 'react'
import DragNDrop from '../components/DragNDrop';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { get_image_with_emotions } from '../controllers/image';

const Sentiment = () => {

    const [emotion_file, setEmotionFile] = useState("");
    const [files, setFiles] = useState([]);

    const get_emotions = async (file) => {
        toast.success("Image uploaded Success")
        const toastId = toast.loading('Processing Image....please be patient');
        console.log("IT STARTED")
        let fd = new FormData();
        console.log("FILE : ", file);
        fd.append("file", file)
        get_image_with_emotions(fd).then((result) => {
            setEmotionFile(result)
            console.log(result)
            toast.success('Operation Completed', {
                id: toastId,
            });
            console.log("IT ENDED")
        })
    }
    return (
        <>
            <div className='d-flex flex-column align-items-center justify-center'>
                <h2>Know the sentiment!</h2>
                <p>Describes the mood and emotion of all the faces present in the image</p>
            </div>
            <DragNDrop
                operationToBePerformed={get_emotions}
                files={files}
                setFiles={setFiles}
            />
            {
                files.length > 0
                &&
                <div className='text-center my-5'>
                    <h5>Input Image</h5>
                    <img
                        src={files[0].preview}
                        style={{ maxHeight: "300px", maxHeight: "400px", borderRadius: "15px 15px 15px 15px" }}
                    />
                </div>
            }
            <div className='container' id="output_images">
                {emotion_file &&
                    <>OUTPUT IMAGE :
                        <div
                            className='rounded-3 my-3 d-flex align-items-center justify-content-around border border-light flex-wrap'
                            style={{ background: "#f3f3f3", boxShadow: "0 2px 4px 0 rgba(50,50,50,.3)" }}
                        >
                            <div className='my-3 rounded-3'>
                                <img src={emotion_file}
                                     style={{ maxHeight: "300px", maxHeight: "400px", borderRadius: "15px 15px 15px 15px" }}
                                ></img></div>

                        </div>
                    </>}
            </div>
        </>
    )
}

export default Sentiment