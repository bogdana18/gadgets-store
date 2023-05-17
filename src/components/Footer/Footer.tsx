import classNames from 'classnames';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import arrowUp from '../../assets/svg/arrowUp.svg';
import { Pathname } from '../../types/Pathname';
import './footer.scss';

export const Footer = memo(() => {
  const scrollToTop = () => {
    document.querySelector('.header')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isHidenBtnToTop = useLocation().pathname === Pathname.Cart;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <Logo />
          <ul className="footer__list">
            <li className="footer__item">
              <Link
                to="https://github.com/bogdana18"
                target="_blank"
                className="footer__link"
                rel="noreferrer"
              >
                github
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="/contacts"
                target="_blank"
                className="footer__link"
                rel="noreferrer"
              >
                contacts
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to="https://t.me/lexusenko"
                target="_blank"
                className="footer__link"
                rel="noreferrer"
              >
                rights
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className={classNames('footer__button button-square', {
              'footer__button--hiden': isHidenBtnToTop,
            })}
            onClick={scrollToTop}
          >
            <img src={arrowUp} alt="arrowUp" />
          </button>
        </div>
      </div>
    </footer>
  );
});
