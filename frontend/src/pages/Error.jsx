import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Go back to the main page</Link>{" "}
      {/* Link to redirect user to home */}
    </>
  );
};

export default Error;