class User {
  constructor() {
    this.isAdmin = false;
    this.isLogin = false;
    this.profile = {
      name: 'Tom',
      rank: 'Silver',
      position: 'Manager account',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
  }

  setIsAdmin(isAdmin = !this.isAdmin) {
    this.isAdmin = isAdmin;
    return { ok: true };
  }

  setIsLogin(isLogin = !this.isLogin) {
    this.isLogin = isLogin;
    return { ok: true };
  }

  handleLogin(app) {
    if (app) {
      console.log('Logged in by', app);
      this.setIsLogin(true);
    } else {
      console.log('Logout');
      this.setIsLogin(false);
    }
  }
}

export default new User();
