class Page {
  constructor() {
    this.isAdminMode = false;
    this.active = 'home';
  }

  setNavigation(navigation) {
    this.navigation = navigation;
    return { ok: true };
  }

  setIsAdminMode(isAdminMode = !this.active) {
    this.isAdminMode = isAdminMode;
    alert(
      isAdminMode
        ? 'Admin mode is deactived now.'
        : 'Admin mode is actived now.'
    );
    return { ok: true };
  }

  setActivePage(page = !this.active) {
    this.active = page;
    return { ok: true };
  }
}

export default new Page();
