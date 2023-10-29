
import React from 'react';
import './Exhibit.css';
const Exhibit = ({ title, children }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Exhibit;
