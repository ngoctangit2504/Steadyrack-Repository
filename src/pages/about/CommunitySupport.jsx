import React from "react";
import BackRoundIntroComponent from "../../components/backround Intro/BackRoundIntro";
import BgIntroImage from "../../assets/Community_support_hero.webp";
import CommunitySupportCarouselB from "../../components/carousel/CommunitySupportLogoA";
import CommunitySupportCarouselA from "../../components/carousel/CommunitySupportLogoB";

function CommunitySupport() {
  return (
    <div>
      <BackRoundIntroComponent
        imageSrc={BgIntroImage}
        text={"we’re into giving back"}
      />

      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Charities We Support
        </h2>
        <p className="max-w-2xl text-black font-medium mb-4 tracking-tight">
          Since 2009, we have continually provided support to charities,
          non-profits and community organizations, locally, nationally and
          internationally. Over the years we’ve arranged for our racks to be
          used in silent auctions, as raffle prizes, in sporting competitions
          and countless organizations seeking assistance.
        </p>
      </div>

      <CommunitySupportCarouselA />
      <CommunitySupportCarouselB />

      <div className="pt-6 pb-20 bg-black">
        <div className="px-2.5">
          <div className="grid grid-cols-3">
            <div className=" col-span-2 px-2.5">
              <img
                className="w-full max-h-[445px]"
                src="https://www.livelo.cc/cdn/shop/files/STEADYRACK_GRAN_FONDO.png?v=1733802383&width=1500"
              />
            </div>
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png.png?v=1734202173&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Dwellingup 100
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Launched in 2009, the Act Belong Commit Dwellingup 100 has
                  quickly become WA’s largest one day mountain bike race,
                  attracting plenty of newcomers and novices plus some of
                  Australia’s best riders.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 py-5">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png.png?v=1734203423&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Sepheo
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Sepheo works with children living and begging on the streets
                  in Maseru, Lesotho’s capital. Our vision is Excellence out of
                  Poverty; that Lesotho’s Poorest will Become Lesotho’s Best
                  audacious, but we believe it’s possible. Sepheo is the local
                  word for purpose.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png.png?v=1734203460&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Breast Cancer Care WA
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Since 2000, Breast Cancer Care WA has provided specialist
                  breast care nursing, counselling, and financial support to
                  women and men affected by breast cancer, as well as their
                  partners and families, throughout the WA community.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_224bf075-5512-43cc-b930-b66cd2bdbc5e.png?v=1734203502&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Canuck Place Children'sHospice
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  A place of comfort and compassion where children can receive
                  expert clinical care while experiencing the simple joys of
                  being a child with their families at their side savouring
                  their time together.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_c9984852-0a97-42f8-a4fa-0ba89509d7e3.png?v=1734203548&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Australian Diabetes Society
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Is the peak national medical and scientific body in Australia
                  for diabetes. Their mission is to prevent diabetes and its
                  complications; provide excellence in education for health
                  professionals; promote collaboration, research and education;
                  work with other organizations committed to improve diabetes
                  treatment.
                </p>
              </div>
            </div>
            <div className=" col-span-2 px-2.5">
              <img
                className="w-full max-h-[445px]"
                src="https://www.livelo.cc/cdn/shop/files/STEADYRACK_GRAN_FONDO.png?v=1733802383&width=1500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 py-5">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png_17440c7f-01bc-4a06-95b1-46166e996a21.png?v=1734203582&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Baptist World Aid Pedal Against Poverty
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Their Community Development projects recognise that the
                  greatest power for lasting change in poor communities, rests
                  with the communities themselves.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_37fa358a-037b-45ae-baab-ee59d8720b3e.png?v=1734203643&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Bicycling WA
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Is a proudly independent, membership-based, not-for-profit
                  organization focused on representing their members and
                  improving riding conditions. They are self-funded through the
                  support of their members, event participants and partners.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_1bf23ac7-77de-47ba-94ee-b061c5742bb5.png?v=1734203643&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Harry Perkins Institute
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Perkins has grown to become one of the nation’s leading adult
                  medical research centres, where a close knit team of more than
                  450 research and trial staff work together to defeat the major
                  diseases that impact our community.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 py-5">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[100%] w-[100%]"
                  src="https://media.licdn.com/dms/image/sync/v2/D5627AQF6P8uGyMQrfg/articleshare-shrink_800/articleshare-shrink_800/0/1727402099203?e=2147483647&v=beta&t=B5_ei1D-WICAbpVtiKnMPSpnnbhKxvJh3gTS1k3f0f4"
                />
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_9348430c-9d2c-4dd6-b736-19c2f8ec5228.png?v=1734203762&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Hawaiian Ride for Youth
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Held annually with riders raising funds and awareness for
                  Youth Focus. While cycling through WA towns, the riders visit
                  high schools to engage and inform students on issues of youth
                  suicide, depression, anxiety and self-harm, as well as the
                  services that Youth Focus provides.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_c6388d19-bc7c-4610-be9a-1f0d29167f18.png?v=1734203762&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  JDRF (Junior Diabetes)
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Leading the fight against Type 1 Diabetes by funding research
                  to cure, treat and prevent the disease. They drive innovation,
                  demand action and stand with everyone facing life with Type 1
                  Diabetes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 py-5">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png_a3b437e1-f6f3-430f-ae81-78a4379e8c25.png?v=1734203762&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Lifeline
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Is a national charity providing all Australians experiencing a
                  personal crisis with access to 24 hour crisis support and
                  suicide prevention services. Lifeline provides a little bit of
                  space to think, to feel safe and to be heard.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_3_png.png?v=1734203762&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  MACA Cancer 200 Ride for Research
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Promotes a commitment to ridding the world of cancer, their
                  ride is life changing. Riders take on the personal challenge
                  of riding 200km in two days to fight cancer and support
                  medical research at the Perkins.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_4_png.png?v=1734203932&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  MSWA Ocean Ride - Powered by Retravision
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  The MSWA Ocean Ride – Powered by Retravision is a unique
                  community cycling event that takes riders along Western
                  Australia’s beautiful coastline, all while raising vital funds
                  for people living with all neurological conditions in WA.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_a236e2c6-6690-4d33-a133-2067d354fdff.png?v=1734203932&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Mud Blood Running
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Created and designed as a fun way to brand and inspire
                  training for the World Transplant Games.
                </p>
              </div>
            </div>
            <div className=" col-span-2 px-2.5">
              <img
                className="w-full max-h-[445px]"
                src="https://www.livelo.cc/cdn/shop/files/STEADYRACK_GRAN_FONDO.png?v=1733802383&width=1500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 py-5">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_47046a45-9d59-427f-b518-ff92270dfc07.png?v=1734203932&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Perth Children's Hospital
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Is Western Australia’s specialist pediatric hospital and
                  trauma centre, providing medical care to children and
                  adolescents up to 16 years of age. The 298-bed hospital
                  provides treatment for the most serious medical cases, as well
                  as secondary services including inpatient, outpatient and
                  day-stay care.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_5b9b3aa1-718b-46ff-b4c4-5da0c7b1e774.png?v=1734207056&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Prostate Cancer Foundation of Australia
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Is a broad based community organization dedicated to reducing
                  the impact of prostate cancer on Australian men, their
                  partners and families.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_3_png_95df75a3-1f59-4aac-b478-b2cc1362d408.png?v=1734203933&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Ride to Conquer Cancer
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Was created in 2008 as a “mega-event” fundraiser in support of
                  The Princess Margaret Cancer Centre in Toronto, Ontario. It’s
                  an annual charity fundraiser held in various locations across
                  Canada and Australia.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 py-5">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[100%] w-[100%]"
                  src="https://media.licdn.com/dms/image/sync/v2/D5627AQF6P8uGyMQrfg/articleshare-shrink_800/articleshare-shrink_800/0/1727402099203?e=2147483647&v=beta&t=B5_ei1D-WICAbpVtiKnMPSpnnbhKxvJh3gTS1k3f0f4"
                />
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_153a1a79-a7d4-42e0-b2f1-0c0c22837148.png?v=1734206657&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Ronald McDonald House WA
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Supports the ever-changing needs of seriously ill children and
                  their families. When a child is diagnosed with a serious
                  illness, it impacts the whole family. Lives can be turned
                  upside down. That’s why we provide a range of programs to help
                  families stay together and close to the care they need.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_4_png_c172a85d-9ffb-42e7-b018-f41ddd790191.png?v=1734206657&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Vinnies CEO Sleepout Campaign
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Joins leaders in business, community and government to sleep
                  without shelter on one of the longest nights ofthe year, to
                  help change the lives of Australians experiencing
                  homelessness.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 py-5">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_3_png_3224f82b-5666-4017-b41c-9d5d5e71d579.png?v=1734206657&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  The Westpac Foundation
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  They’re a charitable organization that has been helping people
                  for the past 140 years, providing funding and programs to help
                  social enterprises and community organizations taking a fresh
                  approach to complex social issues and creating jobs and
                  opportunities for those who need it most.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png_874a46a3-d5c9-41e4-966f-e9dcec2e79b1.png?v=1734206657&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Zonta House
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  For more than 35 years they’ve supported women who have
                  experienced, or are at risk of experiencing family and
                  domestic violence. Zonta House provides refuge and
                  transitional accommodation, holistic support services and
                  education to women over the age of 18.
                </p>
              </div>
            </div>

            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_178e7a44-3860-40d1-b5a2-e816d44d2529.png?v=1734206657&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Red Sky Ride - Solaris Cancer Care
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  The Red Sky Ride (RSR) is dedicated to raising funds and
                  awareness for the supportive care and services delivered by
                  Solaris Cancer Care. Mirroring the cancer journey, the Red Sky
                  cyclists band together, covering more than 600 kilometres over
                  four days, testing their physical and emotional strength.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className=" columns-1 px-2.5">
              <div className="px-2.5 bg-white h-full flex flex-col">
                <img
                  className="h-[50%] w-[50%]"
                  src="https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_5_png.png?v=1734206657&width=380"
                />
                <h1 className="text-4xl font-semibold tracking-tight">
                  Trail Bliss Women's MTB Festival
                </h1>
                <p className=" mt-auto mb-10 tracking-tight font-semibold pt-10">
                  Trail Bliss is a women’s only mountain bike festival focused
                  on getting more women on bikes, keeping active and challenging
                  themselves. With a heavy focus on coaching, confidence and
                  skill progression the festival will cater for all levels of
                  riding experience.
                </p>
              </div>
            </div>
            <div className=" col-span-2 px-2.5">
              <img
                className="w-full max-h-[445px]"
                src="https://www.livelo.cc/cdn/shop/files/STEADYRACK_GRAN_FONDO.png?v=1733802383&width=1500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySupport;
