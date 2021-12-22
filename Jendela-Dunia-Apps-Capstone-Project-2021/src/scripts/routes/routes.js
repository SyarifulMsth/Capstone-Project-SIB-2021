import Home from '../views/pages/home';
import Wishlist from '../views/pages/wishlist';
import Category from '../views/pages/category';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/wishlist': Wishlist,
  '/category': Category,
  '/about': About,
  '/detail/:id': Detail,
};

export default routes;
