import React from 'react';
import { XMarkIcon, PlusIcon, MinusIcon,TrashIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../contexts/CartContext';

const Cart = () => {
    const {
        isCartOpen,
        closeCart,
        cartItems,
        updateQuantity,
        removeItem,
        totalPrice,
    } = useCart();

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            const checkoutUrl = 'https://www.steadyrack.com/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUpOWVRLWUozUEEwUDJRM0VUUDlLVjZCSw/information';
            window.location.href = checkoutUrl;
        } else {
            alert("Your cart is empty. Please add items before checking out.");
        }
    };

    return (
        <div
            className={`fixed inset-0 overflow-hidden transition-opacity z-50 ${
                isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div
                className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                onClick={closeCart}
            ></div>

            <div className="fixed inset-y-0 right-0 pl-0 sm:pl-10 max-w-full flex ">
                <div
                    className={`w-screen max-w-sm sm:max-w-md transform transition ease-in-out duration-500 sm:duration-700 ${
                        isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="h-full flex flex-col bg-white rounded-2xl shadow-xl m-2">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 ">
                            <div className="flex items-start justify-between">
                                <h2 className="text-sm font-bold text-gray-900">CART</h2>
                                <div className="ml-3 h-7 flex items-center">
                                    <button
                                        onClick={closeCart}
                                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                    >
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon className="h-6 w-6 text-black" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    {cartItems.length === 0 ? (
                                        <p className="text-gray-500 text-center py-6">Your cart is empty</p>
                                    ) : (
                                        <ul className="-my-6 divide-y divide-gray-200">
                                            {cartItems.map((item) => (
                                                <li key={item.id} className="py-6 flex flex-col sm:flex-row">
                                                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                                                        <img
                                                            src={item.primaryImage}
                                                            alt={item.name}
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>

                                                    <div className="ml-0 sm:ml-4 flex-1 flex flex-col">
                                                        <div>
                                                            <div className="flex justify-between">
                                                                <h3 className='text-sm font-bold text-gray-900'>{item.name}</h3>
                                                                <button
                                                                    onClick={() => removeItem(item.id)}
                                                                    className="font-medium text-gray-600"
                                                                >
                                                                    <TrashIcon className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="flex justify-between font-medium text-gray-500">
                                                            <p>{item.selectedSize || 'N/A'}</p>
                                                        </div>

                                                        <div className="flex-1 flex items-end justify-between text-sm">
                                                            <div className="flex items-center border">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                    disabled={item.quantity <= 1}
                                                                    className="px-2 py-1 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                                                                >
                                                                    <MinusIcon className="h-4 w-4" />
                                                                </button>
                                                                <span className="px-2 py-1 border text-gray-900">{item.quantity}</span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                    className="px-2 py-1 text-gray-600 hover:text-gray-700"
                                                                >
                                                                    <PlusIcon className="h-4 w-4" />
                                                                </button>
                                                            </div>

                                                            <div className="flex mt-2 sm:mt-0">
                                                                <p className="ml-4">
                                                                    $ {isNaN(parseFloat(item.price.replace('$', '').trim()))
                                                                        ? '0.00'
                                                                        : parseFloat(item.price.replace('$', '').trim()).toFixed(2)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='my-2'>
                            <h1 className='text-center font-semibold tracking-tight text-black'>You May Also Like</h1>
                        </div>

                        {cartItems.length > 0 && (
                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base">
                                    <p className=' font-bold'>Subtotal ({totalItems} items)</p>
                                    <p className=' font-bold'>$ {totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="mt-6">
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-xl font-bold text-white bg-black hover:bg-red-600"
                                    >
                                        <LockClosedIcon className="w-6 h-6" />Checkout
                                    </button>
                                </div>
                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;