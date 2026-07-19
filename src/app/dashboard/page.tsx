import SummaryOfActivitiesTemplate from '@/components/ui/templates/dashboard/SummaryOfActivities/SummaryOfActivitiesTemplate';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    robots: { index: false, follow: false }
};

const DashboardMainPage = () => <SummaryOfActivitiesTemplate />;

export default DashboardMainPage;
