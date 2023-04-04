import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const pageNotFound = useRouteError();
  return (
    <div>
      <div>
        <h1> your page not showing </h1>
        <p></p>
      </div>
    </div>
  );
};

export default ErrorPage;
