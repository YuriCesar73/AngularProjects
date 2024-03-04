import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpointUrl =  "https://www.youtube.com/redirect?event=live_chat&redir_token=QUFFLUhqbmVKbkFPZ3h1QUxtT01GcEI3c1FlNzVKOXFVQXxBQ3Jtc0tuY3dxbGV5bTFOSEU0M0pMYWVRLWtFcHRtUzNtVFdUeUdoMTl5RGVVaDZWTXk4dUVkOEc4SVBmMWtiTExGNW9oQ3dXMl9oSkJKSEFOTWgzTmhaMmI0YVBlYkNfUzNXcURaUFFhSUVNZDE3MlUzYVFIQQ&q=https%3A%2F%2Ffaed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws%2F%27%3B"

  constructor(private http: HttpClient) { }


  sendData(name: string, email: string): Observable<NewsletterResponse>{
    const data = {name, email};

    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }
}
