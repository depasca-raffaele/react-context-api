import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [productIds, setProductIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const ids = data.map((item) => item.id).sort((a, b) => a - b);
        setProductIds(ids);
      })
      .catch(() => {
        setProductIds([]);
      });
  }, []);

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

  //navigate
  const currentId = Number(id);
  const currentIndex = productIds.indexOf(currentId);

  const prevId = currentIndex > 0
    ? productIds[currentIndex - 1]
    : null;

  const nextId = currentIndex >= 0 && currentIndex < productIds.length - 1
    ? productIds[currentIndex + 1]
    : null;



  if (loading) return <div className="container mt-5"><p>Caricamento dettaglio...</p></div>;
  if (error) return <div className="container mt-5"><p>Errore: {error}</p></div>;
  if (!product) return <div className="container mt-5"><p>Prodotto non disponibile.</p></div>;

  return (
    <div className="container mt-4">
      <div className="d-flex gap-2 mb-3 flex-wrap">
        <Link to="/catalog" className="btn btn-outline-primary mb-3">
          Torna al catalogo
        </Link>

        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/catalog/" + prevId)}
          disabled={!prevId}
        >
          Prodotto precedente
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/catalog/" + nextId)}
          disabled={!nextId}
        >
          Prodotto successivo
        </button>
      </div>

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