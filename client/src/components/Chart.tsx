import Chart from "react-apexcharts";
import type { ChartDataTypes } from "../types/types";
import AppCard from "./AppCard";

const CustomChart = ({
  title,
  options,
  series,
  type,
  width = 550,
}: ChartDataTypes) => {
  return (
    <AppCard title={title}>
      <Chart options={options} series={series} type={type} width={width} />
    </AppCard>
  );
};

export default CustomChart;
