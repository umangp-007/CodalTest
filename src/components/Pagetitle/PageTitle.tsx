import React, { useState } from 'react';
import './Pagetitle.scss'
// Define the type for the component props
interface PageTitleProps {
  title: string;
  description: string;
  maxLength?: number; // Optional prop with a default value
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description, maxLength = 250 }) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(false);

  const descriptionText = description.slice(0, maxLength);
  const isLongDescription = description.length > maxLength;

  // Toggle the read more/less functionality
  const handleReadMoreToggle = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <div className="page-title">{title}</div>
      <div className="page-description">
        {isLongDescription && !isReadMore ? descriptionText : description}
        {isLongDescription && (
          <span className="read-more-toggle" onClick={handleReadMoreToggle}>
            {isReadMore ? ' Read Less' : ' Read More'}
          </span>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
