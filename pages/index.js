import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback, useRef } from "react";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import usePhotos from "../hooks/use-photos";
import CardDetails from "../components/CardDetails";
import { fetchPhotos } from "../utils";
import Pagination from "../components/Pagination";
import Head from "next/head";

const Cards = ({ data, setCurrentCard, page, setPage }) => (
  <div className="py-16 xl:py-28 pl-12 pr-8 flex flex-wrap justify-center gap-10">
    {/* {data.pages.map((page) => (
      <> */}
    {data?.results?.map((photo) => (
      <Card
        key={photo.id}
        id={photo.id}
        src={photo.urls.small}
        description={photo.description}
        createdAt={photo.created_at?.substring(0, 10)}
        portfolioUrl={photo.user?.portfolio_url}
        photographer={photo.user?.name}
        onClick={() => setCurrentCard(photo)}
      />
    ))}
    {/* </>
    ))} */}
    <Pagination page={page} setPage={setPage} totalPages={data?.total_pages} />
  </div>
);

export default function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [currentCard, setCurrentCard] = useState(null);
  const loader = useRef(null);

  // const handleObserver = useCallback((entries) => {
  //   const target = entries[0];
  //   if (target.isIntersecting) {
  //     setPage((prev) => prev + 1);
  //   }
  // }, []);

  // useEffect(() => {
  //   const option = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 0,
  //   };
  //   const observer = new IntersectionObserver(handleObserver, option);
  //   if (loader.current) observer.observe(loader.current);
  // }, [handleObserver]);
  const { data, isLoading, isError, error } = usePhotos(query, page);

  if (isLoading) return <div className="py-32">Loading...</div>;

  if (isError) return <div className="py-32">{error.message}</div>;

  return (
    <>
      <Head>
        <title>Find Polaroids</title>
        <link rel="icon" type="image/x-icon" href="https://fav.farm/📸" />
      </Head>
      <SearchBox
        query={query}
        setQuery={setQuery}
        page={page}
        setPage={setPage}
      />
      {currentCard ? (
        <CardDetails photo={currentCard} setCurrentCard={setCurrentCard} />
      ) : (
        <Cards
          data={data}
          setCurrentCard={setCurrentCard}
          page={page}
          setPage={setPage}
        />
      )}
      <div ref={loader}>.</div>
    </>
  );
}
