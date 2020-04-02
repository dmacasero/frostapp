import { Component, OnInit } from "@angular/core";
import { HomeRoutingKeys } from "../home/home-routing.keys";
import { Subscription, Observable } from "rxjs";
import { SourceService } from "src/app/services/source/source.service";
import { ActivatedRoute } from "@angular/router";
import { ErrorService } from "src/app/services/error/error.service";
import { SourceDetailsRoutingKeys } from "./souce-details.routing.keys";
import { SourceModel } from "src/app/models/source/source.model";
import { LoaderUtil } from "src/app/utils/loader/loader.util";
import { WeatherModel } from "src/app/models/weather/weather.model";
import { ObservationModel } from "src/app/models/observation/observation.model";

@Component({
  selector: "app-source-details",
  templateUrl: "./source-details.page.html",
  styleUrls: ["./source-details.page.scss"]
})
export class SourceDetailsPage implements OnInit {
  homeUrl = HomeRoutingKeys.BASE;
  private subs = new Subscription();
  source: SourceModel;
  weather: WeatherModel[] = [];
  constructor(
    private route: ActivatedRoute,
    private sourceSrvc: SourceService,
    private loader: LoaderUtil,
    private errorSrvc: ErrorService
  ) {}

  ngOnInit() {
    this.subs.add(this.parseURL());
  }

  private parseURL(): Subscription {
    return this.route.paramMap.subscribe(params => {
      const sourceId = params.get(SourceDetailsRoutingKeys.PARAM_SOURCE);
      this.loader
        .showLoader("Getting Source Info...")
        .subscribe((load: HTMLIonLoadingElement) => {
          load.present();
          this.retrieveOpp(sourceId).subscribe(
            source => {
              this.source = source;
            },
            err => {
              this.errorSrvc.showError(err.error);
            },
            () => load.dismiss()
          );
        });
    });
  }

  private retrieveOpp(sourceId: string): Observable<SourceModel> {
    return this.sourceSrvc.getSourceById(sourceId);
  }

  loadWeather(e: WeatherModel[]) {
    this.weather = e;
    console.log(e);
  }

  getIcon(obs: ObservationModel): string {
    if (obs && obs.elementId.indexOf("boolean_fair_weather")) {
      return obs.value === 0 ? "cloud" : "sunny";
    } else {
      return "partly-sunny";
    }
  }
}
