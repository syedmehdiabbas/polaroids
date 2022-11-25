export const fetchPhotos = async ({ search = "", page = 1 }) => {
  return fetch(`/api/get-photos?search=${search}&page=${page}`).then((res) =>
    res.json()
  );
};
