import { Helmet } from 'react-helmet';
import { Page } from './pages/Page';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/svg" href="new/favicon.svg" />
      </Helmet>
      <Page />
    </div>
  );
};
