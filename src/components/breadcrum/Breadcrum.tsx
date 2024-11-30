import React from 'react';
import './Breadcrum.scss'

interface BreadcrumbItem {
  label: string;
  link: string;
  isActive: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.isActive ? 'active_page' : 'text-muted'}`}
            aria-current={item.isActive ? 'page' : undefined}
          >
            {item.isActive ? (
              item.label
            ) : (
              <a href={item.link} className="">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
