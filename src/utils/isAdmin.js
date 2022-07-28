export default (position) => {
  if (position) {
    switch (position) {
      case 'manager':
        return true;
      case 'employee':
        return true;
      case 'owner':
        return true;
      default:
        return false;
    }
  } else {
    return false;
  }
};
