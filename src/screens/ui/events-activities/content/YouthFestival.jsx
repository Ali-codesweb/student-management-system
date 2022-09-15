import { Box, Image, SimpleGrid, Spoiler, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";

const YouthFestival = ({ images }) => {
  return (
    <div>
      <Image
        className="border shadow"
        src="http://pacific-university.ac.in/uploads/Pages/Document/1371350b-762a-4dfb-bafe-01282f961ea6.jpg"
        height={450}
        fit="cover"
      />
      <Text size="xl" align="center" mt={40} color="primary" weight={600}>
        South Asian Universities Festival - 2015
      </Text>
      <Text size="sm" align="center">
        (Sponsored and Powered by Pacific University)
      </Text>
      <Text mt={40} color="primary" size="lg" weight={600}>
        A Mega Event:
      </Text>
      <Text mt={10} siz="sm">
        8th South Asian Universities Festival -2015(SAUFEST 2015) was
        organized,sponsored and powered by Pacific University in collaboration
        with Mohan Lal Sukhadia University under the umbrella of Association of
        Indian Universities from 7th to 11th March 2015. Around 300 delegates
        from different Universities of India, Afghanistan, Bangladesh, Bhutan,
        Maldives, Mauritius, Myanmar, Nepal, Pakistan and Sri Lanka participated
        in the mega event of South Asian Countries. The theme of the festival
        was “South Asian Cultural Fusion". The Festival was organized to
        strengthen the emotional, social, intellectual and cultural integration
        among the youth of South Asian countries.:
      </Text>
      <Text mt={40} color="primary" size="lg" weight={600}>
        Saufest background:
      </Text>
      <Text mt={10} siz="sm">
        The idea of organizing SAUFEST was initiated by AIU to encourage the
        future generation of youth from South Asian countries to come on common
        platform for sharing views, experiences and common ideas so that a
        common agenda in taking the future regional challenges can be taken up.
        The role of SAUFEST is to ensure unity for peace, harmony and
        brotherhood among the people of South Asian region. Since its inception
        in 2007 over 19,000 young people have been involved in SAUFEST. SAUFEST
        is a noble concept of the Association of Indian Universities (AIU)
        ensuring from goal to promote active Collaboration and mutual
        understanding among of the South Asian Countries in educational , social
        , cultural and economic fields.
      </Text>
      <Text mt={40} color="primary" size="lg" weight={600}>
        Events:
      </Text>
      <Text mt={10} siz="sm">
        Series of events were held during 5 days including face painting, Folk
        dance, Spot Photography, Film making , One act play, Poster making,
        light vocal solo, Clay modeling Group instrumental ,Debate(English and
        Hindi),Folk song, Elocution, Regional and Cultural dance, Quiz, JAM,
        Mimicry, Fashion show. These various cultural events were added up by
        night seeing of Udaipur and nearby places including City palace, Lake
        pichola, Haldi ghati etc. The Festival was concluded with mega cultural
        programme. The participants were served delicious Rajasthani and
        different forms of Indian Food during five days of event.
      </Text>
      <Text mt={40} color="primary" size="lg" weight={600}>
        The Grand Inaugural:
      </Text>
      <Text mt={10} siz="sm">
        Udaipur, the city of lakes, witnessed the splendid cultural galore of
        the ten participating countries in the SAUFEST 2015. The vibrant
        youthful spirit reflected every country’s culture under one umbrella at
        the commencement of the procession at Fatehsagar. The procession ended
        at Vivekananda Auditorium, MLSU. The South Asian Universities Festivals
        grand inauguration began with the March Past Procession from Fatehsagar
        at 9.00 am.
      </Text>
      <Text mt={10} siz="sm">
        The procession was flagged off by the esteemed guests, Mr. Kalicharan
        Sharaf, State Minister of Education, Mr. Sunil Ambekar, National
        President-ABVP, Mr Chander Singh Kothari, Mayor-Udaipur, Mr Samsung
        David, Jt Secretary - AIU, Prof. I. V. Trivedi,Vice Chancellor- MLSU,
        Prof. Gill, Vice Chancellor- MPUAT, Prof. B.P. Sharma, President-
        Pacific University, Shri Rahul Agarwal, Secretary- PAHER, Shri Sharad
        Kothari- Registrar- PAHER, Prof D.S. Chundawat.
      </Text>
      <Text mt={40} color="primary" size="lg" weight={600}>
        Events & Activities:
      </Text>
      <SimpleGrid mt={30} cols={4} breakpoints={breakpoints("sm")}>
        {images.map((e) => (
          <Box
            key={e}
            py={10}
            className="border"
            sx={(theme) => ({
              transition: "100ms ease-in",
              borderRadius: "10px",
              backgroundColor: theme.colors.gray[0],
              "&:hover": {
                backgroundColor: theme.colors.blue[0],
              },
            })}
          >
            <Image src={e} withPlaceholder height={150} fit="contain" />
          </Box>
        ))}
      </SimpleGrid>

      <Spoiler maxHeight={0} showLabel="Show more" hideLabel="Hide"></Spoiler>
      <Text mt={40} color="primary" size="lg" weight={600}>
        Students Experiences
      </Text>
      <Text mt={10} siz="sm">
        <Text component="span" weight={600}>
          Nethmi, Srilanka:
        </Text>
        I am very happy to visit India; we have performed in folk dance. Pacific
        is a great university, we enjoyed our stay over here, the teachers and
        students are very cooperative.
      </Text>
      <Text mt={10} siz="sm">
        <Text component="span" weight={600}>
          Kasun, Srilanka:
        </Text>
        The management at Pacific is very helpful; they made our stay a
        memorable one. We enjoyed their hospitality; the staff was available
        24*7 for us. I also enjoyed the city visit. I got an opportunity to know
        the Royals of Mewar.
      </Text>
      
    </div>
  );
};

export default YouthFestival;
