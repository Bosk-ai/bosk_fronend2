import { StatisticCard } from "../../components/StatisticCard/StatisticCard";
import { StyledInvoicesStatistic } from "../../constats/styles";
import invoicedIcon from "../../assets/images/statistic-up.svg";
import waitIcon from "../../assets/images/statistic-wait.svg";
import useGetSummary from "../../hooks/invoices/useGetSummary";

export const Statistic = () => {
  const { summary } = useGetSummary();

  return (
    <StyledInvoicesStatistic>
      <StatisticCard
        title="Invoiced"
        value={`€${summary?.total ?? 0}`}
        icon={invoicedIcon}
        color="#D1FADF"
      />
      <StatisticCard
        title="Overdue"
        value={`€${summary?.overdue ?? 0}`}
        icon={waitIcon}
        color="#FFE4E8"
      />
    </StyledInvoicesStatistic>
  );
};
