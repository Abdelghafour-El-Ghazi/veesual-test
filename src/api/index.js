import axios from "axios";

// Getting the Album using the keyword and the offset
export const getAlbums = async (keyword, offset) => {
  let token;

  if (localStorage.getItem("spotifyToken")) {
    token = localStorage.getItem("spotifyToken");
  }
  try {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: { q: keyword, type: "album", offset },
    });

    return response;
  } catch (err) {
    console.log("err", err);
    return { err };
  }
};
