import { BlogDataProps, DataProps, ImageDataProps, IntegrationDataProps, Option } from "../interface/interface.types";

// Management Data 
export const data: DataProps = [
    {
      id: 1,
      ManagerName: "Marketers",
      title: "drive growth and create the best experiences",
      description: "Ready to win more customers and increase your revenue with a best-in-class digital dining experience? Download this guide now.",
      link: "See Market Solution",
      image: "https://images.prismic.io/mparticle/1f17789b-3cca-4b8e-9a2b-8c8e3deb2df2_Marketers-Journey%402x.png?auto=compress%2Cformat&fit=max&w=1605&h=1149",
      marketerArray: [
        {
          id: 1,
          listtitle: "Build a single view of the customer",
          listdescription: "Optimize every experience by getting access to complete customer context. Unify each touch point, from anonymous to known, across every channel into a single profile."
        },
        {
          id: 2,
          listtitle: "Build a single view of the customer",
          listdescription: "Optimize every experience by getting access to complete customer context. Unify each touch point, from anonymous to known, across every channel into a single profile."
        },
        {
          id: 3,
          listtitle: "Build a single view of the customer",
          listdescription: "Optimize every experience by getting access to complete customer context. Unify each touch point, from anonymous to known, across every channel into a single profile."
        },
      ]
    },
    {
      id: 2,
      ManagerName: "Product Managers",
      title: "create more relevant customer experiences with better data",
      description: "Build a first-party data foundation to scale customer engagement and reduce risk from perpetually changing technology, vendor, and privacy landscapes.",
      link: "See product solutions",
      image: "https://images.prismic.io/mparticle/eaece5b5-939b-4f32-8e33-b06a6149d824_Product-homepage%402x.png?auto=compress%2Cformat&fit=max&w=1201&h=835",
      marketerArray: [
        {
          id: 1,
          listtitle: "Activate your best-of-breed stack",
          listdescription: "Optimize every experience by getting access to complete customer context. Unify each touch point, from anonymous to known, across every channel into a single profile."
        },
        {
          id: 2,
          listtitle: "Break down data silos",
          listdescription: "Optimize every experience by getting access to complete customer context. Unify each touch point, from anonymous to known, across every channel into a single profile."
        },
        {
          id: 3,
          listtitle: "Explore your data with Journey Analytics",
          listdescription: "Optimize every experience by getting access to complete customer context. Unify each touch point, from anonymous to known, across every channel into a single profile."
        },
      ]
    },
    {
      id: 3,
      ManagerName: "Developers",
      title: "empower your organization with easier access to customer data",
      description: "Simplify customer data management and streamline access to high quality customer data across your tech stack.",
      link: "See developer solutions",
      image: "https://images.prismic.io/mparticle/dc6e3fd1-4d03-4087-ba96-b615cea70962_Code-Once-Log-Everywhere.png?auto=compress%2Cformat&fit=max&w=1148&h=976",
      marketerArray: [
        {
          id: 1,
          listtitle: "Collect data from any source",
          listdescription: "Easily ingest data from your web, mobile, OTT, or cross-platform app."
        },
        {
          id: 2,
          listtitle: "Manage data quality",
          listdescription: "Define, correct, and enforce data standards with schema management and transformation tools."
        },
        {
          id: 3,
          listtitle: "Connect data to any tool, in real-time",
          listdescription: "Integrate with 300+ marketing, analytics, and data warehousing tools."
        },
      ]
    }
  ]

  // Integration Data
export const integrationData: IntegrationDataProps = [
  {
    id: 1,
    subname: "Integrations",
    title: "Your customer data, where you need it, faster",
    description: "Connect your customer data to all the tools your team uses to drive growth.",
    link: "View all integrations",
    imageArray: [
      {
        id: 1,
        image: "https://mparticle.cdn.prismic.io/mparticle/a1caa114-0a76-4395-b48d-3afc47fb5600_facebook-sm.svg?fit=max&w=28&h=11&fm=webp 28w,https://mparticle.cdn.prismic.io/mparticle/a1caa114-0a76-4395-b48d-3afc47fb5600_facebook-sm.svg?fit=max&w=56&h=21&fm=webp 56w,https://mparticle.cdn.prismic.io/mparticle/a1caa114-0a76-4395-b48d-3afc47fb5600_facebook-sm.svg?fit=max&w=111&h=42&fm=webp 111w"
      },
      {
        id: 2,
        image: "https://images.prismic.io/mparticle/67fdfb14-3ad9-41d6-8d4a-500c054e5e04_google-ads-color.svg?auto=compress%2Cformat&fit=max&w=121&h=23"
      },
      {
        id: 3,
        image: "https://images.prismic.io/mparticle/a0ce0ab9-7de3-4ad8-8837-070219b44cc6_snapchat-color.svg?auto=compress%2Cformat&fit=max&w=14&h=14 14w,https://images.prismic.io/mparticle/a0ce0ab9-7de3-4ad8-8837-070219b44cc6_snapchat-color.svg?auto=compress%2Cformat&fit=max&w=27&h=27 27w,https://images.prismic.io/mparticle/a0ce0ab9-7de3-4ad8-8837-070219b44cc6_snapchat-color.svg?auto=compress%2Cformat&fit=max&w=54&h=54 54w"
      },
      {
        id: 4,
        image: "https://images.prismic.io/mparticle/def54408-1c16-49ad-82fe-a0bc90ac65be_google-marketing-platform.svg?auto=compress%2Cformat&fit=max&w=141&h=36"
      },
      {
        id: 5,
        image: "https://images.prismic.io/mparticle/39187986-c587-4d73-aab9-bd41feb1215b_twitter-color.svg?auto=compress%2Cformat&fit=max&w=11&h=9 11w,https://images.prismic.io/mparticle/39187986-c587-4d73-aab9-bd41feb1215b_twitter-color.svg?auto=compress%2Cformat&fit=max&w=22&h=19 22w,https://images.prismic.io/mparticle/39187986-c587-4d73-aab9-bd41feb1215b_twitter-color.svg?auto=compress%2Cformat&fit=max&w=44&h=37 44w"
      },
      {
        id: 6,
        image: "https://images.prismic.io/mparticle/ca3d563b-b9f6-4f8a-a9b4-384b1673f219_braze-color.svg?auto=compress%2Cformat&fit=max&w=89&h=42"
      },
      {
        id: 7,
        image: "https://mparticle.cdn.prismic.io/mparticle/b57cb7dc-0287-4c43-ad80-656f3533321b_google+big+query.svg?fit=max&w=138&h=24"
      },
      {
        id: 8,
        image: "https://mparticle.cdn.prismic.io/mparticle/a9237b1b-fe97-46db-b158-f497f68612c8_kinesis+firehouse.svg?fit=max&w=105&h=44"
      },
      {
        id: 9,
        image: "https://images.prismic.io/mparticle/def54408-1c16-49ad-82fe-a0bc90ac65be_google-marketing-platform.svg?auto=compress%2Cformat&fit=max&w=141&h=36"
      },
      {
        id: 10,
        image: "https://mparticle.cdn.prismic.io/mparticle/a9237b1b-fe97-46db-b158-f497f68612c8_kinesis+firehouse.svg?fit=max&w=105&h=44"
      }
    ]
  },
  {
    id: 2,
    subname: "Why-mparticle",
    title: "Businesses of all sizes choose mParticle",
    description: "With unique capabilities and service for the largest, most complex enterprises and the flexibility and speed to serve growing startups, mParticle has you covered.",
    link: "Customer stories",
    imageArray: [
      {
        id: 1,
        image: "https://mparticle.cdn.prismic.io/mparticle/2ef86e08-db10-4681-81f8-9c0bfd93aef2_Security-best-in-class-Icon.svg?fit=max&w=44&h=44",
        listtitle: "Best-in-class security, scalability, and reliability",
        listdescription: "Build your data foundation on the #1 trusted customer data platform"
      },
      {
        id: 2,
        image: "https://mparticle.cdn.prismic.io/mparticle/182006ff-5b76-4855-ad48-c05dd05e527f_Complete-CDP-Icon.svg?fit=max&w=44&h=44",
        listtitle: "The most complete, purpose-built CDP",
        listdescription: "Build your first-party data foundation on the only CDP that offers an end-to-end solution for data management, analytics, orchestration, and predictive intelligence."
      },
      {
        id: 3,
        image: "https://mparticle.cdn.prismic.io/mparticle/81d0cb3f-7ab5-470f-9843-d5ff55c55543_Trusted-Expertise.svg?fit=max&w=44&h=44",
        listtitle: "Best-in-class security, scalability, and reliability",
        listdescription: "Build your data foundation on the #1 trusted customer data platform"
      },
      {
        id: 4,
        image: "https://mparticle.cdn.prismic.io/mparticle/20ae7202-d82d-44f5-b4f5-afadd4213a55_Flexible-Pricing.svg?fit=max&w=44&h=44",
        listtitle: "Best-in-class security, scalability, and reliability",
        listdescription: "Build your data foundation on the #1 trusted customer data platform"
      },
      {
        id: 5,
        image: "https://mparticle.cdn.prismic.io/mparticle/c1249be7-08b2-4f43-97ba-305cab4c8bea_CDP-that-Grows.svg?fit=max&w=44&h=44",
        listtitle: "Best-in-class security, scalability, and reliability",
        listdescription: "Build your data foundation on the #1 trusted customer data platform"
      },
      {
        id: 6,
        image: "https://mparticle.cdn.prismic.io/mparticle/927cad45-4925-4ff7-85e3-03f79109e346_Support-Best-in-class.svg?fit=max&w=11&h=11&fm=webp 11w,https://mparticle.cdn.prismic.io/mparticle/927cad45-4925-4ff7-85e3-03f79109e346_Support-Best-in-class.svg?fit=max&w=22&h=22&fm=webp 22w,https://mparticle.cdn.prismic.io/mparticle/927cad45-4925-4ff7-85e3-03f79109e346_Support-Best-in-class.svg?fit=max&w=44&h=44&fm=webp 44w",
        listtitle: "Best-in-class security, scalability, and reliability",
        listdescription: "Build your data foundation on the #1 trusted customer data platform"
      }
    ]
  }
]

// Blog Data 
export const blogdata: BlogDataProps[] = [
  {
    id: 1,
    image: "https://images.prismic.io/mparticle/e96a7366-9f28-4d2f-a0de-7c950a6203b0_Chownow+%281%29.jpg?auto=compress%2Cformat&rect=0%2C24%2C1980%2C1111&w=1230&h=690&fit=max",
    subname: "Growth",
    title: "How ChowNow improved data quality throughout their MarTech stack"
  }, {
    id: 2,
    image: "https://images.prismic.io/mparticle/01779822-974d-47a2-940b-ebe44429ced4_Buying-Guide-Carousel-1.jpg?auto=compress%2Cformat&rect=0%2C2%2C2400%2C1346&w=1230&h=690&fit=max",
    subname: "Guides",
    title: "Customer Data Platform Buying"
  },

  {
    id: 3,
    image: "  https://images.prismic.io/mparticle/0aa06f92-578c-4912-95e9-bd9a6e20a982_real-time-cdp.jpg?auto=compress%2Cformat&rect=0%2C2%2C2400%2C1346&w=1230&h=690&fit=max",
    subname: "Growth",
    title: "CDS vs Intresting?",
    author: "Joey Colvin",
    date: "August 31,2022"
  },

  {
    id: 4,
    image: "  https://images.prismic.io/mparticle/4d2f5133-f7d6-4e9f-8af7-18c945876ff2_customer+data+maturity+quiz+blog+post.png?auto=compress%2Cformat&rect=0%2C1%2C1465%2C822&w=1230&h=690&fit=max",
    subname: "Growth",
    title: "How ChowNow improved data quality throughout their MarTech stack",
    author: "Joey Colvin",
    date: "August 31,2022"
  },


]
  


//Second Page
export const imageArray: ImageDataProps[] = [
    {

        subname: "Aarki",
        title: " helps companies grow and re-engage their mobile app customers, using data, machine learning, and large customer reach.",
        firstlink: "Re-Targeting",
        isRed: true,
        image: "https://static.mparticle.com/providerimg/forwarderlogo_1025_Aarki.svg"
    },
    {

        subname: "Google",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non exercitationem obcaecati ipsam.",
        firstlink: "Google Link",
        isRed: false,
        image: "https://images.prismic.io/mparticle/67fdfb14-3ad9-41d6-8d4a-500c054e5e04_google-ads-color.svg?auto=compress%2Cformat&fit=max&w=121&h=23"
    },
    {

        subname: "Snapchat",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae praesentium quo quisquam.",
        firstlink: "User Link",
        isRed: true,
        secondlink: "sadas",
        image: "https://images.prismic.io/mparticle/a0ce0ab9-7de3-4ad8-8837-070219b44cc6_snapchat-color.svg?auto=compress%2Cformat&fit=max&w=14&h=14 14w,https://images.prismic.io/mparticle/a0ce0ab9-7de3-4ad8-8837-070219b44cc6_snapchat-color.svg?auto=compress%2Cformat&fit=max&w=27&h=27 27w,https://images.prismic.io/mparticle/a0ce0ab9-7de3-4ad8-8837-070219b44cc6_snapchat-color.svg?auto=compress%2Cformat&fit=max&w=54&h=54 54w"
    },
    {

        subname: "Google Marketing ",
        title: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam molestiae non tempore sint magni id tempora ipsum cupiditate recusandae.",
        firstlink: "User Link",
        isRed: true,
        image: "https://images.prismic.io/mparticle/def54408-1c16-49ad-82fe-a0bc90ac65be_google-marketing-platform.svg?auto=compress%2Cformat&fit=max&w=141&h=36"
    },
    {

        subname: "Twitter",
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam unde libero quaerat!",
        firstlink: "User Link",
        secondlink: "Twitter Link",
        isRed: true,
        image: "https://images.prismic.io/mparticle/39187986-c587-4d73-aab9-bd41feb1215b_twitter-color.svg?auto=compress%2Cformat&fit=max&w=11&h=9 11w,https://images.prismic.io/mparticle/39187986-c587-4d73-aab9-bd41feb1215b_twitter-color.svg?auto=compress%2Cformat&fit=max&w=22&h=19 22w,https://images.prismic.io/mparticle/39187986-c587-4d73-aab9-bd41feb1215b_twitter-color.svg?auto=compress%2Cformat&fit=max&w=44&h=37 44w"
    },
    {

        subname: "Braze",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, accusantium!",
        firstlink: "User Link",
        isRed: false,
        image: "https://images.prismic.io/mparticle/ca3d563b-b9f6-4f8a-a9b4-384b1673f219_braze-color.svg?auto=compress%2Cformat&fit=max&w=89&h=42"
    },
    {

        subname: "Google BigQuery",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, accus",
        firstlink: "Google Link",
        isRed: false,
        secondlink: "BigQuery Link",
        image: "https://mparticle.cdn.prismic.io/mparticle/b57cb7dc-0287-4c43-ad80-656f3533321b_google+big+query.svg?fit=max&w=138&h=24"
    },
    {

        subname: "Amazon Kinesis",
        title: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veritatis eveniet minima maxime sapiente facilis magni voluptates, quaerat consequatur officiis saepe obcaecati? Unde, quia ab.",
        firstlink: "User Link",
        isRed: true,
        image: "https://mparticle.cdn.prismic.io/mparticle/a9237b1b-fe97-46db-b158-f497f68612c8_kinesis+firehouse.svg?fit=max&w=105&h=44"
    },
    {

        subname: "StartApp",
        title: " enables partners to deliver the world's most fulfilling mobile experiences for their users by creating innovative ways of exploring mobile users intents and behaviors.",
        firstlink: "User Link",
        isRed: true,
        image: "https://static.mparticle.com/providerimg/forwarderlogo_1091_StartApp.svg"
    },
    {

        subname: "Facebook",
        title: " enables partners to deliver the world's most fulfilling mobile experiences",
        firstlink: "Facebook Link",
        isRed: true,
        image: "https://static.mparticle.com/providerimg/forwarderlogo_45_Facebook.svg"
    }
]

export const options: Option[] = [
    { value: 'Google', label: 'Google' },
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Twitter', label: 'Twitter' },
    { value: "Braze", label: "Braze" },
    { value: "Aarki", label: "Aarki" }

];