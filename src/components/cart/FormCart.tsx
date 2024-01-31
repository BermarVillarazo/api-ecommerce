"use client";

import { ReactNode } from "react";

type FormCartProps = {
    addProduct: number;
    handleAddProduct: () => void;
    handleRemoveProduct: () => void;
};

export default function FormCart({
    addProduct,
    handleAddProduct,
    handleRemoveProduct,
}: FormCartProps) {
    function handleAddOrRemoveProduct(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleAddOrRemoveProduct}>
            <div className="flex flex-col justify-center items-center gap-3">
                <label className="text-cyan-50">Quantity {addProduct}</label>

                <div className="flex gap-3">
                    <RemoveProduct handleRemoveProduct={handleRemoveProduct}>-</RemoveProduct>
                    <AddProduct handleAddProduct={handleAddProduct}>+</AddProduct>
                </div>
            </div>
        </form>
    );
}

function AddProduct({
    handleAddProduct,
    children,
}: {
    handleAddProduct: () => void;
    children: ReactNode;
}) {
    return (
        <button
            onClick={handleAddProduct}
            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        >
            {children}
        </button>
    );
}

function RemoveProduct({
    handleRemoveProduct,
    children,
}: {
    handleRemoveProduct: () => void;
    children: ReactNode;
}) {
    return (
        <button
            onClick={handleRemoveProduct}
            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        >
            {children}
        </button>
    );
}
