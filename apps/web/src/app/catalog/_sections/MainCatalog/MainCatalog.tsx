import React from 'react';

import { cn } from '@/lib/utils/cn';
import { IProduct } from '@/app/catalog/_sections/MainCatalog/i-product';

import { MoreProductsCard } from './components/MoreProductsCard';
import { ProductCard } from './components/ProductCard';

import styles from './MainCatalog.module.css';

export const MainCatalog: React.FC<{ products: IProduct[] }> = ({
  products = [],
}) => {
  return (
    <section className={cn('border-t border-y-[#ebebeb]', 'md:border-none')}>
      <h1
        className={cn(
          'content-container',
          'py-[26px] md:py-[64px] lg:py-[74px]',
          'text-[36px] leading-none md:text-[60px]'
        )}
      >
        Каталог продукции
      </h1>
      <ul
        className={cn(
          `${styles['catalog-container']}`,
          'md:grid md:grid-cols-2 md:gap-[60px]',
          'xl:gap-x-20 xl:grid-cols-4 xl:gap-y-[60px]'
        )}
      >
        {products?.length > 0 &&
          products
            .sort((a, b) => a.id - b.id)
            .map(
              (
                {
                  productBrand,
                  productPrice,
                  image,
                  productCategory,
                  productWeight,
                  productTaste,
                  id,
                },
                index
              ) => (
                <li key={id}>
                  <ProductCard
                    id={id}
                    image={image}
                    productBrand={productBrand}
                    productCategory={productCategory}
                    productWeight={productWeight}
                    productTaste={productTaste}
                    productPrice={productPrice}
                    priority={index < 3}
                  />
                </li>
              )
            )}
        <MoreProductsCard />
      </ul>
    </section>
  );
};
