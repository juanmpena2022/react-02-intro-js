export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6v0gqpBHPElle3D4YENpQCAHsVi55yKA&q=${encodeURI(
      category
    )}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    console.error(error);
  }
};
