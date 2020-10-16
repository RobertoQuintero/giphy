import Spinner from "components/Spinner";
import useSingleGif from "hooks/useSingleGif";
import useSEO from "hooks/useSEO";
import React from "react";
import { Redirect } from "wouter";
import Gif from "../components/Gif";
import { Helmet } from "react-helmet";

const Detail = ({ params }) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif?.title;

  // useSEO({ title, description: `Detail of ${title}` });

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
          <Spinner />
        </Helmet>
      </>
    );
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;
  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
};

export default Detail;
