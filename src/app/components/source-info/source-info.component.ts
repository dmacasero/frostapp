import { Component, OnInit, Input } from "@angular/core";
import { SourceModel } from "src/app/models/source/source.model";

@Component({
  selector: "app-source-info",
  templateUrl: "./source-info.component.html",
  styleUrls: ["./source-info.component.scss"]
})
export class SourceInfoComponent implements OnInit {
  @Input() source: SourceModel;

  constructor() {}

  ngOnInit() {
    console.log(this.source);
  }
}
