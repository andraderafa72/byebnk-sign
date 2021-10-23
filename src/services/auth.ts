export const isAuthenticated = (cookies: any) => {
  const tokenString = cookies['byebnk@token']

  if (!tokenString) {
    return false;
  } else {
    return true;
  }
}