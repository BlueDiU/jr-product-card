import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import React, { createContext, CSSProperties } from 'react';
import {
  InitialValues,
  IOnchangeArgs,
  IProduct,
  IProductCardHandlers,
  IProductContextProps,
} from '../interfaces/interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProps {
  product: IProduct;
  // children?: ReactElement | ReactElement[];
  children: (args: IProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnchangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: IProps) {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <section className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount,
          product,
          isMaxCountReached,
          increaseBy,
          reset,
        })}
      </section>
    </Provider>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
