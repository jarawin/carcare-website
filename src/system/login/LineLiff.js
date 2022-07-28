import liff from '@line/liff';

class LineLiff {
  constructor(liffId = '1657308015-M5JnxzLX') {
    this.liffId = liffId;
    this.init(liffId);

    this.userData = {
      displayName: '',
      statusMessage: '',
      pictureUrl: '',
      userId: '',
      email: '',
    };
  }

  getUserData() {
    return this.userData;
  }

  setUserData() {
    liff.getProfile().then((profile) => {
      const email = liff.getDecodedIDToken().email;
      this.userData = {
        displayName: profile.displayName,
        statusMessage: profile.statusMessage,
        pictureUrl: profile.pictureUrl,
        userId: profile.userId,
        email,
      };
    });
  }

  init(liffId) {
    liff.init(
      { liffId },
      () => {
        if (liff.isInClient()) {
          if (!liff.isLoggedIn()) {
            this.login();
          }
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  logout() {
    liff.logout();
    window.location.reload();
  }

  login() {
    if (!liff.isLoggedIn()) {
      this.login();
    }
  }
}

export default new LineLiff();
