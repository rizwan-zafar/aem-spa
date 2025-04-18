import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import '../styles/Header.css'; // Make sure this path is correct

const CustomTitleEditConfig = {
  emptyLabel: 'Title',
  isEmpty: (props) => !props || !props['title']
};

const Header = (props) => {
  const TitleTag = props.type || 'h2';

  if (!props['title']) return null;

  return (
    <div className="Header">
      <div className="Header-container">
        <h1>{props['title']}</h1>
      </div>
    </div>
  );
};

export default MapTo('etisalat/components/ewallet/header')(Header, CustomTitleEditConfig);
