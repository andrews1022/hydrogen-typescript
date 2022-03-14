import React from 'react';
import { Link } from '@shopify/hydrogen/client';

// svg components
import ExternalIcon from '../svgs/ExternalIcon';

// constants
import { DEFAULT_CLASSES, VARIANT_CLASSES } from '../../constants/button';

// props
type ButtonProps = {
  className: string;
  label: string;
  handleClick?: () => void;
  url: string;
  variant?: keyof typeof VARIANT_CLASSES;
};

// A client component that sets the primary and secondary classes for button components
const Button = ({ className, handleClick, label, url, variant = 'primary' }: ButtonProps) => {
  const classes = `${DEFAULT_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;
  const isExternal = url ? url.indexOf('://') > 0 || url.indexOf('//') === 0 : false;

  if (isExternal) {
    return (
      <a href={url} className={classes}>
        {label}
        <ExternalIcon />
      </a>
    );
  }

  if (handleClick) {
    return (
      <button className={classes} onClick={handleClick} type='button'>
        {label}
      </button>
    );
  }

  return (
    <Link to={url} className={classes}>
      {label}
    </Link>
  );
};

export default Button;
