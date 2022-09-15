import React from "react";
const UIMessages = React.lazy(() => import("../screens/ui/about/UIMessages"));
const UIMission = React.lazy(() => import("../screens/ui/about/UIMission"));
const UIObjectives = React.lazy(() =>
  import("../screens/ui/about/UIObjectives")
);
const UIProfile = React.lazy(() => import("../screens/ui/about/UIProfile"));
const UIRecognition = React.lazy(() =>
  import("../screens/ui/about/UIRecognition")
);
const UIVision = React.lazy(() => import("../screens/ui/about/UIVision"));
const HomeScreen = React.lazy(() => import("../screens/ui/home/HomeScreen"));
const Admission = React.lazy(() => import("../screens/ui/others/Admission"));
const PreAdmission = React.lazy(() =>
  import("../screens/ui/others/PreAdmission")
);
const Payment = React.lazy(() => import("../screens/ui/Payment"));
const UICourse = React.lazy(() => import("../screens/ui/UICourse"));
const UIInfrastructure = React.lazy(() =>
  import("../screens/ui/UIInfrastructure")
);
const UICorporateSupport = React.lazy(() =>
  import("../screens/ui/placement/UICorporateSupport")
);

const UIPlacements = React.lazy(() =>
  import("../screens/ui/placement/UIPlacements")
);
const UIPlacementRecord = React.lazy(() =>
  import("../screens/ui/placement/UIPlacementRecord")
);
const UIEventsActivities = React.lazy(() =>
  import("../screens/ui/events-activities/UIEventsActivities")
);
const UICollaboration = React.lazy(() =>
  import("../screens/ui/UICollaboration")
);
const UIContact = React.lazy(() => import("../screens/ui/contact/UIContact"));
const Courses = React.lazy(() => import("../screens/ui/home/content/Courses"));
const ResearchPhd = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/ResearchPhd")
);
//
const OrdinanceRegulation = React.lazy(() =>
  import(
    "../screens/ui/home/content/research_and_phd/content/OrdinanceRegulation"
  )
);
const LoginScreen = React.lazy(() => import("../screens/LoginScreen"));
const Profile = React.lazy(() => import("../screens/Profile"));
const OrdinancePreamble = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/content/OrdPreamble")
);
const OrdItems = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/content/OrdItems")
);
const PhdInstructions = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/phd/PhdInstructions")
);
const SamplePaper = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/content/SamplePaper")
);
const SampleSynopsis = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/content/SampleSynopsis")
);
const ChecklistForThesis = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/content/CheckListForThesis")
);
const NoticeSeatMatrixChecklist = React.lazy(() =>
  import("../screens/ui/home/content/research_and_phd/content/NoticeSeatMatrixChecklist")
  );
  // Conference and Semniar Links
  const NationalConclave = React.lazy(() =>
    import("../screens/ui/events-activities/content/conference_and_seminar/NationalConclave"))
  const InternationConferenceonShiftingParadigm = React.lazy(() =>
    import("../screens/ui/events-activities/content/conference_and_seminar/IntConferenceonShiftingParadigm"))
  const IConTransformationofBusiness = React.lazy(() =>
    import("../screens/ui/events-activities/content/conference_and_seminar/IConTransformationofBusiness"))
  const Anveshan = React.lazy(() =>
    import("../screens/ui/events-activities/content/conference_and_seminar/Anveshan"))
  const IAOMRConference = React.lazy(() =>
    import("../screens/ui/events-activities/content/conference_and_seminar/IAOMRConference"))
  const IConChemicalSCiences = React.lazy(() =>
    import("../screens/ui/events-activities/content/conference_and_seminar/IConChemicalSCiences"))


export const routes = [
  {
    component: UIMessages,
    name: "Messages",
    link: "/ui-about-messages",
  },
  {
    component: UIMission,
    name: "UIMission",
    link: "/ui-about-mission",
  },
  {
    component: UIObjectives,
    name: "UIObjectives",
    link: "/ui-about-objectives",
  },
  {
    component: UIProfile,
    name: "UIProfile",
    link: "/ui-about-profile",
  },
  {
    component: UIRecognition,
    name: "UIRecognition",
    link: "/ui-about-recognition",
  },
  {
    component: HomeScreen,
    name: "HomeScreen",
    link: "/",
  },
  {
    component: UIVision,
    name: "UIVision",
    link: "/ui-about-vision",
  },
  {
    component: Admission,
    name: "Admission",
    link: "/admisison",
  },
  {
    component: PreAdmission,
    name: "PreAdmission",
    link: "/pre-admission",
  },
  {
    component: Payment,
    name: "Payment",
    link: "/payment",
  },
  {
    component: UICourse,
    name: "UICourse",
    link: "/ui-courses/:course",
  },
  {
    component: UIInfrastructure,
    name: "UIInfrastructure",
    link: "/ui-infrastructure/:item",
  },
  {
    component: UICorporateSupport,
    name: "UICorporateSupport",
    link: "/ui-placement/corporate-support",
  },
  {
    component: UIPlacements,
    name: "UIPlacements",
    link: "/ui-placement/placements",
  },
  {
    component: UIPlacementRecord,
    name: "UIPlacementRecord",
    link: "/ui-placement/placement-record",
  },
  {
    component: UIEventsActivities,
    name: "UIEventsActivities",
    link: "/ui-events-activities/:item",
  },
  {
    component: UICollaboration,
    name: "UICollaboration",
    link: "/ui-collaboration/:item",
  },
  {
    component: UIContact,
    name: "UIContact",
    link: "/contact",
  },
  {
    component: Courses,
    name: "Courses",
    link: "/ui-home/courses",
  },
  {
    component: ResearchPhd,
    name: "ResearchPhd",
    link: "/ui-home/research",
  },
  {
    component: LoginScreen,
    name: "LoginScreen",
    link: "/login",
  },
  {
    component: Profile,
    name: "Profile",
    link: "/profile",
  },
  {
    component: OrdinanceRegulation,
    name: "OrdinanceRegulation",
    link: "/ui-home/research/ordinance-regulation",
  },
  {
    component: OrdinancePreamble,
    name: "OrdinancePreamble",
    link: "/ui-home/research/ordinance-regulation/preamble",
  },
  {
    component: OrdItems,
    name: "OrdItems",
    link: "/ui-home/research/ordinance-regulation/:item",
  },
  {
    component: PhdInstructions,
    name: "PhdInstructions",
    link: "/ui-home/research/phd/instructions",
  },
  {
    component: SamplePaper,
    name: "SamplePaper",
    link: "/ui-home/research/sample-paper",
  },
  {
    component: SampleSynopsis,
    name: "SampleSynopsis",
    link: "/ui-home/research/sample-synopsis",
  },
  {
    component: ChecklistForThesis,
    name: "ChecklistForThesis",
    link: "/ui-home/research/check-list-for-thesis",
  },
  {
    component: NoticeSeatMatrixChecklist,
    name: "NoticeSeatMatrixChecklist",
    link: "/ui-home/research/notice",
  },
  {
    component: NoticeSeatMatrixChecklist,
    name: "NoticeSeatMatrixChecklist",
    link: "/ui-home/research/seat-matrix",
  },
  {
    component: NoticeSeatMatrixChecklist,
    name: "NoticeSeatMatrixChecklist",
    link: "/ui-home/research/check-list",
  },
  {
    component: NoticeSeatMatrixChecklist,
    name: "NoticeSeatMatrixChecklist",
    link: "/ui-home/research/check-list/:id",
  },
  {
    component: NationalConclave,
    name: "NoticeSeatMatrixChecklist",
    link: "/ui-events-activities/conference-seminar/national-conclave",
  },
  {
    component: InternationConferenceonShiftingParadigm,
    name: "InternationConferenceonShiftingParadigm",
    link: "/ui-events-activities/conference-seminar/international-conference-on-shifting-paradigm",
  },
  {
    component: IConTransformationofBusiness,
    name: "IConTransformationofBusiness",
    link: "/ui-events-activities/conference-seminar/international-conference-on-transformation-of-business",
  },
  {
    component: Anveshan,
    name: "Anveshan",
    link: "/ui-events-activities/conference-seminar/anveshan",
  },
  {
    component: IAOMRConference,
    name: "IAOMRConference",
    link: "/ui-events-activities/conference-seminar/iaomr-national-conference",
  },
  {
    component: IConChemicalSCiences,
    name: "IConChemicalSCiences",
    link: "/ui-events-activities/conference-seminar/international-conference-on-chemical-sciences",
  },
];
