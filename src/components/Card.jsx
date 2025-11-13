import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'p-6',
  variant = 'default',
  ...rest 
}) => {
  const variantClasses = {
    default: 'bg-white/80 rounded-xl shadow-xs border border-gray-200/50 backdrop-blur-sm',
    elevated: 'bg-white rounded-xl shadow-sm border border-gray-100',
    outline: 'bg-transparent rounded-xl border-2 border-gray-200',
  };
  
  const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300/50 transition-all duration-300 cursor-pointer' : '';
  
  const cardClasses = `${variantClasses[variant]} ${hoverClasses} ${padding} ${className}`;
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', divider = true }) => {
  return (
    <div className={`${divider ? 'border-b border-gray-200/60 pb-4 mb-4' : ''} ${className}`}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '', divider = true }) => {
  return (
    <div className={`${divider ? 'border-t border-gray-200/60 pt-4 mt-4' : ''} ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'outline']),
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  divider: PropTypes.bool,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  divider: PropTypes.bool,
};

export default Card;