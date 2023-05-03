import { StatisticCard } from "../../components/StatisticCard/StatisticCard";
import { StyledDashboardStatistic } from "../../constats/styles";
import balanceIcon from "../../assets/images/statistic-graphic.svg";
import invoicedIcon from "../../assets/images/statistic-up.svg";
import expensesIcon from "../../assets/images/statistic-down.svg";
import useGetSummary from "../../hooks/invoices/useGetSummary";

export const Statistic = () => {
  const { summary } = useGetSummary();

  return (
    <StyledDashboardStatistic>
      <StatisticCard
        title="Balance"
        value={`€${summary?.total ?? 0}`}
        icon={balanceIcon}
        color="#F2F4F7"
      />
      <StatisticCard
        title="Invoiced"
        value={`€${summary?.total ?? 0}`}
        icon={invoicedIcon}
        color="#D1FADF"
      />
      <StatisticCard
        title="Expenses"
        value="€0.00"
        icon={expensesIcon}
        color="#FFE4E8"
        soon
      />
    </StyledDashboardStatistic>
  );
};
