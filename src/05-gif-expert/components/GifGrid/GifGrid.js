import { useFetchGifs } from "../../../hooks/05-gif-expert/useFetchGifs";
import { GifGridItem } from "../GifGridItem/GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__flash">{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
