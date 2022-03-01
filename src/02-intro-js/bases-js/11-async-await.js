const getImage = async () => {
  try {
    const apiKey = "6v0gqpBHPElle3D4YENpQCAHsVi55yKA";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url: imageUrl } = data.images.original;
    const img = document.createElement("img");
    img.src = imageUrl;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
