import ROUTES from '@/constants/routes/routes.constant';
import ManualBreadcrumb from '../ui/molecules/Breadcrumbs/ManualBreadcrumb';
import Container from '../ui/organisms/Container/Container';
import AboutRepairTemplate from '../ui/templates/AboutUsTemplate/AboutRepairTemplate';
import AboutSalesBenefitTemplate from '../ui/templates/AboutUsTemplate/AboutSalesBenefitTemplate';
import AboutUsDescriptionTemplate from '../ui/templates/AboutUsTemplate/AboutUsDescriptionTemplate';

const AboutUsPage = () => {
    return (
        <main>
            <Container>
                <ManualBreadcrumb
                    items={[
                        { label: 'خانه', href: ROUTES.Landing },
                        {
                            label: 'درباره استیو',
                            href: ROUTES.AboutUs,
                            isCurrent: true
                        }
                    ]}
                />
                <AboutUsDescriptionTemplate />
                <AboutSalesBenefitTemplate />
                <AboutRepairTemplate />
            </Container>
        </main>
    );
};

export default AboutUsPage;
