import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";

import { SourceModel } from "src/app/models/source/source.model";
import { Globals } from "src/app/utils/globals/globals.util";

import { Observable, from, of } from "rxjs";
import { map, find } from "rxjs/operators";
import { HeaderUtil } from "src/app/utils/header/header.util";

@Injectable({ providedIn: "root" })
export class SourceService {
  sourceEndpoint =
    "sources/v0.jsonld?types=SensorSystem&country=NO&municipality=HALDEN";

  constructor(private http: HTTP, private headerUtil: HeaderUtil) {}

  getSource() {
    const header = this.headerUtil.getHeader(Globals.clientID);
    return from(
      this.http.get(Globals.APIURL + this.sourceEndpoint, null, header)
    ).pipe(
      map((sources: any) => {
        return JSON.parse(sources.data);
      }),
      map(sources => {
        return sources.data.map(
          (source: SourceModel) => new SourceModel(source)
        );
      })
    );
  }

  getSourceById(id: string): Observable<SourceModel> {
    return this.getSource().pipe(
      map((sources: SourceModel[]) =>
        sources.find((source: SourceModel) => source.id == id)
      )
    );
  }
}
// https://frost.met.no/observations/v0.jsonld?sources=SN18700&referenc
// etime=2019-11-25/2019-11-
// 25&elements=air_temperature,wind_speed,boolean_fair_weather(clou
// d_area_fraction P1D)
