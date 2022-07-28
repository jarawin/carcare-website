import user from './user';
import page from './page';

class Data {
  constructor() {
    this.user = user;
    this.page = page;
  }

  handleAdminMode() {
    if (this.user.isAdmin && this.user.isLogin) {
      return this.page.setIsAdminMode();
    } else {
      return { ok: false };
    }
  }

  
}

export default new Data();
