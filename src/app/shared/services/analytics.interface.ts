export interface Metric {
    eventName: string;
    scope: string;
}

export interface AnalyticsImpl {
    recordEvent(metric: Metric): void;
}