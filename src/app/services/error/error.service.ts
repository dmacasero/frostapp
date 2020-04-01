import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class ErrorService {
  private static VALIDATION_ERR = "FIELD_CUSTOM_VALIDATION_EXCEPTION";
  private static ERR_MSG_LEN = 80;
  constructor(private toastCtrl: ToastController) {}

  showError(error: any) {
    // TODO: add in rollbar logging later on
    console.error(error);
  }

  logError(error: any) {
    // TODO: add in rollbar logging later on
    console.error(error);
  }
}
