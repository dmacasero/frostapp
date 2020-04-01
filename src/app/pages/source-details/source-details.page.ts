import { Component, OnInit } from "@angular/core";
import { HomeRoutingKeys } from "../home/home-routing.keys";
import { Subscription, Observable } from "rxjs";
import { SourceService } from "src/app/services/source/source.service";
import { ActivatedRoute } from "@angular/router";
import { ErrorService } from "src/app/services/error/error.service";
import { SourceDetailsRoutingKeys } from "./souce-details.routing.keys";
import { SourceModel } from "src/app/models/source/source.model";

@Component({
  selector: "app-source-details",
  templateUrl: "./source-details.page.html",
  styleUrls: ["./source-details.page.scss"]
})
export class SourceDetailsPage implements OnInit {
  homeUrl = HomeRoutingKeys.BASE;
  private subs = new Subscription();
  source: SourceModel;
  constructor(
    private route: ActivatedRoute,
    private sourceSrvc: SourceService,
    private errorSrvc: ErrorService
  ) {}

  ngOnInit() {
    this.subs.add(this.parseURL());
  }

  private parseURL(): Subscription {
    return this.route.paramMap.subscribe(params => {
      const sourceId = params.get(SourceDetailsRoutingKeys.PARAM_SOURCE);
      this.retrieveOpp(sourceId).subscribe(
        source => {
          this.source = source;
          console.log(source);
        },
        err => {
          this.errorSrvc.logError(err);
        }
      );
    });
  }

  private retrieveOpp(sourceId: string): Observable<SourceModel> {
    return this.sourceSrvc.getSourceById(sourceId);
  }
}
