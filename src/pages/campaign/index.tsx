import { useState } from 'react';

import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import BreadCrumbs from '@/components/breadcrumbs';
import CampaignBenefits from '@/components/campaign-benefits';
import CampaignContent from '@/components/campaign-content';
import CampaignFeatured from '@/components/campaign-featured';
import CoverImage from '@/components/cover-image';
import Highlights from '@/components/highlights';
import NotifyLaunching from '@/components/notify-launching';
import RecentReviewsSection from '@/components/reviews';
import Button from '@/components/ui/button';
import { useBreadCrumbs } from '@/hooks/useBreadCrumbs';
import { Meta } from '@/layout/Meta';
import { campaignBenefitsData } from '@/mock-data/campaign';
import { highlightsData2 } from '@/mock-data/highlights';
import { Main } from '@/templates/Main';

export default function CampaignPage() {
  const [email, setEmail] = useState<string>('');

  const { pathname } = useRouter();
  const breadCrumbsData = useBreadCrumbs(
    [
      {
        name: 'Home',
        link: '/',
        Icon: HomeIcon,
      },
      {
        name: 'Campaign page',
        link: '/campaign',
      },
    ],
    pathname
  );

  return (
    <Main meta={<Meta title="Campaign" description="Campaign page" />}>
      <CoverImage
        coverImg={campaignBenefitsData.coverImg}
        coverAlt={campaignBenefitsData.coverAlt}
      >
        <div className="flex relative flex-col justify-center items-center h-full">
          <div className="absolute top-0 left-0">
            <BreadCrumbs data={breadCrumbsData} isLight />
          </div>
          <h2 className="mb-1 text-4xl font-normal text-center text-white">
            Cover Text
          </h2>
          <p className="mb-7 text-lg font-normal text-center text-white">
            Some representative placeholder content for the third slide.
          </p>
          <Button classes="bg-white text-primary">Button text</Button>
        </div>
      </CoverImage>
      <CampaignBenefits
        heading={campaignBenefitsData.heading}
        promotionText={campaignBenefitsData.promotionText}
        benefits={campaignBenefitsData.benefits}
      />
      <NotifyLaunching email={email} setEmail={setEmail} />
      <CampaignContent />
      <RecentReviewsSection />
      <CampaignFeatured fetured={campaignBenefitsData.fetured} />
      <Highlights data={highlightsData2} inline />
    </Main>
  );
}
