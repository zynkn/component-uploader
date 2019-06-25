import React from 'react';
import './Uploader.scss';
import { Icon, Progress } from "antd";

const Uploader = () => {
  return (
    <div className="Uploader">
      <div className="pane">
        <Icon type="file-add" theme="twoTone" style={{ fontSize: '120px' }} />
        <p style={{ color: '#bdbfc3', fontSize: '20pt', margin: '8px' }}>Drag and drop file</p>
        <p style={{ color: '#bdbfc3', fontSize: '14pt', margin: '0' }}>or</p>
        <div className="Upload-button" style={{ marginTop: '16px' }}>
          <label htmlFor="upload">Browse</label>
          <input type="file" id="upload" />
        </div>
      </div>
      <div className="pane">
        <div className="UploadList">
          <div className="ListItem">
            <Progress type="circle" percent={30} width={40} />
            <div className="description">
              <span className="filename">sponsor-packages.pdf</span>
              <span className="filesize">1.34 MB / 1.34 MB</span>
            </div>
            <Icon type="close-circle" theme="filled" style={{ fontSize: '20px', color: '#d0d0d0' }} />
          </div>
          <div className="ListItem">
            <Progress type="circle" percent={100} width={40} />
            <div className="description">
              <span className="filename">sponsor-packages.pdf</span>
              <span className="filesize">1.34 MB / 1.34 MB</span>
            </div>
            <Icon type="check-circle" theme="filled" style={{ fontSize: '20px', color: '#1890ff' }} />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Uploader;