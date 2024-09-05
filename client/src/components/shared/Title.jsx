import React from "react";
import { Helmet } from "react-helmet-async";
const Title = ({
  title = "Chat App",
  description = "this is the chat app chattu",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  );
};

export default Title;
