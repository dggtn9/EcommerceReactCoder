import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';
import { Inicio, NoSeEncontro, MisPedidos, DetalleProducto, CarritoCompras, Pedido, UltimoPedido } from '../';
import { NavBar, Footer, CheckoutSideMenu } from '../../components';
import './App.css';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Inicio /> },
        { path: '/Frutas secas', element: <Inicio /> },
        { path: '/Lacteos', element: <Inicio /> },
        { path: '/Bebidas', element: <Inicio /> },
        { path: '/Especies', element: <Inicio /> },
        { path: '/Frutas', element: <Inicio /> },
        // { path: '/account', element: <Account /> },
        { path: '/cart-shopping', element: <CarritoCompras /> },
        { path: 'misPedidos/ultimo', element: <UltimoPedido /> },
        { path: 'misPedidos/:id', element: <Pedido /> },
        { path: 'misPedidos', element: <MisPedidos /> },
        // { path: '/sign-in', element: <Signin /> },
        { path: '/*', element: <NoSeEncontro /> },
        { path: '/product/:id', element: <DetalleProducto /> }
    ]);

    return routes;
}

export const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <NavBar />
                <Footer />
                <CheckoutSideMenu />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
};