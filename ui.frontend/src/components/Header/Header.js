import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const CustomTitleEditConfig = {
  emptyLabel: 'Title',
  isEmpty: (props) => !props || !props['title']
};

const CustomTitle = (props) => {
  const TitleTag = props.type || 'h2';
  return props['title'] ? <TitleTag>{props['title']}</TitleTag> : null;
};

export default MapTo('etisalat/components/ewallet/header')(CustomTitle, CustomTitleEditConfig);
