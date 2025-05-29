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
   <div className="container my-5">
     <div className="row">
       {props.aboutCardItems?.map((item, index) => (
         <div className="col-md-4 mb-4" key={index}>
           <div className="card h-100 shadow-sm">
             <img src={item.image || 'https://via.placeholder.com/300'} className="card-img-top" alt={item.title} />
             <div className="card-body">
               {props.name && <h5 className="card-title">{item.title}</h5>}
               {props.description && <p className="card-text">{item.description}</p>}
               <button className="btn btn-success">Test Button</button>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>

  );
};

export default MapTo('etisalat/components/ewallet/about')(About, AboutEditConfig);
