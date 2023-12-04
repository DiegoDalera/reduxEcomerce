import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Aladdin Sane - David Bowie", "price": 149, "image": "/assets/images/Aladdin_Sane.jpg"},
    {"id": 2, "name": "Appetite for Destruction - G&R", "price": 49, "image": "/assets/images/appetite-for-destruction.jpg"},
    {"id": 3, "name": "Jester's Tears - Marillon", "price": 179, "image": "/assets/images/Jesters_Tear.jpg"},
    {"id": 4, "name": "Live After Death - Iron Maiden", "price": 39, "image": "/assets/images/live-after-death.jpg"},
    {"id": 5, "name": "Nevermind - Nirvana", "price": 199, "image": "/assets/images/Nevermind.jpg"},
    {"id": 6, "name": "Sgt. Pepper's - The Beatles", "price": 29, "image": "/assets/images/Sgt_Pepper.jpg"},
    {"id": 6, "name": "The Dark Side of the Moon - Pink Floyd", "price": 29, "image": "/assets/images/The_Dark_Side.jpg"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
