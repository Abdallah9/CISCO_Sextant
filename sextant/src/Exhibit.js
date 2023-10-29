
import React from 'react';

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
