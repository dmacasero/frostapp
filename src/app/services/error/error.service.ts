import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class ErrorService {
  private static VALIDATION_ERR = "FIELD_CUSTOM_VALIDATION_EXCEPTION";
  private static ERR_MSG_LEN = 80;
  constructor(private toastCtrl: ToastController) {}

  async showError(error: any) {
    console.error(error);
    const toast = await this.toastCtrl.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }
}
