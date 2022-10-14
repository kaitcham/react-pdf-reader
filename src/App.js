import React, { useState } from 'react';
import ResumeModal from './components/ResumeModal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="app">
      {showModal && <ResumeModal setShowModal={setShowModal} />}
      <button onClick={() => setShowModal(true)}>Resume</button>
    </div>
  );
};

export default App;
