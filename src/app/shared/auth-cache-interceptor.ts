import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of, tap } from "rxjs"
import { environment } from "../../environments/environment";

// 1. adds authentication headers to the requests
// 2. implements the caching mechanism
@Injectable()
export class AuthCacheInterceptor implements HttpInterceptor {

  // store all the received http responses based on the complete url
  cache = new Map<string, HttpResponse<any>>();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.cache.get(req.urlWithParams);

    if(cachedResponse) { 
        // response found in cache
        return of(cachedResponse.clone());
    } else {
      // add authentication headers
      const newReq = req.clone({ 
        headers: req.headers.append('x-rapidapi-host', environment.apiHost)
                            .append('x-rapidapi-key', environment.apiKey)
      });

      return next.handle(newReq).pipe(
          tap(stateEvent => {
              if(stateEvent instanceof HttpResponse) {
                  // store response in the cache
                  this.cache.set(req.urlWithParams, stateEvent.clone());
              }
          })
      );
    }
  }    
}