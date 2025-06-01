import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
){
  //console.log(req.url);
  const authServ = inject(AuthenticationService)
  const token = authServ.getAuthToken();

  if (!token) {
    return next(req)
  }

  const finalRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(finalRequest);
}
