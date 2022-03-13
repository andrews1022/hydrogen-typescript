import React from 'react';
import { Link } from '@shopify/hydrogen/client';
import { DEFAULT_CLASSES, VARIANT_CLASSES } from '../../constants/button';
import ExternalIcon from '../svgs/ExternalIcon';

// A client component that sets the primary and secondary classes for button components
const Button = ({ className, label, handleClick, url, variant = 'primary', passthroughProps }) => {
  const classes = `${DEFAULT_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;
  const isExternal = url ? url.indexOf('://') > 0 || url.indexOf('//') === 0 : false;

  if (isExternal) {
    return (
      <a href={url} className={classes} {...passthroughProps}>
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
    <Link to={url} className={classes} {...passthroughProps}>
      {label}
    </Link>
  );
};

export default Button;
