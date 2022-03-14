import React from 'react';

// props
type RedirectProps = {
  response: any; // TODO: update to not use type any
};

const Redirect = ({ response }) => {
  response.redirect('/products/snowboard');

  return <div>This page is redirected</div>;
};

export default Redirect;
