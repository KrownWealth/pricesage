"use client"

import React from 'react';
import AddProductModal from './addProductModal';
import EditProductModal from './editProductModal';
import AddProductPageHead from '../Headings/productPageHead';
import { ProductType } from '@/types';

interface ModalManagerProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: ProductType | null;
  activeModal: 'add' | 'edit' | null;
  handleAddProductOpen: () => void; 
}

const ModalManager: React.FC<ModalManagerProps> = ({ isModalOpen, setIsModalOpen, selectedProduct, activeModal, handleAddProductOpen }) => {
  return (
    <>
      <AddProductPageHead
        setIsModalOpen={() => setIsModalOpen(true)}
        handleAddProductOpen={handleAddProductOpen} 
        pageTitle='Products'
        btnText='Add Product'
      />
      {isModalOpen && activeModal === 'add' && (
        <AddProductModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      {isModalOpen && activeModal === 'edit' && selectedProduct && (
        <EditProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
          stock={selectedProduct.stock}
          category={selectedProduct.category}
        />
      )}
    </>
  );
};

export default ModalManager;
