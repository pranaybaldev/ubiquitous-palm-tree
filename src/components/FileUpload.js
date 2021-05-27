import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Dragger } = Upload;

const FileUpload = () => {
    const [fileData, setFileData] = useState(null);
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
                let reader = new FileReader();
                reader.onload = (e) => {
                    console.log(e.target.result);
                    setFileData(e.target.result);
                    localStorage.setItem("fileData", e.target.result);
                }
                reader.readAsText(info.file.originFileObj);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Bulk uploads also supported.
    </p>
        </Dragger>
    )
}

export default FileUpload;