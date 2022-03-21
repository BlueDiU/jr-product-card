import { IProps as IProductCardProps } from '../components/ProductCard';

import { IProps as IProductTitleProps } from '../components/ProductTitle';
import { IProps as IProductImageProps } from '../components/ProductImage';
import { IProps as IProductButtonsProps } from '../components/ProductButtons';

export interface IProduct {
  id: string;
  img?: string;
  title: string;
}

export interface IProductContextProps {
  counter: number;
  product: IProduct;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export interface IProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element;

  Title: (IProps: IProductTitleProps) => JSX.Element;

  Image: (IProps: IProductImageProps) => JSX.Element;

  Buttons: (IProps: IProductButtonsProps) => JSX.Element;
}

export interface IOnchangeArgs {
  product: IProduct;
  count: number;
}

/* Extender todas la propiedades de mi interfaz producto */
export interface IProductInCart extends IProduct {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;
  increaseBy: (value: number) => void;
  reset: () => void;
}
