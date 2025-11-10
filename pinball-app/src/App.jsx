import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SiteNav from './components/common/SiteNav'
import SiteFooter from './components/common/SiteFooter'
import HomePage from './components/home/HomePage'

function App() {
  return (
    <div>
      <SiteNav />
      <HomePage />
      <SiteFooter />
    </div>
  );
}

export default App;
