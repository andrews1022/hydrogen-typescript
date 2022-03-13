const Redirect = ({ response }) => {
  response.redirect('/products/snowboard');
  return <div>This page is redirected</div>;
};

export default Redirect;
