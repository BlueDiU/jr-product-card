# DO-Product-Card

Paquete de pruebas para desplegar en NPM

### BLUEDIU

## Ejemplo

```
import { ProductImage, ProductTitle, ProductButtons } from 'product-card';
```

```
    <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          reset,
          count,
          increaseBy,
          isMaxCountReached,
          maxCount,
        }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
    </ProductCard>
```
