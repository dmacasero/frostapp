import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";

import { SourceModel } from "src/app/models/source/source.model";
import { Globals } from "src/app/utils/globals/globals.util";

import { Observable, from, of } from "rxjs";
import { map } from "rxjs/operators";
import { HeaderUtil } from "src/app/utils/header/header.util";

@Injectable({ providedIn: "root" })
export class SourceService {
  sourceEndpoint =
    "sources/v0.jsonld?types=SensorSystem&country=NO&municipality=HALDEN";

  constructor(private headerUtil: HeaderUtil, private http: HTTP) {}

  getSource() {
    Globals.headerOptions = this.headerUtil.getHeader(Globals.clientID);
    return from(
      this.http.get(
        Globals.APIURL + this.sourceEndpoint,
        null,
        Globals.headerOptions
      )
    ).pipe(
      map(sources => JSON.parse(sources.data)),
      map(sources =>
        sources.data.map((source: SourceModel) => new SourceModel(source))
      )
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
