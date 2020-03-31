import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";

import { SourceModel } from "src/app/models/source/source.model";
import { Globals } from "src/app/utils/globals/globals.util";

import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class SourceService {
  sourceEndpoint =
    "sources/v0.jsonld?types=SensorSystem&country=NO&municipality=HALDEN";

  constructor(private http: HTTP) {}

  getSource(headers: object) {
    return from(
      this.http.get(Globals.APIURL + this.sourceEndpoint, null, headers)
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
}
