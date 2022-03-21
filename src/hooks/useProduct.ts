import { useEffect, useRef, useState } from 'react';
import {
  InitialValues,
  IOnchangeArgs,
  IProduct,
} from '../interfaces/interfaces';

interface IUseProductArgs {
  onChange?: (args: IOnchangeArgs) => void;
  product: IProduct;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: IUseProductArgs) => {
  const [counter, setCounter] = useState<number>(
    initialValues?.count ?? value
  );
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = initialValues?.maxCount
      ? Math.min(
          Math.max(counter + value, 0),
          initialValues.maxCount
        )
      : Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count ?? value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.maxCount &&
      initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  };
};
