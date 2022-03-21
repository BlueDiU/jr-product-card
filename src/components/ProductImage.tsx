import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface IProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className }: IProps) => {
  const { product } = useContext(ProductContext);

  const ImageToShow = img ? img : product.img ?? noImage;

  return (
    <img
      src={ImageToShow}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={styles}
    />
  );
};
