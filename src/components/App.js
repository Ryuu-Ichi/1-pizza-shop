import { Route } from 'react-router';
import Header from './Header';
import Cart from './pages/Cart';
import Main from './pages/Main';

import '../scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
