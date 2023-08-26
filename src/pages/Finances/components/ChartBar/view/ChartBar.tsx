import { ReactElement } from "react";
interface DataPoint {
  max: number;
  value: number; // Substitua pelo tipo correto, se necessário
  // outras propriedades, se houver
  dataPoints: DataPoint[];
  maxValue: number;
  label: string;
}

function ChartBar(props: DataPoint): ReactElement {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="char-bar">
      <div className="chat-bar__inner">
        <div className="chart-bar_fill" style={{ height: barFillHeight }}></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
}

export default ChartBar;
