/**
 * Created by Crystal on 2018/10/24.
 */
// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    props: true, // 会把:id作为Todo这个组件的props传进去，而不用使用this.$route这个对象获取
    // props: (route) => ({id: route.query.b}),
    // path: '/app/:id', //  /app/xxxx
    path: '/app',
    component: () => import('../views/todo/todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: {
      title: 'this is title',
      description: 'this is description'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
