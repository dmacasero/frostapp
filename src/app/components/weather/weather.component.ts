import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SourceModel } from "src/app/models/source/source.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WeatherService } from "src/app/services/weather/weather.service";
import { ErrorService } from "src/app/services/error/error.service";
import { LoaderUtil } from "src/app/utils/loader/loader.util";
import { WeatherModel } from "src/app/models/weather/weather.model";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  @Input() source: SourceModel;
  @Output() weather = new EventEmitter<WeatherModel[]>();
  dateRangeForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private weatherSrvc: WeatherService,
    private errorSrvc: ErrorService,
    private loader: LoaderUtil
  ) {
    this.dateRangeForm = formBuilder.group({
      fromDate: [new Date().toISOString(), Validators.required],
      toDate: [new Date().toISOString(), Validators.required]
    });
  }

  ngOnInit() {}

  search() {
    const fromDate = this.dateRangeForm.value.fromDate.split("T")[0];
    const toDate = this.dateRangeForm.value.toDate.split("T")[0];
    try {
      this.loader
        .showLoader("Searching...")
        .subscribe((load: HTMLIonLoadingElement) => {
          load.present();
          this.weatherSrvc
            .getWeather(this.source.id, fromDate, toDate)
            .subscribe(
              res => this.weather.emit(res),
              err => this.errorSrvc.showError(err.error),
              () => load.dismiss()
            );
        });
    } catch (e) {
      this.errorSrvc.showError(e);
    }
  }
}
