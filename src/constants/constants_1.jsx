const courseSingleData = (course, eligibility, duration, fees) => {
  return {
    course,
    eligibility,
    duration,
    fees,
  };
};
export const coursesInfoData = [
    {
      name: "agriculture",
      contacts: ["9929222551"],
      email: ["agri@pacific-university.ac.in"],
      table: [
        {
          course: "B.Sc. Agriculture",
          eligibility: "10+2 pass (Science+Maths/Bio/Agriculture)",
          duration: "4 Yrs.",
          fees: "80,000",
        },
        {
          course: "M.Sc. Agriculture",
          eligibility: "B.Sc.(Agriculture)",
          duration: "2 Yrs.",
          fees: "80,000",
        },
        {
          course: "Ph.D",
          eligibility: "M.Sc. (Agriculture) in Respective Disciplines",
          duration: "3 Yrs.",
          fees: "-",
        },
      ],
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4980/_default.jpg",
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/7318/_default.jpg",
      ],
      contacts: ["7665017753", "9672970940"],
      email: [" info@pacific-university.ac.in", "pcssh@pacific-university.ac.in"],
      name: "arts",
      table: [
        {
          course: "B.A.(Hindi and English Medium)",
          eligibility: "10+2 from any stream",
          duration: "3 Yrs.",
          fees: "10,000",
        },
        {
          course: "M.A.",
          eligibility: "Graduation in any stream",
          duration: "2 Yrs.",
          fees: "15,000",
        },
        {
          course: "MSW",
          eligibility: "Graduation in any stream",
          duration: "2 Yrs.",
          fees: "40,000",
        },
        {
          course: "Ph.D.",
          eligibility: "Post Graduation in Arts stream",
          duration: "3 Yrs (Minimum)",
          fees: "-",
        },
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/7318/_default.jpg",
      ],
      contacts: ["9887262020", "9672970930", "9672970940", "7665017757"],
      email: [" info@pacific-university.ac.in"],
      name: "commerce",
      table: [
        {
          course: "B.Com.",
          eligibility: "10+2 from any stream",
          duration: "3 Yrs.",
          fees: "40,000",
        },
        {
          course: "B.B.A",
          eligibility: "10+2 from any Stream",
          duration: "3 Yrs.",
          fees: "50,000",
        },
        {
          course: "B.Com with ACCA (UK)",
          eligibility: "10+2 from any Stream",
          duration: "3 Yrs.",
          fees: "60,000",
        },
        {
          course: "BBA with CMA (USA)",
          eligibility: "10+2 from any Stream",
          duration: "3 Yrs",
          fees: "70,000",
        },
        {
          course: "BBA Digital Marketing in Collaboration with Upgrade",
          eligibility: "10+2 from any Stream",
          duration: "3 Yrs",
          fees: "90,000",
        },
        {
          course: "M.Com",
          eligibility: "Graduation from Any Stream",
          duration: "2 Yrs",
          fees: "25,000",
        },
        {
          course: "Diploma in Business Analytics",
          eligibility: "10+2 from any stream",
          duration: "1 Yr",
          fees: "30,000",
        },
        {
          course: "Diploma Digital Marketing",
          eligibility: "10+2 from any stream",
          duration: "1 Yr",
          fees: "25,000",
        },
        {
          course: "Ph.D.",
          eligibility: "Post Graduation in Commerce Stream",
          duration: "	Minimum 3 Yrs.",
          fees: "-",
        },
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4339/_default.jpg",
      ],
      contacts: [" 9587892884", "9587892884", "9587892884"],
      email: [" info@pacific-university.ac.in", "FCA@pacific-university.ac.in"],
      name: "computer-science",
      table: [
        {
          course: "BCA",
          eligibility: "10+2 from any stream",
          duration: "3 Yrs.",
          fees: "40,000",
        },
        {
          course: "PGDCA",
          eligibility: "Graduation in any Stream",
          duration: "1 Yr.",
          fees: "40,000",
        },
        {
          course: "MCA ",
          eligibility:
            "Passed PGDCA/BCA/B.Sc/B.Com./B.A with Mathematics at 10+2 Level or at Graduation",
          duration: "2 Yrs.",
          fees: "50,000",
        },
        {
          course: "M.Sc(IT, CS) ",
          eligibility: "Graduation in Any stream",
          duration: "2 Yrs.",
          fees: "40,000",
        },
        {
          course: "Certification in PDNAIT(IOA-UK)",
          eligibility: "Graduation in Any stream",
          duration: "1 Yr.",
          fees: "40,000",
        },
        {
          course: "Ph.D.",
          eligibility: "Post Graduation in Computer Stream",
          duration: "	Minimum 3 Yrs.",
          fees: "-",
        },
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/6061/_default.jpg",
      ],
      contacts: [" 9672978063", "9672917869", "7665017757"],
      email: [" dairytech@pacific-university.ac.in"],
      name: "dairy",
      table: [
        {
          course: "B.Tech (Dairy Technology)",
          eligibility: "10+2 (Science: Maths / Biology / Agriculture)",
          duration: "4 Yrs.",
          fees: "60,000",
        },
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4687/_default.jpg",
      ],
      contacts: [" 7665017760"],
      email: ["  info@pacificdentalcollege.com", "info@pacific-university.ac.in"],
      website: "https://www.pacificdentalcollege.com",
      name: "dental",
      table: [
        {
          course: "B.D.S.",
          eligibility: "10+2 (Science Biology)",
          duration: "4+1 Yrs.",
          fees: "-",
        },
        {
          course: "M.D.S.",
          eligibility: "B.D.S",
          duration: "3 Yrs.",
          fees: "-",
        },
        {
          course: "Diploma in Dental Mechanics & Hygienist",
          eligibility: "10+2 (Science Biology)",
          duration: "2 Yrs.",
          fees: "-",
        },
        {
          course: "Ph.D.",
          eligibility: "Post Graduation in Dental Science",
          duration: "	Minimum 3 Yrs.",
          fees: "-",
        },
        {
          course: "Post Graduate Certificate Course in Oral Implantology	",
          eligibility:
            "Minimum qualification of B.D.S or equivalent from a recognized Institution in India or Overseas.",
          duration: "	1 Year Duration Course",
          fees: "-",
        },
      ],
      description: [
        "Conservative Dentistry & Endodontics, Orthodontics, Oral & Maxillofacial Surgery, Prosthodontics & Crown & Bridge, Pedodontics & Preventive Dentistry, Periodontology, Oral Medicine Radiology, Public Health Dentistry, Oral Pathology & Microbiology",
      ],
    },
    {
      carouselImages: ["https://www.pacific-university.ac.in/images/course.jpg"],
      contacts: [" 7665017791", "9672970940", "7665017757"],
      email: ["  info@pacificdentalcollege.com", "info@pacific-university.ac.in"],
      website: "https://www.pacific-it.ac.in",
      name: "engineering",
      table: [
        {
          course: "B.Tech. (ME, Civil, EE,CSE, Mining)",
          eligibility: "	12th (Science + Maths)",
          duration: "4 Yrs.",
          fees: "60,000",
        },
        {
          course:
            "B.Tech.(Artifical Intelligence & Machine Learning in Collaboration with Upgrad)",
          eligibility: "	12th (Science + Maths)",
          duration: "4 Yrs.",
          fees: "95,000",
        },
        {
          course:
            "M.Tech(CAD/CAM,Structural Engg,Geotechnical Engg, Software Engg,Computer Science Engg,Digital Communication, VLSI,Control & Instrumentation Engg,Power System,Industrial Engg, Production Engg,CTM,IT, Production & Industrial Engg,Energy Studies)",
          eligibility: "B.Tech. or Equaivalent",
          duration: "2 Yrs.",
          fees: "80,000",
        },
        {
          course: "Certification in Data Analytic(IOA-UK)",
          eligibility: "with B.Tech.",
          duration: "6 Months",
          fees: "40,000",
        },
        {
          course: "Executive Diploma in Game Development",
          eligibility: "with B.Tech.",
          duration: "	6 months",
          fees: "40,000",
        },
        {
          course: "Ph.D.",
          eligibility: "	Post Graduation in Engineering Stream",
          duration: "	Minimum 3 Years",
          fees: "-",
        },
      ],
      description: [
        "Special scholarship of Rs.30,000 Per Year (Net Payable Rs 50,000 Per annum) For Limited Peried of Time.",
        "B.Tech. Branches : Data Science and Analytics, Artificial Intelligence, Civil, Mechanical, CSE, Electrical, Mining",
        "M.Tech. Branches : Civil Engineering (Geotechnical Engineering, Structural Engineering, Construction Technology & Management, Environment Engineering), Computer Science & Engineering(Computer Engineering, Software Engineering), Electrical Engineering (Control & Instrumentation, Power Systems), Mechanical Engineering(Energy Studies, Production Engineering, Production & Industrial Engineering)",
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4689/_default.jpg",
      ],
      contacts: [" 9672978055", "9672970940", "7665017757"],
      email: [" B.Ed@pacific-university.ac.in", "info@pacific-university.ac.in"],
      website: "https://www.pcteudaipur.org.in",
      name: "education",
      table: [
        {
          course: "D.El.Ed",
          eligibility: "10+2 in any Stream(With 50% Marks)*",
          duration: "2 Yrs.",
          fees: "90,000",
        },
        {
          course: "B.A.+B.Ed.",
          eligibility: "10+2 in any Stream(With 50% Marks)*",
          duration: "4 Yrs.",
          fees: "40,000",
        },
        {
          course: "B.Sc.+B.Ed.",
          eligibility: "10+2 in Science Stream(With 50% Marks)*",
          duration: "4 Yrs.",
          fees: "50,000",
        },
        {
          course: "B.Ed",
          eligibility: "Graduation in any stream",
          duration: "2 Yrs.",
          fees: "65,000",
        },
        {
          course: "M.A. (Education)",
          eligibility: "Graduation in any Stream",
          duration: "2 Yrs.",
          fees: "15,000",
        },
        {
          course: "Ph.D.",
          eligibility: "M. Ed / M.A. (Education)",
          duration: "	Minimum 3 Years",
          fees: "-",
        },
      ],
      description: ["*Relaxation as per Govt. Norms"],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/2617/_default.jpg",
      ],
      contacts: [" 9672970953", "7665444253", "9414252110"],
      email: ["pifsm@pacific-university.ac.in"],
      website: "https://www.pifsm.ac.in",
      name: "fire-safety",
      table: [
        {
          course: "PG Diploma in Health, Safety & Environment",
          eligibility: "B.Sc/B.E./B.Tech in any stream",
          duration: "1 Year",
          fees: "42,500",
        },
        {
          course: "PG Diploma in Fire and Safety Management",
          eligibility: "Graduation in any Stream",
          duration: "	1 Year",
          fees: "42,500",
        },
        {
          course: "B.Sc. in Fire Tech. & Industrial Safety Management",
          eligibility: "10+2 (From Any Stream)",
          duration: "3 Yrs.",
          fees: "40,000",
        },
        {
          course: "Diploma - Health, Safety & Environment",
          eligibility: "10+2(Science)/ITI",
          duration: "1 Year",
          fees: "42,500",
        },
        {
          course: "Diploma - Fire & Safety Management",
          eligibility: "12th Pass",
          duration: "1 year",
          fees: "42,500",
        },
        {
          course: "Diploma - Industrial Safety Management",
          eligibility: "10+2 from any Stream",
          duration: "1 Year",
          fees: "42,500",
        },
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4273/_default.jpg",
      ],
      contacts: [" 9672978016", "7665017734", "9672970940", "7665017757"],
      email: [
        " info@pihm.org",
        "pchmct@yahoo.co.in",
        "info@pacific-university.ac.in",
      ],
      website: "https://www.pihm.org",
      name: "hotel-management",
      table: [
        {
          course: "Trade Diploma in Hotel Management(TDHM)*",
          eligibility: "10+2 from any Stream",
          duration: "1 Yr.",
          fees: "52,000",
        },
        {
          course: "Diploma in Hotel Management*",
          eligibility: "10+2 from any Stream",
          duration: "2 Yrs.",
          fees: "55,000",
        },
        {
          course: "B.Sc in Hotel Management(BScHM)*",
          eligibility: "10+2 (From Any Stream)",
          duration: "3 Yrs.",
          fees: "67,000",
        },
        {
          course: "Bachelor in Hotel Management & Catering Technology (BHMCT)*",
          eligibility: "10+2 from any Stream",
          duration: "4 Yrs.",
          fees: "67,000",
        },
        {
          course: "Master of Tourism & Hotel Management(MTHM)*",
          eligibility: "Graduation in Any Stream",
          duration: "2 Yrs.",
          fees: "55,000",
        },
        {
          course: "Diploma in Bakery & Confectionery",
          eligibility: "10+2 from any Stream",
          duration: "1 Year",
          fees: "60,000",
        },
        {
          course: "Three Month Certification Course in Food Production",
          eligibility: "10+2 from any Stream",
          duration: "3 Months",
          fees: "10,000",
        },
        {
          course: "Three Month Certification Course in Bakery & Confectionery",
          eligibility: "10+2 from any Stream",
          duration: "3 Months",
          fees: "10,000",
        },
        {
          course: "Three Month Certification Course in Bar & Mixology",
          eligibility: "10+2 from any Stream",
          duration: "3 Months",
          fees: "10,000",
        },
        {
          course: "Executive Diploma in Cruise Development",
          eligibility: "10+2 from any Stream",
          duration: "1 year",
          fees: "3,30,000(Include Accommodation)",
        },
        {
          course:
            "Ph.D (Hotel & Tourism Management)Executive Diploma in Cruise Development",
          eligibility: "Post Graduation in Tourism / Hotel Management",
          duration: "Minimum 3 Yrs.",
          fees: "-",
        },
      ],
      description: ["Uniform Rs -8000/-(Complusory Payable)"],
    },
    {
      approved: "(Approved By Bar Council of India)",
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4685/_default.jpg",
      ],
      contacts: [" 9460117336", "7665017754", "9672970940"],
      email: [" law@pacific-university.ac.in"],
      name: "law",
      table: [
        {
          course: "B.A. + LL.B.",
          eligibility: "10+2 from any Stream",
          duration: "5 Yrs.",
          fees: "40,000",
        },
        {
          course: "LL.B.",
          eligibility: "Graduate in Any Stream",
          duration: "3 Yrs.",
          fees: "30,000",
        },
        {
          course: "LL.M.",
          eligibility: "	LL.B with minimum 50% marks",
          duration: "1 Year",
          fees: "60,000",
        },
        {
          course: "LL.M.",
          eligibility: "LL.B with minimum 50% marks",
          duration: "2 Yrs.",
          fees: "50,000",
        },
      ],
    },
    {
      approved: "(Approved by AICTE, New Delhi)",
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4683/_default.jpg",
      ],
      contacts: [" 9672978034", "9983992222", "9460117336"],
      email: [" director@pimanagement.org"],
      website: " www.pimanagement.org",
      name: "management",
      table: [
        {
          course: "MBA (Dual Specialization)",
          eligibility: "Graduation in Any Stream",
          duration: "	2 Years",
          fees: "85,000",
        },
        {
          course: "MBA (Business Analytics)",
          eligibility: "Graduation in Any Stream",
          duration: "	2 Years",
          fees: "1,25,000",
        },
        {
          course: "MBA (Hospital Administration)",
          eligibility: "Graduation in Any Stream",
          duration: "	2 Years",
          fees: "85,000",
        },
        {
          course: "MBA(Digital Marketing)",
          eligibility: "Graduation in Any Stream",
          duration: "	2 Years",
          fees: "1,25,000",
        },
        {
          course: "MBA (Executive)",
          eligibility: "Graduation in Any Stream",
          duration: "	2 Years",
          fees: "85,000",
        },
        {
          course: "PG Diploma In Logistic & Supply Chain Management",
          eligibility: "Graduation in Any Stream",
          duration: "	1 Year",
          fees: "60,000",
        },
        {
          course: "Certification:NSE Certified Market Professional (NCCMP)",
          eligibility: "Graduation in Any Stream",
          duration: "6 months",
          fees: "20,000",
        },
        {
          course: "Certification:NSE Banking",
          eligibility: "Graduation in Any Stream",
          duration: "6 months",
          fees: "5900",
        },
        {
          course: "Certification:Total Quality Management",
          eligibility: "Graduation in Any Stream",
          duration: "6 months",
          fees: "4500",
        },
        {
          course: "Ph.D.",
          eligibility: "Post Graduation in Management Stream",
          duration: "Minimum 3 Yrs.",
          fees: "-",
        },
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4692/_default.jpg",
      ],
      contacts: [" 9887262020", "9672970940", "7665017757"],
      email: ["info@pacific-university.ac.in"],
      name: "mass-media-communication",
      table: [
        {
          course: "Diploma of Journalism & Mass Communication (DJMC)",
          eligibility: "10+2 from any stream",
          duration: "	3 Years",
          fees: "30,000",
        },
        {
          course: "B.A. Journalism & Mass Communication (BA-JMC)",
          eligibility: "	10+2 from any stream",
          duration: "	3 Years",
          fees: "50,000",
        },
        {
          course: "M.A. Journalism & Mass Communication (MA-JMC)",
          eligibility: "Graduation in Any Stream",
          duration: "	2 Years",
          fees: "40,000",
        },
        {
          course: "Ph.D.",
          eligibility: "Post Graduation in Media / Mass Communication Stream",
          duration: "Minimum 3 Yrs.",
          fees: "-",
        },
      ],
    },
    {
      approved:
        "(Recognized by Pharmacy Council of India, & Approved by AICTE, New Delhi)",
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/898/_default.jpg",
      ],
      contacts: [" 7665017717", "9672970940", "7665017757"],
      email: [" pharm@pacific-university.ac.in"],
      website: "www.pcpharmacy.org.in",
      name: "pharmacy",
      table: [
        {
          course: "Diploma in Pharmacy (D.Pharm)",
          eligibility: "10+2 (Science + Maths / Biology)",
          duration: "	2 Years",
          fees: "90,000",
        },
  
        {
          course: "Bachelor in Pharmacy (B.Pharm)",
          eligibility: "10+2 (Science + Maths / Biology)",
          duration: "	4 Years",
          fees: "70,000",
        },
        {
          course: "Master of Pharmacy (M.Pharm)*",
          eligibility: "B.Pharm",
          duration: "	2 Years",
          fees: "75,000",
        },
        {
          course: "Ph.D",
          eligibility: "Post Graduation in Pharmacy Stream",
          duration: "	Minimum 3 Yrs.",
          fees: "-",
        },
      ],
    },
    {
      approved:
        "(Recognized by Pharmacy Council of India, & Approved by AICTE, New Delhi)",
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4704/_default.jpg",
      ],
      contacts: [" 9672978055"],
      email: [" info@pacific-university.ac.in"],
      website: "www.pcpe.ac.in",
      name: "physical-education",
      table: [
        {
          course: "B.P.Ed",
          eligibility: "Graduation in any stream",
          duration: "	2 Years",
          fees: "70,000",
        },
        {
          course: "M.P.Ed",
          eligibility: "Graduation in any stream",
          duration: "	2 Years",
          fees: "60,000",
        },
        {
          course: "Ph.D (Physical Education)",
          eligibility: "	Post Graduation in Physical Education",
          duration: "Minimum 3 Yrs.",
          fees: "-",
        },
      ],
    },
    {
      approved:
        "(Recognized by Pharmacy Council of India, & Approved by AICTE, New Delhi)",
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4704/_default.jpg",
      ],
      contacts: [" 9672978055"],
      email: [" info@pacific-university.ac.in"],
      website: "www.pcpe.ac.in",
      name: "physical-education",
      table: [
        courseSingleData(
          "B.P.Ed",
          "Graduation in any stream",
          "2 Years",
          "70,000"
        ),
        courseSingleData(
          "M.P.Ed",
          "Graduation in any stream",
          "2 Years",
          "60,000"
        ),
        courseSingleData(
          "Ph.D (Physical Education)",
          "Post Graduation in Physical Education",
          "Minimum 3 Yrs.",
          "-"
        ),
      ],
    },
    {
      approved: "(Approved by AICTE, New Delhi)",
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4370/_default.jpg",
      ],
      contacts: [" 9530360191", "9672970940", "7665017757"],
      email: [" info@pacific-polytechnic.ac.in", "info@pacific-university.ac.in"],
      website: "www.pacific-polytechnic.ac.in",
      name: "polytechnic",
      table: [
        courseSingleData(
          "B.P.Ed",
          "Graduation in any stream",
          "2 Years",
          "70,000"
        ),
        courseSingleData(
          "M.P.Ed",
          "Graduation in any stream",
          "2 Years",
          "60,000"
        ),
        courseSingleData(
          "Ph.D (Physical Education)",
          "Post Graduation in Physical Education",
          "Minimum 3 Yrs.",
          "-"
        ),
      ],
      description: [
        "Special scholarship of Rs.10,000 Per Year (Net Payable Rs 40,000 Per annum) For Limited Peried of Time.",
      ],
    },
    {
      approved: "(Approved by AICTE, New Delhi)",
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4369/_default.jpg",
      ],
      contacts: [" 7665017783", "9672970940", "7665017757"],
      email: [" info@pacific-polytechnic.ac.in", "info@pacific-university.ac.in"],
      website: "www.pacificscience.ac.in",
      name: "science",
      table: [
        courseSingleData(
          "B.Sc.(BCZ(Botany,Chemistry,Zoology),PCM(Physics,Chemistry,Mathematics))",
          "10+2 from Science stream",
          "3 Years",
          "25,000"
        ),
        courseSingleData(
          "M.Sc.(Chemistry(Industrial,Organic), Mathematics, Physics,Botany,Zoology)",
          "B.Sc. in any Stream",
          "2 Years",
          "25,000"
        ),
        courseSingleData(
          "Ph.D.",
          "Post Graduation in Physical Education",
          "Minimum 3 Yrs.",
          "-"
        ),
      ],
    },
    {
      carouselImages: [
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4284/_default.jpg",
      ],
      contacts: [" 7665017752", "9672970940", "7665017757"],
      email: ["fy@pacific-university.ac.in", "info@pacific-university.ac.in"],
      website: "www.pacificscience.ac.in",
      name: "yoga",
      table: [
        courseSingleData(
          "Diploma in Yogic Science",
          "10+2 Pass in any stream",
          "1 Year",
          "25,000"
        ),
        courseSingleData(
          "PG Diploma in Yogic Science",
          "Graduation in any stream",
          "1 Year",
          "25,000"
        ),
        courseSingleData(
          "BA in Yogic Science",
          "10+2 from any stream",
          "3 Years",
          "30,000"
        ),
        courseSingleData(
          "M.Sc. in Yogic Science",
          "	Graduation in any stream",
          "2 Years",
          "30,000"
        ),
        courseSingleData(
          "M.A. in Yogic Science",
          "	Graduation in any stream",
          "2 Years",
          "30,000"
        ),
      ],
    },
    {
      carouselImages: ["https://www.pacific-university.ac.in/images/course.jpg"],
      contacts: [" 8107499313"],
      email: [" finearts@pacific-university.ac.in"],
      website: "www.pacificscience.ac.in",
      name: "fine-arts",
      table: [
        courseSingleData(
          "Diploma in Fine Arts in (Painting, Sculpture and Applied Art)",
          "10+2 from any stream",
          "1 Year",
          "25,000"
        ),
        courseSingleData(
          "Bachelor of Fine Arts in (Painting, Sculpture and Applied Art)",
          "10+2 from any stream",
          "4 Years",
          "50,000"
        ),
        courseSingleData(
          "PG Diploma in Fine Arts in (Painting, Sculpture and Applied Art)",
          "Graduation in any stream",
          "1 Year",
          "35,000"
        ),
        courseSingleData(
          "Master of Fine Arts in (Painting, Sculpture and Applied Art)",
          "Graduation in any discipline",
          "2 Years",
          "50,000"
        ),
      ],
    },
    {
      carouselImages: ["https://www.pacific-university.ac.in/images/course.jpg"],
      contacts: [" 7665017785"],
      email: [" : design@pacific-university.ac.in"],
      website: "www.pacificscience.ac.in",
      name: "fashion-design",
      table: [
        courseSingleData(
          "Interior Design Diploma",
          "10+2 from any stream",
          "1 Year",
          "40,000"
        ),
        courseSingleData(
          "Interior Design B. Design",
          "10+2 from any stream",
          "4 Years",
          "60,000"
        ),
        courseSingleData(
          "Interior Design B.Sc. Design",
          "10+2 from any stream",
          "3 Years",
          "60,000"
        ),
        courseSingleData(
          "Interior Design PG Diploma",
          "	Graduation in any stream",
          "3 Years",
          "60,000"
        ),
        courseSingleData(
          "Interior Design M. Design",
          "	Graduation in any stream",
          "1 Year",
          "40,000"
        ),
        courseSingleData(
          "Interior Design M.Sc. Design",
          "	Graduation in any stream",
          "2 Years",
          "70,000"
        ),
        courseSingleData(
          "Fashion Design Diploma",
          "10+2 from any stream",
          "1 Year",
          "40,000"
        ),
        courseSingleData(
          "Fashion Design B. Design",
          "10+2 from any stream",
          "4 Years",
          "60,000"
        ),
        courseSingleData(
          "Fashion Design B.SC. Design",
          "10+2 from any stream",
          "3 Years",
          "60,000"
        ),
        courseSingleData(
          "Fashion Design PG Diploma",
          "Graduation in any stream",
          "1 Year",
          "40,000"
        ),
        courseSingleData(
          "Fashion Design M. Design",
          "Graduation in any stream",
          "2 Years",
          "40,000"
        ),
        courseSingleData(
          "Fashion Design M.Sc. Design",
          "Graduation in any stream",
          "2 Years",
          "70,000"
        ),
        courseSingleData(
          "Textile Design Diploma",
          "10+2 from any stream",
          "1 Year",
          "40,000"
        ),
        courseSingleData(
          "Textile Design B. Design",
          "10+2 from any stream",
          "4 Years",
          "60,000"
        ),
        courseSingleData(
          "Textile Design B.Sc. Design",
          "10+2 from any stream",
          "3 Years",
          "60,000"
        ),
        courseSingleData(
          "Textile Design PG Diploma",
          "	Graduation in any stream",
          "1 Year",
          "40,000"
        ),
        courseSingleData(
          "Textile Design M. Design",
          "	Graduation in any stream",
          "2 Years",
          "70,000"
        ),
        courseSingleData(
          "Textile Design M.Sc. Design",
          "	Graduation in any stream",
          "2 Years",
          "70,000"
        ),
      ],
    },
    {
      carouselImages: ["https://www.pacific-university.ac.in/images/course.jpg"],
      contacts: [" 7665017785"],
      email: [" : design@pacific-university.ac.in"],
      website: "www.pacificscience.ac.in",
      name: "library-science",
      table: [
        courseSingleData("D.LIB Sci", "10+2 from any stream", "1 Year", "30,000"),
        courseSingleData(
          "B.LIB Sci",
          "Graduation in any stream",
          "1 Year",
          "30,000"
        ),
        courseSingleData("M.LIB Sci", "B.LIB", "1 Year", "35,000"),
      ],
    },
  ];
  