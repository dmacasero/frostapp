import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorService } from "src/app/services/error/error.service";

@Injectable({ providedIn: "root" })
export class HeaderUtil {
  constructor(private errorSrvc: ErrorService) {}

  getHeader(username: string, password?: string) {
    const authorizationData = "Basic " + btoa(username + ":" + password);
    return {
      "Content-Type": "application/json",
      Authorization: authorizationData
    };
  }
}
