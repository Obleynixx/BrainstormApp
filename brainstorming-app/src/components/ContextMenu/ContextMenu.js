import React from 'react';

const ContextMenu = ({ visible, x, y, onCreate, onDelete }) => {
  if (!visible) return null;

  const menuStyle = {
    position: 'absolute',
    top: y,
    left: x,
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '8px 0',
  };

  const menuItemStyle = {
    padding: '8px 16px',
    cursor: 'pointer',
  };

  return (
    <div style={menuStyle}>
      <div style={menuItemStyle} onClick={onCreate}>
        Create
      </div>
      {onDelete && (
        <div style={menuItemStyle} onClick={onDelete}>
          Delete
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
