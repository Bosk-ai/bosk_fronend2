import { Title } from "../../components/Title";
import { Chart } from "./Chart";
import { Statistic } from "./Statistic";

export const Dashboard = () => {
  return (
    <div>
      <Title title="Dashboard" />
      <Statistic />
      <Chart />
    </div>
  );
};
