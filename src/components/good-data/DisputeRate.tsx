"use client";

import React from "react";
import {
  IAttribute,
  idRef,
  IMeasure,
  newAttribute,
  newMeasure,
  newPositiveAttributeFilter,
} from "@gooddata/sdk-model";
import { ComboChart, IChartConfig } from "@gooddata/sdk-ui-charts";

const primaryMeasures: IMeasure[] = [
  newMeasure(idRef("sessions", "fact"), (m) =>
    m
      .alias("Disputes")
      .format("#,##0")
      .localId("m_sessions_sum_ea142a59")
      .title("Sum of Sessions (Is dispute: true)")
      .aggregation("sum")
      .filters(
        newPositiveAttributeFilter(idRef("is_dispute", "displayForm"), {
          values: ["true"],
        })
      )
  ),
];
const secondaryMeasures: IMeasure[] = [
  newMeasure(idRef("dispute_rate", "measure"), (m) =>
    m.alias("Dispute Rate").localId("m_dispute_rate").title("dispute rate")
  ),
];
const viewBy: IAttribute[] = [
  newAttribute(idRef("day.day", "displayForm"), (a) => a.localId("a_day.day")),
];
const config: IChartConfig = {
  dataLabels: { visible: true },
  dualAxis: true,
  primaryChartType: "column",
  secondaryChartType: "line",
  secondary_yaxis: {
    measures: ["m_dispute_rate"],
    name: { visible: false },
  },
  xaxis: { name: { visible: false } },
  yaxis: { name: { visible: false } },
  colorPalette: [
    { guid: "1", fill: { r: 20, g: 178, b: 226 } },
    { guid: "2", fill: { r: 0, g: 193, b: 141 } },
    { guid: "3", fill: { r: 229, g: 77, b: 66 } },
    { guid: "4", fill: { r: 241, g: 134, b: 0 } },
    { guid: "5", fill: { r: 171, g: 85, b: 163 } },
    { guid: "6", fill: { r: 244, g: 213, b: 33 } },
    { guid: "7", fill: { r: 148, g: 161, b: 174 } },
    { guid: "8", fill: { r: 107, g: 191, b: 216 } },
    { guid: "9", fill: { r: 181, g: 136, b: 177 } },
    { guid: "10", fill: { r: 238, g: 135, b: 128 } },
    { guid: "11", fill: { r: 241, g: 171, b: 84 } },
    { guid: "12", fill: { r: 133, g: 209, b: 188 } },
    { guid: "13", fill: { r: 41, g: 117, b: 170 } },
    { guid: "14", fill: { r: 4, g: 140, b: 103 } },
    { guid: "15", fill: { r: 181, g: 60, b: 51 } },
    { guid: "16", fill: { r: 163, g: 101, b: 46 } },
    { guid: "17", fill: { r: 140, g: 57, b: 132 } },
    { guid: "18", fill: { r: 136, g: 219, b: 244 } },
    { guid: "19", fill: { r: 189, g: 234, b: 222 } },
    { guid: "20", fill: { r: 239, g: 197, b: 194 } },
  ],
  separators: { thousand: ",", decimal: "." },
  enableChartSorting: true,
  enableSeparateTotalLabels: true,
  enableJoinedAttributeAxisName: true,
  legend: { position: "auto" },
  dataPoints: { visible: "auto" },
};
const style = { height: 400 };

export function MyComponent() {
  return (
    <div style={style}>
      <ComboChart
        primaryMeasures={primaryMeasures}
        secondaryMeasures={secondaryMeasures}
        viewBy={viewBy}
        config={config}
      />
    </div>
  );
}
