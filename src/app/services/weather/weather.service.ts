import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";

import { SourceModel } from "src/app/models/source/source.model";
import { Globals } from "src/app/utils/globals/globals.util";

import { from } from "rxjs";
import { map } from "rxjs/operators";
import { WeatherModel } from "src/app/models/weather/weather.model";

@Injectable({ providedIn: "root" })
export class WeatherService {
  sourceEndpoint = "observations/v0.jsonld?";

  constructor(private http: HTTP) {}

  getWeather(sourceId: string, fromDate: string, toDate: string) {
    const endpoint =
      this.sourceEndpoint +
      "sources=" +
      sourceId +
      "&referencetime=" +
      fromDate +
      "/" +
      toDate +
      "&elements=air_temperature,wind_speed,boolean_fair_weather(cloud_area_fraction P1D)";
    return from(
      this.http.get(Globals.APIURL + endpoint, null, Globals.headerOptions)
    ).pipe(
      map(weathers => JSON.parse(weathers.data)),
      map(weathers =>
        weathers.data.map((weather: WeatherModel) => new WeatherModel(weather))
      )
    );
  }
}
