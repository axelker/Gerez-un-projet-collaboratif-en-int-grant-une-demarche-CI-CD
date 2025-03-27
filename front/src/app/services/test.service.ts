import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TestService {

    public getTestMethod(a:number,b:number) {
        let test = a * b;

        test = a * b;
        test = a * b;
        test = a * b;
        test = a * b;
        test = a * b;
        test = a * b;
        test = a * b;
        if (test > 3 ) {
            return a + b;
        }

        return b;
    }

}