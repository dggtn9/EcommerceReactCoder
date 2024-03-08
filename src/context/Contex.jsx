import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { products } from '../components/products';

export const Context = createContext();

export const ShoppingCartProvider = ({ children }) => {

    
    const [items, setItems] = useState(products);

   
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const detailItem = localStorage.getItem('productDetail');
    const productDetail = detailItem ? JSON.parse(detailItem) : {};

    const [showProductDetail, setShowProductDetail] = useState(productDetail);
    localStorage.setItem('productDetail', JSON.stringify(showProductDetail));


    // Carrito compras traer
    const item = localStorage.getItem('comprarSaludable');
    const result = item ? JSON.parse(item) : [];

    // Carrito compras enviar
    const [cartProducts, setCartProducts] = useState(result);
    useEffect(() => {
        localStorage.setItem('comprarSaludable', JSON.stringify(cartProducts));
    }, [cartProducts]);

  
    const itemsOrder = localStorage.getItem('checkout');
    const resultOrders = itemsOrder ? JSON.parse(itemsOrder) : [];

    const [order, setOrder] = useState(resultOrders);
    useEffect(() => {
        localStorage.setItem('checkout', JSON.stringify(order));
    }, [order]);


    const [filteredItems, setFilteredItems] = useState(null);


    const [searchByTitle, setSearchByTitle] = useState(null);
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

  
    const [searchByCategory, setSearchByCategory] = useState(null);
    const filteredItemsByCategory = (items, searchByCategory) => {
       
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }




    useEffect(() => {
        const filteredBy = (searchType, items, searchByTitle, searchByCategory) => {
            if (searchType === 'BY_TITLE') {
                return filteredItemsByTitle(items, searchByTitle);
            }

            if (searchType === 'BY_CATEGORY') {
                return filteredItemsByCategory(items, searchByCategory);
            }

            if (searchType === 'BY_TITLE_AND_CATEGORY') {
                return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
            }

            if (!searchType) {
                return items;
            }
        }

        if (searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filteredBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filteredBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

    return (
        <Context.Provider value={{
            items,
            setItems,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            showProductDetail,
            setShowProductDetail,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            productsCount: cartProducts.length,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            filteredItems,
            searchByTitle,
            setSearchByTitle,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </Context.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.object
}