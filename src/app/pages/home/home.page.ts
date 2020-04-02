import { Component, OnInit } from "@angular/core";
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
    private sourceSrvc: SourceService,
    private loader: LoaderUtil,
    private errorSrvc: ErrorService
  ) {}

  ngOnInit(): void {
    this.getSources();
  }

  getSources(): void {
    this.loader
      .showLoader("Loading Sources...")
      .subscribe((load: HTMLIonLoadingElement) => {
        load.present();
        this.sourceSrvc.getSource().subscribe(
          res => {
            this.sources = res;
          },
          err => {
            this.errorSrvc.showError(err.error);
          },
          () => load.dismiss()
        );
      });
  }

  toSourceDetail(source: SourceModel): string {
    return `${SourceDetailsRoutingKeys.BASE}/${source.id}`;
  }
}
