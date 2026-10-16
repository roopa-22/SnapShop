import { HttpInterceptorFn } from '@angular/common/http';
import { BASE_API_URL } from './config/baseApi';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwt = localStorage.getItem('jwt');

  const isOwnApi = req.url.startsWith(BASE_API_URL);
  const isAuthCall = req.url.includes('/auth/');

  if (jwt && isOwnApi && !isAuthCall) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${jwt}` }
    });
  }

  return next(req);
};