import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { colors, ColorsType } from '../../types/Colors';
import { DetailsProduct } from '../../types/DetailsProduct';
import './colors-list.scss';

type Props = {
  product: DetailsProduct;
  pathname: string;
};

export const ColorsList: FC<Props> = ({ product, pathname }) => {
  return (
    <>
      {product.colorsAvailable.map((color) => {
        const isSelected = product.color === color;
        const path = pathname.replace(product.color, color);
        const bgcColor = colors[color as keyof ColorsType];

        return (
          <Link
            to={{ pathname: `${path}` }}
            title={color}
            className={classNames('colors-list', {
              'colors-list--active': isSelected,
            })}
            key={color}
            style={{ background: `${bgcColor}` }}
          />
        );
      })}
    </>
  );
};
