import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Prodotto non trovato");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container mt-5"><p>Caricamento dettaglio...</p></div>;
  if (error) return <div className="container mt-5"><p>Errore: {error}</p></div>;
  if (!product) return <div className="container mt-5"><p>Prodotto non disponibile.</p></div>;

  return (
    <div className="container mt-4">
      <Link to="/catalog" className="btn btn-outline-primary mb-3">
        Torna al catalogo
      </Link>

      <article className="detail-card">
        <div className="detail-image-wrap">
          <img src={product.image} alt={product.title} className="detail-image" />
        </div>

        <div className="detail-content">
          <h1 className="page-title">{product.title}</h1>
          <p className="page-subtitle">
            Categoria: {product.category}
          </p>
          <p>{product.description}</p>
          <div className="product-price">${product.price}</div>
        </div>
      </article>
    </div>
  );
}