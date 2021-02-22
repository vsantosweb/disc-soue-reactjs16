/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| As rotas HTTP são pontos de entrada para seu aplicativo Web. Você pode criar
| rotas para diferentes URLs e vincular componentes, icones e titulos a elas, além de 
| além de poder definir se a rota é privada ou se ela possui rotas secuntaráis.
|
*/

import Home from '../app/pages/home';
import Contact from '../app/pages/contact';
import Login from '../app/pages/auth/login';
import CustomerIndex from '../app/pages/customers/CustomerIndex';
import CustomerShow from '../app/pages/customers/CustomerShow';
import Error404 from '../app/pages/errors/404';
import DiscSession from '../app/pages/disc/DiscSession';
import DiscIndex from '../app/pages/disc/DiscIndex';
import DiscDemograph from '../app/pages/disc/DiscDemograph';
import DiscQuestions from '../app/pages/disc/DiscQuestions';


const routes = [

  {
    path: '/login',
    name: 'login',
    icon: null,
    component: Login,
    private: false,
    exact: false,
    layout: 'AuthLayout'
  },

  {
    path: '/',
    name: 'Home',
    icon: null,
    component: Home,
    private: true,
    exact: true,
    layout: 'AppLayout',
    children: [
      {
        name: 'Create Customer',
        path: '/customers',
        component: CustomerIndex,
        exact: true,
        private: true,
        layout: 'AppLayout',

      },
      {
        name: 'Show Customer',
        path: '/customers/:id',
        component: CustomerShow,
        exact: false,
        private: true,
        layout: 'AppLayout',
      }
    ]
  },
  {
    path: '/contato',
    name: 'contato',
    icon: null,
    component: Contact,
    private: true,
    exact: false,
    layout: 'AppLayout',
  },
  {
    path: '/disc',
    name: 'Disc',
    icon: null,
    component: DiscIndex,
    private: false,
    exact: true,
    layout: 'AppLayout',
    children: [
      {
        path: '/disc/session/:token/:disc_uuid',
        name: 'contato',
        icon: null,
        component: DiscSession,
        private: false,
        exact: true,
        layout: 'AppLayout',

      },
      {
        path: '/disc/pesquisa-demografica',
        name: 'Pesquisa Demográfica',
        icon: null,
        component: DiscDemograph,
        private: false,
        exact: true,
        layout: 'AppLayout',

      },
      {
        path: '/disc/avaliacao',
        name: 'Avaliação',
        icon: null,
        component: DiscQuestions,
        private: false,
        exact: true,
        layout: 'AppLayout',

      }
    ]
  },
];

export default routes;