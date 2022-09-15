import { Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";

function NativeSection({ title, content }) {
  return (
    <>
      <Text mt={40} color='primary' weight={600} size={"sm"}>
        {title}
      </Text>
      {content.map((e) => (
        <Text  mt={10} key={e} size={"sm"}>
          {e}
        </Text>
      ))}
    </>
  );
}

function NationalConclave({images}) {
  return (
    <div className="mt-5">
      <Text size="sm">
        The two-day{" "}
        <Text component="span" weight={600}>
          National conclave on Intellectual Property Rights in Current Business
          Context (Online)
        </Text>{" "}
        was organized by Pacific Academy of Higher Education and Research
        University, Udaipur in association with Indian Accounting Association,
        Udaipur Branch on 26-27, July 2021. The objective of the conclave was to
        discuss the various aspects of the intellectual property rights in
        different extents of business including accounting and finance, as well
        as to provide a platform for its better understanding of the
        contemporary issues of the subject.
      </Text>
      <NativeSection
        title={"Day 1: 26th July 2021"}
        content={[
          "The conclave started with the inaugural session, where a brief introduction of all the guests and resource person of the sessions was given. Prof Krishna Kant Dave ,President of the University welcomed all the guests ,dignitaries and participants of the event. Chief guest of the session Prof. G. Soral, National President, Indian Accounting Association discussed the various activities conducted by the association in the academics, research and development. He said that intellectual property owned by a person is the real wealth they have generated and its protection along with its development it is a need of an hour. The chairman of the Indian Accounting association, Udaipur branch, Prof. S. S Sarangdevot ,Vice-Chancellor, Janardan Rai Nagar Rajasthan Vidyapeeth University, Udaipur in his speech said that with the changing environment in business and economy, intellectual property rights are gaining utmost important and their development and protection should be our first priority. On this occasion professor Hemant Kothari, Dean, Postgraduate Studies discussed the initiatives taken by the University with respect to patent registration. Head of Screenplay -Whistling Woods Academy, Mumbai and well-Known Script writer of the films Gulam, Rajneeti, the legend of Bhagat Singh, Drohkaal Mr. Anjum Rajabali in his keynote speech said that protection of IPRs is the only way to strengthen intellectual creations and innovations of script writers in the film industry. He emphasized that the performance of film industry is rapidly gaining its quality since the enactment of intellectual property rights are given attention. He said that initially the success rate of films for very poor since not much attention was given to protect the rights of various intellectuals contributing in making the film. Special guest of the inaugural function, executive director of Pacific Medical College Hospital, Mr. Aman Agrawal emphasized on strengthening the rights of intellectual property holders in the changing Arena of business. of the narration the Dr Pushpkant Shakdwipee chief Coordinator of the Conclave provided the detail of the two-day Conclave.",
          "In First Session on Importance of IPR in Indian Perspective, Prof. Ganesh Hingmire, Chairman Great Mission Group Consultancy explained the need and importance of Intellectual Property Rights for the economic development of the country. He said that the progress and development of an individual is entirely based on the use of his innovative ideas as mere idea can’t create any intellectual property unless it is given a practical approach of Implementation.",
          "In the second session, Mr Dani Rajiah, Member Secretary, Department of Atomic Energy IPR cell, provided a detailed introduction of IPR and discussed its categories including Patents, copyrights, trademarks. Various aspects of such properties in the relevant areas of Commercial brands, drama, music, literature, pharmaceuticals etc. He also referred the provisions of patent act 1970 and atomic energy act 1962 for signifying the IPRs in the spheres of scientific innovations and applications. He emphasised on various terms and condition necessary for registering industrial designs and geographical indications.",
        ]}
      />
      <NativeSection
        title={"Day 2 : 27th July 2021"}
        content={[
          "In first session Mr Nilesh Trivedi, Assistant Director, DI-MSME, Indore Government of India, Ministry of MSME elaborated various types of trademarks including wordmark, service mark, logos, symbols, device mark, shape of goods, series mark, collective trademark and certification mark. He also described the prohibited trademark which can't be used as trademark in any of the commercial or any other communications. He motivated to get register one’s intellectual property in order to protect it. Later he explained various types of policies and programs initiated by government of India in this direction. The process of registering the trademark was given by the speaker.",
          "In second session Prof. Vijay Kumar Sukhwani from Government Engineering College, Ujjain delivered his session on IPR: global versus Indian perspective. He exhibited the IPR status of few selected companies in contrast with India's position. He said that as per World intellectual property organisation India has filed only 46582 applications in 2017.He emphasised on Improving the present position of India in reference to registration of Copyrights, Trademark, Patents and Geographical Indications.",
          "Session three on geographical indications was taken by Dr Ruchi Sharma associate professor school of social science and humanities IIT Indore. She discussed various economic aspects of geographical indications along with its development. She explained the challenges faced by the producers of geographical indications confronts, including registration in foreign jurisdiction, enforcement of the rights at National and international level, building the brand image globally and locally. She emphasizes on providing financial support from the government part at initial stages. Explaining the position of geographical indications in India she said that a system of geographical indication protection was established with the enactment of goods registration and protection act 1999 was notified in the gazette of India on December, 30th, 1999 the rules were notified in March 8, 2002 and the Act came into force on September 2003.",
          "In last session, CA Alok Garg in his session on Financial Reporting of Intangibles in India, discussed about the modes of acquisition and measurements of intangible assets. He discussed the various aspects of intangible assets with reference to Accounting Standard 26, Indian accounting standard 38 and international accounting standard 38. An understanding of the intangible asset recognition criteria was also taken in the session.",
          "The Moderators of the event were Prof. Sudesh Sharma and M.s Karishma Dyer. Dr Pushpkant Shakdwipee gave the vote of thanks to all the esteemed guests, resource persons and participants. Total two hundred and sixty-three participants attended the conclave through Zoom Platform.",
        ]}
      />
      <SimpleGrid mt={30} cols={4} breakpoints={breakpoints('sm')}>
        {images.map(e=><Image src={e} key={e} />)}
      </SimpleGrid>
    </div>
  );
}

export default NationalConclave;
