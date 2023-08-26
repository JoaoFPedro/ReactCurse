import { ReactElement } from "react";

import ChartBar from "../../ChartBar";

interface DataPoint {
  value: number;
  dataPoints: DataPoint[];
  maxValue: number;
  label: string;
  max: number;
}

function Chart(props: DataPoint): ReactElement {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={1}
          label={dataPoint.label}
          dataPoints={[]}
          max={0}
        />
      ))}
    </div>
  );
}

export default Chart;
