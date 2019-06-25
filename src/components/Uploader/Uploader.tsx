import React from 'react';
import './Uploader.scss';
import { Icon, Button, Upload } from "antd";

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

        </div>
      </div>
    </div>
  )
};

export default Uploader;