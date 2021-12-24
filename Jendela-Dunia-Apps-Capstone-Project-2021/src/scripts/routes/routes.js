import Home from '../views/pages/home';
import Wishlist from '../views/pages/wishlist';
import Progress from '../views/pages/proggres';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/wishlist': Wishlist,
  '/progress': Progress,
  '/about-us': About,
  '/detail/:id': Detail,
};

export default routes;
