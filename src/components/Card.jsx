const Card = ({ img, nombre, edad_aprox }) => {
  return (
    <div className="card">
      <div className="data">
        <img alt="Imagen no disponible" src={img} />
        <div className="data">
          <p>{nombre}</p>
          <p>{edad_aprox}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
