import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { from, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class LoaderUtil {
  constructor(public loadingController: LoadingController) {}

  showLoader(text: string): Observable<HTMLIonLoadingElement> {
    const loading = from(
      this.loadingController.create({
        message: "Please wait...",
        duration: 2000
      })
    );
    return loading;
  }
}
