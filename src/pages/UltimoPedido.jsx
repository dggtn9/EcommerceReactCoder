import { useContext } from 'react';
import { Layout, OrderCard } from '../components'
import { Context } from '../context';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { GoToTop } from '../utils';

export const UltimoPedido = () => {

    const context = useContext(Context);
    GoToTop();

    return (
        <Layout>
            <div className='flex justify-center items-center font-light w-1/2 relative'>
                <h1 className='mb-5 font-bold text-2xl'>Pedido</h1>
                <Link to='misPedidos' className='absolute right-0'>
                    <ChevronRightIcon className='h-4 w-4 text-black'></ChevronRightIcon>
                </Link>
            </div>
            <div className='w-1/2 mt-10'>
                {
                    context.order?.slice(-1)[0].products.map((prod) => (
                        <OrderCard
                            key={prod.id}
                            id={prod.id}
                            title={prod.title}
                            imageUrl={prod.images}
                            price={prod.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
};