import { useState, useEffect } from 'react';
import './styles/main.css';
import { VARIANTS, CATEGORIES, PRODUCT_DATABASE } from './constants/constant';
import { BRAND, ICON } from './constants/images';
import { Popover } from './components/Common/Popover';
import { Categories } from './components/Sections/Categories';
import { ListBrand } from './components/Sections/ListBrand';
import { ProductList } from './components/Sections/ListProduct';
import { useProductData } from './connect/productData';

function App() {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverButtonType, setPopoverButtonType] = useState('');
  const [buttonIcons, setButtonIcons] = useState({
    Brand: ICON.DOWN,
    Price: ICON.DOWN
  });
  const productCount = useProductData().length;
  const products = useProductData();

  const handleCategoryClick = (category) => {
    if (category === 'Brand') {
      setPopoverButtonType('image');
    } else if (category === 'Price') {
      setPopoverButtonType('text');
    } else {
      setPopoverButtonType('both');
    }

    setButtonIcons((prevState) => ({
      ...prevState,
      [category]: prevState[category] === ICON.DOWN ? ICON.UP : ICON.DOWN
    }));

    setPopoverVisible(!popoverVisible);
  };

  return (
    <div className="container-fluid">
      <Categories
        categories={CATEGORIES}
        buttonIcons={buttonIcons}
        onClick={handleCategoryClick}
      />
      <div className="popup">
        {popoverVisible && (
          <Popover buttonType={popoverButtonType} variant={VARIANTS.PRIMARY} />
        )}
      </div>
      <div className="list-container">
        <ListBrand brand={BRAND} />
      </div>
      <div className="product-container">
        <h3 className="product-title">{productCount} Phones</h3>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
