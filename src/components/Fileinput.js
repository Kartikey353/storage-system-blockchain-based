import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Label, FileInput, Button } from 'flowbite-react'
import FileAccordian from './FileAccordian'
import web3 from '../web3'
import OurStorageDapp from '../OurStorageDapp'
import axios from 'axios';
const Fileinput = () => {
    const [address, setaddress] = useState(null);
    const [file, setFile] = useState(null);
    const fileInput = useRef(null);
    const [Totalcountoffile, setTotalcountoffile] = useState(0);

    useEffect(() => {

        fetch();

    }, []);


    const fetch = async () => {

        const addresslist = await web3.eth.getAccounts();
        setaddress(String(addresslist[0]));
        const count = await OurStorageDapp.methods.getTotalFileCount(addresslist[0]).call();
        console.log(count);
        setTotalcountoffile(count);
    }


    const handelFileChange = (e) => {
        setFile(e.target.files[0]);
    };



    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(file);

        if (file) {
            try {

                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `8121fa873a390b8491ef`,
                        'pinata_secret_api_key': `59d1aa219c4ac3ff89052ecff70e3687698b671005fdf5dba784aac37d096c77`,
                        "Content-Type": "multipart/form-data"
                    },
                });


                // const ImgHash = `ipfs://${resFile.data.IpfsHash}`; 
                const ImageHash = String(`${resFile.data.IpfsHash}`);
                console.log(ImageHash);
                const size = String(file.size);
                const type = String(file.type);
                const name = String(file.name);
                const cost = String(1);
                await OurStorageDapp.methods.uploadFile(
                    ImageHash,
                    size,
                    type,
                    name,
                    "hello"
                ).send({
                    from: address,
                });


            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    };


    return (
        <>
            <div id="fileUpload">
                <div className="mb-2 block">
                    <h1 className='text-center text-3xl mt-[5vh]'>Upload Files</h1>
                    <p className="text-center ">A decentralized Facility to Upload your Documents <br /> You can upload your document securely That are encrypted by Crytography Technique</p>
                    <Label
                        htmlFor="file"
                        value=""
                    />
                </div>
                <FileInput
                    id="file"
                    helperText=""
                    className='w-[100%] max-w-xl mx-auto'
                    ref={fileInput}
                    onChange={handelFileChange}
                />
                <Button
                    color="success"
                    onClick={handelSubmit}
                    className='mt-10 mx-auto'>
                    Upload Securly
                </Button>
            </div>
            <FileAccordian />
        </>
    )
}

export default Fileinput;