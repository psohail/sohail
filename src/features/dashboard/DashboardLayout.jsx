import styled from "styled-components";

import TodayReports from "../reports/TodayReports";
import ReportsChart from "./ReportsChart";
import ReportsGraph from "./ReportsGraph";
import Stats from "./Stats";
import Spinner from "../../ui/Spinner";

import { useRecentReports } from "./useRecentReports";

const StyledDashboardLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto 32rem auto;
  gap: 1.8rem;
`;

function DashboardLayout() {
  const { isPending, reports, numDays } = useRecentReports();

  if (isPending) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats reports={reports} />
      <TodayReports />
      <ReportsChart reports={reports} />
      <ReportsGraph reports={reports} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
