import React, { PropTypes } from 'react';

const SaveBar = ({ onEdit }) => {
  return (
    <div className="row save-bar">
      <div className="col-sm-12 text-right">
        <button type="button" className="btn btn-default btn-xs save-bar-btn" onClick={onEdit}>
            Save Dashboard
          </button>
      </div>
    </div>
  );
};

SaveBar.propTypes = {
  onEdit: PropTypes.func,
};

export default SaveBar;
