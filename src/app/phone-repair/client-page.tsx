/* eslint-disable @typescript-eslint/no-explicit-any */
import PhoneRepairPage from '@/components/page/PhoneRepairPage';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';

const PhoneRepair = ({ brands }: { brands: any }) => (
    <Layout>
        <PhoneRepairPage brands={brands} />
    </Layout>
);

export default PhoneRepair;
