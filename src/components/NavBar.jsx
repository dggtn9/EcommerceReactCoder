import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {

    const context = useContext(Context);

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light fondo'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/' onClick={() => context.setSearchByCategory()}>Dietetica Consciente</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Todos Los productos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/FrutasSecas'
                        onClick={() => context.setSearchByCategory('laptops')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Frutas Secas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Lacteos'
                        onClick={() => context.setSearchByCategory('tablets')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Lacteos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Bebidas'
                        onClick={() => context.setSearchByCategory('cameras')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Bebidas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Especias'
                        onClick={() => context.setSearchByCategory('headphones')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Especies
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Frutas'
                        onClick={() => context.setSearchByCategory('cellphones')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Frutas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='misPedidos' className={({ isActive }) => isActive ? activeStyle : undefined}>Mis pedidos</NavLink>
                </li>
                <li className='flex'>
                    <NavLink to='/cart-shopping' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        <ShoppingCartIcon className='h-5 w-5 text-black'></ShoppingCartIcon>
                    </NavLink>
                    {
                        context.productsCount === 0 ?
                            <div className='flex justify-center items-center text-xs font-semibold'>{context.productsCount}</div>
                            :
                            <div className='flex justify-center items-center bg-green-100 w-5 h-5 rounded-full text-xs font-semibold'>{context.productsCount}</div>
                    }
                </li>
            </ul>
        </nav>
    )
};