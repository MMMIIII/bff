export function getToken(request: Request) {
  const authHeader = request.headers['authorization'];
  return authHeader && authHeader.split(' ')[1];
}
