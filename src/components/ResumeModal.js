import React, { useState } from 'react';
// react pdf viewer
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import pdfFile from '../assets/pdf/Munezero Christian Resume.pdf';

const ResumeModal = ({ setShowModal }) => {
  const [resume] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="modal__background">
      <div className="modal__container">
        {resume && (
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
            <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}
      </div>
      <div className="close__icon" onClick={() => setShowModal(false)}>
        X
      </div>
    </div>
  );
};

export default ResumeModal;
