import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'flowbite-react';
import OurStorageDapp from '../OurStorageDapp';
import web3 from '../web3';
import { FaDownload } from 'react-icons/fa' 
import axios from 'axios'; 
import fileDownload from 'js-file-download';
const FileAccordian = () => {

    const [address, setaddress] = useState(null);
    const [getfile, setgetfile] = useState([1]);
    const [totalFilesCount, settotalFilesCount] = useState(0);
    const [loading, setloading] = useState(false);
    useEffect(() => {

        loadallmyfiles();
        setloading(true);

    }, []);

    function Download(i , x) {
        
        axios({
            url : `https://gateway.pinata.cloud/ipfs/${i}`,
            method: "GET",
            responseType:"blob"
        }).then((res) => {
           
            fileDownload(res.data, x);

        })

    }

    const loadallmyfiles = async () => {

        const addresslist = await web3.eth.getAccounts();
        setaddress(String(addresslist[0]));
        const totalFilesCount = await OurStorageDapp.methods.getTotalFileCount(addresslist[0]).call();
        settotalFilesCount(totalFilesCount);
        const file = [];
        for (var i = totalFilesCount; i > 0; i--) {

            const receivedfiles = await OurStorageDapp.methods.getFileOf(i, addresslist[0]).call();
            const changefile = {


                "fileId": receivedfiles[0],
                "fileName": receivedfiles[4],
                "filedes": receivedfiles[5],
                "filehash": receivedfiles[1],
                "fileType": receivedfiles[3],
                "filesize": receivedfiles[2],
                "fileUploadTime": receivedfiles[6],
                "fileUploader": receivedfiles[7]
            }
            file.push(changefile);
            setgetfile(file);
        }
    }
    return (
        <>
            {/* <div className="text-center mt-24">
                <Spinner
                    aria-label="Extra large spinner example Center-aligned"
                    size="xl"
                    color="warning"
                    className='text-2xl'
                />
            </div> */}
            <Table hoverable={true} className="mt-20 w-[75vw] mx-auto">
                <Table.Head>
                    <Table.HeadCell>
                        File Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Upload Time
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Hash
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className=" text-black">
                            View
                        </span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className=" text-black">
                            Download
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        getfile.map((item, idx) => {
                            return (
                                <Table.Row className="dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-200">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {`${item.fileName}`}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {`${item.fileUploadTime}`}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {`${item.fileType}`}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {`${item.filehash}`}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href={`https://gateway.pinata.cloud/ipfs/${item.filehash}`}
                                            target="_blank"
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            View
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <FaDownload onClick={Download(item.filehash , item.fileName)} />
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </>
    )
}

export default FileAccordian