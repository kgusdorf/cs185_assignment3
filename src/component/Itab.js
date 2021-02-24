import React from 'react';

export default function Itab(props) {
  const addStyle = () => {
    if (props.out.id === props.activeTab) {
      return { backgroundColor: '#ccc' };
    }
  };

  return (
    <div style={addStyle()} className="nav-text" onClick={props.changeTab.bind(this, props.out.id)}>
      {props.out.title}
    </div>
  );
}
