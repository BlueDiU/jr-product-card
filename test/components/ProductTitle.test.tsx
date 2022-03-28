// import * as React from 'react';
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('must show the component correctly with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="custom-product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('must show the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
