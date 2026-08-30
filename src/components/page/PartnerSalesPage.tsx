import ROUTES from '@/constants/routes/routes.constant';
import ManualBreadcrumb from '../ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Container from '../ui/organisms/Container/Container';
import PartnerApplySection from '../ui/organisms/partner/PartnerApplySection';
import PartnerBenefitsTemplate from '../ui/templates/partner/PartnerBenefitsTemplate';
import PartnerFaqTemplate from '../ui/templates/partner/PartnerFaqTemplate';
import PartnerHeroTemplate from '../ui/templates/partner/PartnerHeroTemplate';
import PartnerStepsTemplate from '../ui/templates/partner/PartnerStepsTemplate';

const PartnerSalesPage = () => {
    return (
        <main className='overflow-x-hidden pb-16'>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        { label: 'فروش همکاری', href: ROUTES.PartnerSales, isCurrent: true }
                    ]}
                />
            </Container>

            <div className='mt-4 space-y-16 md:space-y-24'>
                <Container>
                    <PartnerHeroTemplate />
                </Container>

                <PartnerBenefitsTemplate />

                <PartnerStepsTemplate />

                <PartnerFaqTemplate />

                <Container>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h2 className='text-2xl font-bold text-gray-800 md:text-3xl'>همین حالا شروع کنید</h2>
                        <p className='mt-3 text-sm leading-8 text-gray-600 md:text-base'>
                            فرم زیر را تکمیل کنید تا درخواست همکاری شما ثبت و بررسی شود.
                        </p>
                    </div>
                    <PartnerApplySection />
                </Container>
            </div>
        </main>
    );
};

export default PartnerSalesPage;
