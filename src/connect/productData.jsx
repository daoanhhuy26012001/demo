import { useEffect, useState } from 'react';
import { PRODUCT_DATABASE } from '../constants/constant';

export const useProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(PRODUCT_DATABASE)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return products;
};
