import { Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../../../constants/constants";

function IAOMRConference() {
  const content =
    "National Conference of Dental Surgeons sums-up with great success and knowledge enrichment\n\nDr. Tomohiro Okano & Dr. RamchandraModattigowda were International keynote Speakers\n\nOver 700 delegates participated from all over the world\n\n30th National IAOMR Conference was organized at Pacific Dental College and Hospital Debari, PAHER University from 23rd to 25th Nov 2018, under the aegis of Indian Academy of oral medicine and Radiology. It is for the first time that this conference is held in Rajasthan even after 30 years of inception of this specialty. Oral medicine and radiology is that specialty of dentistry which deals with treatment of medically compromised patients, diagnosis of oral diseases, treatment of soft tissue lesions of oral cavity, management of temperomandibular joint disorders, orofacial pain disorders treatments, dentomaxillofacial radiology including CBCT etc.\n\nThe preconference courses for faculty and post graduates were namely. Faculty development programme conducted by Dr. AnjanaBagewadi, DrVaishaliKeluskar and Dr. MuktaMotwani.Diagnostic Arthroscopy and Arthrocentesis conducted by Dr. Nehal Patel.Occlusal splint therapy – Heal the TMJ conducted by Dr. AvinashKshar.Strengthening cessation capacity for tobacco control among dental professionals conducted by Dr. Manu Mathur and Dr. Ashutosh.Radiotherapy – The invisible healer of silent killers conducted by Dr. Ramesh Purohit at Geetanjali dental college.\n\nAround 700 delegates registered for this conference from all over the world. There were four Keynote lectures delivered. Dr. Tomohiro Okano, faculty of Tokyo Dental college travelled all the way from Japan to speak on “Cone Beam CT: Basics and clinical applications”. He elaborated on recent trends of CBCT all over the world and research and development of CBCT in Japan. Dr. AjitDinkar gave a keynote on Forensic Dentistry – Trends in India. Dr. Tatu Joy travelled from Kanyakumari to enlighten the delegates about Neuromuscular Dentistry for OMR as a keynote. Most importantly Dr. RamchandraModattigowda travelled all the way from London to address the delegates about the importance of oral medicine and Radiology, with Keynote title “Beyond the Boundaries of Vermilion Border”.\n\nThe inauguration ceremony was on 23rd November evening at Pacific Dental College. The Chief Guest of the occasion was Dr. BharathShetty, MLA from North Mangalore constituency, member DCI, past Vice President Dental Council of India. He spoke about the scope of oral medicine and radiology and how the branch should improvise to increase the demand of this specialty. Guest of honor Dr. A. BhagwandasRai spoke about the specialty to reform its curriculum, clinical acumen to Innovate, Improvise and Integrate the subject. Organizing Chairman Dr. Mohit Pal Singh gave the welcome address, Dr. HemantMathur the Organizing secretary gave the thanks giving. Treasurer Dr.Bhuvaneshwari and the scientific chairman Dr. Archana MS spoke about the event. The ceremony was graced by various dignitaries from various backgrounds, including Registrar of PAHER University, Deans and Directors of various faculties of PAHER University. Principals of various Dental colleges of Udaipur also graced the occasion with their presence.\n\nGuest Speakers from various dental colleges of India enlightened the audience by delivering various lectures namely. Clinical diagnostic skills in oral medicine and radiology by Dr. AshaIyengar.Effective communication in teaching – The art and its challenges by Dr. Chaya David.3D Printing – The next game changer by Dr. Bharat Mody.3D Printing – Paradigm shift in Dentistry by Dr. Suresh Ludhwani.3D Implant planning – Undo the unseen by Dr. Junaid Ahmed.Test, referrals and fitness prior to dental treatment by Dr. Selvamuthukumar.Empower and evolve the cutting edge – Practice management for OMR faculty, PG’s and Practitioners.Salivary gland imaging – Retrospection to prospection by Dr. K.P Sansare.Therapeutical aspects of oral mucosal lesions by Dr. Ramesh Tatapudi.Recapturing the cause and registering the identity through radiography by Dr. M.K Sunil. Postgraduates from all over India presented around 400 original research/paper presentations and around 70 presentations were given by faculty delegates in this conference.\n\nThe valedictory function was graced by Shri M K Lakshyaraj Singh JiMewar on 25th November from 4PM onwards, during this programme prize distribution was done. Prizes were distributed to various categories such as best paper, poster, research, highest scorer, quiz competition winners, reviewers etc.Shri M K Lakshyaraj Singh JiMewar enthralled the audience by his stupendous speech covering Dental profession, humanity, wellbeing of society, peace and integrity of the nation. He also enlightened about history, geography, economy and potential of Mewar (Udaipur) region. The mega scientific event of 30th national IAOMR Conference was finally concluded with extremely informative, interactive academic discussions and exchanges amongst faculty and delegates leading to summation of this conference theme “Retrospection to Prospection”.";
  const images = [
    "http://www.pacific-university.ac.in/uploads/Pages/Document/VALEDICTORY.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/DSC9259.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/6.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/DSC9257.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/DSC9258.jpg",
  ];
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/11405/_default.jpg",
      ]}
      text={"IAOMR National Conference"}
    >
      <Text mt={25} weight={600} color="primary">
        30th IAOMR National Conference Indian Academy of Oral Medicine and
        Radiology
      </Text>
      <Text
        mt={25}
        sx={{
          whiteSpace: "pre-wrap",
        }}
        size="sm"
      >
        {content}
      </Text>
      <SimpleGrid cols={4} mt={40} breakpoints={breakpoints("lg")}>
        {images.map((e, i) => (
          <Image
            sx={(theme) => ({
              "&:hover": {
                marginTop: "-5px",
              },
            })}
            key={i}
            withPlaceholder
            src={e}
          />
        ))}
      </SimpleGrid>
    </CustomHeroSection>
  );
}

export default IAOMRConference;
