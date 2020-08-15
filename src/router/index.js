import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'
import Services from '../views/Services.vue'
import Blog from '../views/Blog.vue'
import Comments from '../views/Comments'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/blog/:post',
  name: 'Blog',
  component: Blog,
  children: [
    {
      path: 'comentarios',
      name: 'Comments',
      component: Comments
    }
  ]
},
{
  path: '/contact',
  name: 'Contacto',
  component: Contact
},
{
  path: '/servicios',
  name: 'services',
  component: Services,
  redirect: '/experiencias'
},
{
  path: '/experiencias',
  name: 'Experience',
  component: Services
},
{
  path: '/*',
  name: 'NotFound',
  component: NotFound
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
