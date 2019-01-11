import { Injectable } from "@angular/core";
import { 
  HttpInterceptor, 
  HttpRequest, 
  HTTP_INTERCEPTORS,
  HttpHandler, 
  HttpResponse
} from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class RiaInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(req.url.includes('average_price')) {
      return of(new HttpResponse({
        body: {
          arithmeticMean: (Math.random() * 1000).toFixed(2)
        }
      }))
    }
      return next.handle(req);
  }
}

export const riaInterceptor = {
  provide: HTTP_INTERCEPTORS, 
  useClass: RiaInterceptor,
  multi: true
}
