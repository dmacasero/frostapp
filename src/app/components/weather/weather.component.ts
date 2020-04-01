import { Component, OnInit, Input } from "@angular/core";
import { SourceModel } from "src/app/models/source/source.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WeatherService } from "src/app/services/weather/weather.service";
import { ErrorService } from "src/app/services/error/error.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  @Input() source: SourceModel;
  dateRangeForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private weatherSrvc: WeatherService,
    private errorSrvc: ErrorService
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
      this.weatherSrvc.getWeather(this.source.id, fromDate, toDate).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    } catch (e) {
      this.errorSrvc.showError(
        "Please wait for the data to load first before trying to search"
      );
    }
  }
}
