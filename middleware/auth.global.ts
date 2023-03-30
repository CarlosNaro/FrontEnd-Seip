function checkAdmin(to, from, next) {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const roles = localStorage.getItem('roles')
    if (isAuthenticated && roles && roles.includes('admin')) {
      next()
    } else {
      next('/unauthorized')
    }
  }