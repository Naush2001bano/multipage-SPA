import { Link } from "react-router-dom";


const PRODUCTS = [
  { id : 'p1' , title : 'Product 1' },
  { id : 'p2' , title : 'Product 2' },
  { id : 'p3' , title : 'Product 3' },
  { id : 'p4' , title : 'Product 4' },
]

const ProductsPage = () => {
  return <>
  <h1>The Products Page</h1>
  <ul>
    {PRODUCTS.map((prod) => (
      
    <li key={prod.id}><Link  to={prod.id} relative="">{prod.title}</Link></li>
    ))}
     <p><Link to='..' relative="path">Back</Link></p>
  </ul>
  </>
}

export default ProductsPage;