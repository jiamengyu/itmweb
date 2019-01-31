import { Injectable } from '@angular/core';

import { Metric, AnalyticsImpl } from "./analytics.interface";

@Injectable()
export class AnalyticsService {

    constructor(private impl: AnalyticsImpl ){
    }

    record(metric: Metric): void {
        this.impl.recordEvent(metric);
    }
}