import PropTypes from 'prop-types';

const PrimeraApp = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  titulo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo',
};

export default PrimeraApp;
