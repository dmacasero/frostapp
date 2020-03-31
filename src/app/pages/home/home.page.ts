import { Component, OnInit } from "@angular/core";
import { HeaderUtil } from "src/app/utils/header/header.util";
import { Globals } from "src/app/utils/globals/globals.util";
import { SourceService } from "src/app/services/source/source.service";
import { ErrorService } from "src/app/services/error/error.service";
import { SourceModel } from "src/app/models/source/source.model";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public source: SourceModel[];

  constructor(
    private headerUtil: HeaderUtil,
    private sourceSrvc: SourceService,
    private errorSrvc: ErrorService
  ) {}

  ngOnInit(): void {
    this.getSources();
    // throw new Error("Method not implemented.");
  }

  getSources() {
    const header = this.headerUtil.getHeader(Globals.clientID);
    this.sourceSrvc.getSource(header).subscribe(e => {
      console.log(e);
      this.source = e;
    });
  }
}
