// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "cvnERDtgKiktoP30ZUjSgKQqPGB8MizpeaHufskRpTI",
});

export default function handler(req, res) {
  unsplash.search
    .getPhotos({
      query: req.query?.search ? req.query?.search : "india",
      page: req.query.page,
      perPage: 12,
      orientation: "squarish",
    })
    .then((r) => {
      res.status(200).json(r.response);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
}
