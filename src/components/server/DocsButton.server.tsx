import React from 'react';
import ExternalIcon from '../svgs/ExternalIcon';

type DocsButtonProps = {
  label: string;
  url: string;
};

const DocsButton = ({ label, url }: DocsButtonProps) => {
  return (
    <a
      href={url}
      className='bg-white shadow py-2 px-5 rounded-full inline-flex items-center hover:opacity-80'
      target='_blank'
      rel='noreferrer'
    >
      {label}
      <ExternalIcon />
    </a>
  );
};

export default DocsButton;
