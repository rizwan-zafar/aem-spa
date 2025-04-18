import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import '../styles/About.css';

const AboutEditConfig = {
  emptyLabel: 'About',
  isEmpty: (props) => !props || (!props.name && !props.description),
};

const About = (props) => {
  const TitleTag = props.type || 'h2';

  if (!props.name && !props.description) return null;

  return (
    <div className="About">
      <div className="About-card">
        {props.name && <TitleTag className="About-title">{props.name}</TitleTag>}
        {props.description && <p className="About-description">{props.description}</p>}
 
  
      </div>
    </div>
  );
};

export default MapTo('etisalat/components/ewallet/about')(About, AboutEditConfig);
