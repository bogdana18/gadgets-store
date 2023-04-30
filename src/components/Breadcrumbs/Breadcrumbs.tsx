import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';

export const Breadcrumbs = () => {
  // Use the `useLocation` hook to get the current page's URL and split it into crumbs
  const crumbs = useLocation()
    .pathname.split('/')
    .filter((crumb) => crumb !== '');

  let currentLink = '';

  // Render the Breadcrumbs component
  return (
    <div className="breadcrumbs">
      {/* Render a link to the homepage */}
      <Link to="/" className="breadcrumbs__home" />

      {/* Map over the crumbs and render a link for each */}
      {crumbs.map((crumb, index) => {
        // Transform the crumb into a title by replacing '-' with ' '
        const title = crumb.split('-').join(' ');

        // Update the currentLink variable with the current crumb
        currentLink += `/${crumb.toLowerCase()}`;

        // Render a link for the current crumb
        return (
          <Link
            to={`${currentLink}`}
            key={crumb}
            className={classNames('breadcrumbs__link', {
              'breadcrumbs__link--disabled': index === crumbs.length - 1,
            })}
          >
            {/* Display the crumb title */}
            {title}
          </Link>
        );
      })}
    </div>
  );
};
