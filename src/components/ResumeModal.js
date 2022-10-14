import React, { useState } from 'react';
// react pdf viewer
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// framer-motion
import { motion } from 'framer-motion';

import pdfFile from '../assets/pdf/Munezero Christian Resume.pdf';

// background variants
const backgroundVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// modal variants
const modalVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ResumeModal = ({ setShowModal }) => {
  const [resume] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <motion.div
      className="modal__background"
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="modal__container" variants={modalVariants}>
        {resume && (
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
            <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}
      </motion.div>
      <div className="close__icon" onClick={() => setShowModal(false)}>
        X
      </div>
    </motion.div>
  );
};

export default ResumeModal;
