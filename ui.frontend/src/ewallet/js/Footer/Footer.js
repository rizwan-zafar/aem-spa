import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import '../../styles/Footer.css'; // Make sure this path is correct

const CustomTitleEditConfig = {
  emptyLabel: 'Title',
  isEmpty: (props) => !props || !props['title']
};

const Footer = (props) => {
  const TitleTag = props.type || 'h2';

  if (!props['title']) return null;

  return (
    <div className="Footer">
      <div className="Footer-container">
        <TitleTag>{props['title']}</TitleTag>
      </div>
    </div>
  );
};

export default MapTo('etisalat/components/ewallet/footer')(Footer, CustomTitleEditConfig);
