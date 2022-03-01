const apiKey = "6v0gqpBHPElle3D4YENpQCAHsVi55yKA";

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
request
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url: imageUrl } = data.images.original;
    const img = document.createElement("img");
    img.src = imageUrl;
    document.body.append(img);
  })
  .catch((err) => console.warn(err));
