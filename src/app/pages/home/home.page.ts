import { Component, OnInit } from "@angular/core";
import { HeaderUtil } from "src/app/utils/header/header.util";
import { Globals } from "src/app/utils/globals/globals.util";
import { SourceService } from "src/app/services/source/source.service";
import { ErrorService } from "src/app/services/error/error.service";
import { SourceModel } from "src/app/models/source/source.model";
import { LoaderUtil } from "src/app/utils/loader/loader.util";
import { SourceDetailsRoutingKeys } from "../source-details/souce-details.routing.keys";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public sources: SourceModel[] = [];

  constructor(
    private headerUtil: HeaderUtil,
    private sourceSrvc: SourceService,
    private loader: LoaderUtil,
    private errorSrvc: ErrorService
  ) {}

  ngOnInit(): void {
    this.getSources();
    // throw new Error("Method not implemented.");
  }

  getSources(): void {
    this.loader
      .showLoader("Loading Sources...")
      .subscribe((load: HTMLIonLoadingElement) => {
        load.present();
        const header = this.headerUtil.getHeader(Globals.clientID);
        this.sourceSrvc.getSource(header).subscribe(
          res => {
            this.sources = res;
            load.dismiss();
          },
          err => {
            load.dismiss();
          }
        );
      });
  }

  toSourceDetail(source: SourceModel): string {
    return `${SourceDetailsRoutingKeys.BASE}/${source.id}`;
  }
}
