import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../utils";

const usePhotos = (query = "", page = 1) => {
  return useQuery(
    ["photos", query, page],
    () => fetchPhotos({ search: query, page }),
    {
      keepPreviousData: true,
    }
  );
};

export default usePhotos;
