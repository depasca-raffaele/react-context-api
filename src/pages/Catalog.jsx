import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Errore nel fetch");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container mt-5"><p>Caricamento...</p></div>;
    if (error) return <div className="container mt-5"><p>Errore: {error}</p></div>;

  return (
    <div className="container mt-4">
      <h1 className="page-title">Catalogo Prodotti</h1>
      <p className="page-subtitle">Scegli tra i best seller del momento.</p>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-lg-4">
            <Link
              to={"/catalog/" + product.id}
              className="text-decoration-none text-reset product-link"
            >
            <article className="card product-card">
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
              </div>

              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">
                  {product.description.length > 110
                    ? product.description.slice(0, 110) + "..."
                    : product.description}
                </p>
                <div className="product-price">${product.price}</div>
                <button className="btn-shop">Aggiungi al carrello</button>
              </div>
            </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}