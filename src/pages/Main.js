import React from 'react'
import { get_images_with_given_face } from '../controllers/image';
import DragNDrop from '../components/DragNDrop';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const Main = () => {
    const [img_links, setImgLinks] = useState([]);
    const [files, setFiles] = useState([]);
    const [completed, setcompleted] = useState(false);

    const f = async (file) => {
        setcompleted(false);
        toast.success("Image uploaded Success")
        const toastId = toast.loading('Processing Images....please be patient');
        console.log("IT STARTED")
        let fd = new FormData();
        console.log("FILE : ", file);
        fd.append("file", file)
        get_images_with_given_face(fd).then((result) => {
            console.log(result)
            if (result?.tag === true) {
                toast.success('Process Completed Success', {
                    id: toastId,
                });
            }
            else {
                return;
            }
            setImgLinks(result?.results);
            console.log("IT ENDED")
            setcompleted(true);
        })
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center justify-center'>
                <h2>Things you wanted !!</h2>
                <p>Filters out all images </p>
            </div>
            <DragNDrop
                operationToBePerformed={f}
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
                {completed &&
                    <>OUTPUT IMAGES :
                        <div
                            className='rounded-3 my-3 d-flex align-items-center justify-content-around border border-light flex-wrap'
                            style={{ background: "#f3f3f3", boxShadow: "0 2px 4px 0 rgba(50,50,50,.3)" }}
                        >
                            {img_links?.map(link => <div key={link} className='my-3 rounded-3'>
                                <img src={"/hisab/"+link}
                                    style={{ maxHeight: "300px", maxHeight: "400px", borderRadius: "15px 15px 15px 15px" }}
                                ></img></div>)}
                        </div>
                    </>}
            </div>
        </>
    )
}

export default Main