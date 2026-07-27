/* eslint-disable @typescript-eslint/no-explicit-any */
import PhoneSalesPage from '@/components/page/PhoneSalesPage';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';

const PhoneSales = ({ brands }: { brands: any }) => (
    <Layout>
        <PhoneSalesPage brands={brands} />
    </Layout>
);
export default PhoneSales;
