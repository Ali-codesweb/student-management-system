import {
  Box, Image,
  List,
  SimpleGrid,
  Text,
  ThemeIcon
} from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import CustomHeroSection from "../../components/ui/CustomHeroSection";
import {
  breakpoints,
  capitalizeFirstLetter
} from "../../constants/constants";
import { infrastructureData } from '../../constants/constants_2';
import UIIntellectualProperty from "./UIIntellectualProperty";

function UIInfrastructure() {
  const params = useParams();
  console.log(params);
  if (params.item === "intellectual-property") {
    return <UIIntellectualProperty />;
  } else {
    const data = infrastructureData.find((e) => e.name === params.item);
    console.log(data);
    return (
     
      <CustomHeroSection carouselImages={data.carouselImage}>
          <Text size="xl" weight={900} align="center">
            {capitalizeFirstLetter(data.name).replace("-", " & ")}
          </Text>
          <Box mt={30}>
            {data.content &&
              data.content.map((e) => (
                <>
                  <Text size="lg" color="primary">
                    {e.h1}
                  </Text>
                  {e.content.map((j) => (
                    <Text size="sm" mt={10}>
                      {j}
                    </Text>
                  ))}
                </>
              ))}
            <SimpleGrid mt={25} cols={4} breakpoints={breakpoints("lg")}>
              {data.gridImages.map((e) => (
                <Image withPlaceholder src={e} height={150} fit="contain" />
              ))}
            </SimpleGrid>
          </Box>
          {data.name === "hostel-transportation" && (
            <>
              <Text size="lg" weight={700} mt={30} color="primary">
                Hostel Guidelines
              </Text>
              <Text
                size="md"
                weight={700}
                align="center"
                mt={15}
                color="primary"
              >
                Hostel Rules
              </Text>
              <Text size="sm" mt={15}>
                Hostel accommodation is provided with the understanding that the
                resident student will strictly abide by the Hostel Rules
                currently in force or as may be enforced from time to time.
                Accommodation in the Hostel cannot be claimed as a matter of
                right. The Institute Administration may refuse accommodation to
                any student who is known to have grossly violated the Hostel
                Rules or whose presence is likely to disturb the peace and
                tranquility of hostel. A student once admitted in the hostel,
                will continue to be a hostel inmate throughout the year unless
                otherwise debarred from the hostel on disciplinary grounds and
                he/she will have to pay the hostel fees for the academic year.
              </Text>
              <List
                size={"sm"}
                spacing={15}
                mt={30}
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <i className="fas fa-shield-alt"></i>{" "}
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <Text component="span" weight={700}>
                    Every student should stay in the room allotted to him/her.
                    Mutual exchange of rooms after final allotment is not
                    allowed. However, only the Chief Warden may allow as a
                    special case on valid and reasonable ground. Violation of
                    this rule will be considered an act of gross misconduct and
                    entail appropriate disciplinary action including expulsion
                    from Hostel and imposition of heavy fine.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text component="span" weight={700}>
                    Hostel fee is subject to be revised after every three years
                    & will be applicable for all the students of all the
                    Batches.
                  </Text>
                </List.Item>
                <List.Item>
                  Hosteller must look up the Hostel Notice Board regularly. The
                  Warden Team member or any authorized member of the Institute
                  staff can inspect the room of any student in the hostel at any
                  time. Hostel inmates are supposed to keep I-cards with them
                  and must present the same to any hostel or institute authority
                  whenever asked for, Students must always carry their Identity
                  Cards with them.
                </List.Item>
                <List.Item>
                  No Hostellers should see the Director for ordinary matters.
                  Warden In-charge of the concerned hostel is the right person
                  for such matters. In next step they can approach to the Chief
                  Warden.
                </List.Item>
                <List.Item>
                  No student should keep any fire-arms, lethal weapons,
                  poisonous things or intoxicants of any kind in the Hostel.
                  Students must not take law into their own hands, but must
                  report all disputes to the hostel Warden In-charge/Warden. All
                  kinds of shouting, fighting, gambling, stealing, violet
                  knocking, maltreating or abusing are strictly prohibited. In
                  such cases offender will be handed over to Police immediately.
                </List.Item>
                <List.Item>
                  The Hosteller shall have to vacate accommodation as and when
                  asked for. All the Hostellers shall vacate the hostel rooms
                  before they leave for the summer vacation so that annual
                  repairs and white washing are carried out. All the hostel
                  articles issued to the students are returned to the caretaker
                  before the students leave their rooms. They will be
                  responsible for any loss
                </List.Item>
                <List.Item>
                  No Hosteller is allowed to engage a private servant or pet
                  animals.
                </List.Item>
                <List.Item>
                  Students shall not remain absent from their hostels during
                  night without the prior permission of the Warden
                  In-charge/Warden.
                </List.Item>
                <List.Item>
                  Hostel students shall not leave the campus without prior
                  permission of the Warden In-charge/Warden. They shall have to
                  apply in prescribed form in advance stating the reason for
                  leaving and the address of destination. Hostel student who
                  leave hostel without the permission from the concerned Warden
                  shall be deemed to be missing and Parent/Guardian/Police
                  authorities may be intimated in consultation with the
                  Director.
                </List.Item>
                <List.Item>
                  <Text component="span" weight={700}>
                    The inmates of the hostel will not leave the hostel premises
                    on holidays for the purpose of excursion or picnic. Prior
                    permission of the Warden In-charge/Warden has to be obtained
                    for going for any picnic or excursion. However for any
                    eventuality that may occur during picnic/excursion, the
                    responsibility does not lie with the Institute authorities.
                  </Text>
                </List.Item>
                <List.Item>
                  Formation of association of students on the basis of regions,
                  caste or creed is not permitted, during their stay in the
                  hostels.
                </List.Item>
                <List.Item>
                  Room furniture and electric fittings are required to be
                  maintained by the inmates in good condition. At the time of
                  allotment of room and leaving the hostel for the summer
                  vacation, every student must take-over and hand-over,
                  respectively, the hostel property carefully. Students should
                  invariably vacate the hostel during summer vacation.
                </List.Item>
                <List.Item>
                  In case of damage to any part of the hostel buildings,
                  furniture, apparatus or other property of the institute,
                  caused by inmates of the hostel, the loss shall be recovered
                  from the persons identified as responsible for such damage.
                  However, if the persons causing damage cannot be identified,
                  the cost of repairing the same as may be assessed will be
                  distributed equally amongst all the inmates of the hostel or
                  group of inmates of the hostel found responsible for the
                  damage.
                </List.Item>
                <List.Item>
                  Students should lock their room properly when they go out for
                  bath, food etc. Each roommate must keep a key of the door lock
                  of his/her room in case of double / triple seated
                  accommodations.
                </List.Item>
                <List.Item>
                  Ragging in any form is a cognizable offence and severely
                  punishable as per the Supreme Court directives leading to
                  expulsion from the Hostel and the disciplinary action may
                  culminate in his/her expulsion from the Institute as well. The
                  Institute administration may report incidents of ragging to
                  the Police for taking appropriate action under the law.
                </List.Item>
                <List.Item>
                  Penalty for violation of hostel rules will be decided by the
                  hostel authorities considering the severity of the offense /
                  violation of rules / act of indiscipline
                </List.Item>
                <List.Item>
                  Guests are not permitted to stay overnight in the room of the
                  students. The student must get permission for keeping his/her
                  guest in the guest room of the Hostel from the concerned
                  Warden In-charge. Female guests are not permitted to stay in
                  Boys Hostel. Likewise Male guests are not allowed to stay in
                  the girls hostel. A Hosteller keeping a guest without
                  permission is liable to be fined.
                </List.Item>
                <List.Item>
                  Students are prohibited from giving shelter to any other
                  student/outsider in the rooms. In case of any unauthorized
                  shelter, the student will be liable to disciplinary action.
                </List.Item>
                <List.Item>
                  Resident students are not permitted to invite any outside
                  person to address any meeting in the hostel without written
                  permission of the Dean/ Director.
                </List.Item>
                <List.Item>
                  Light must be switched off when not in use. The use of
                  electric heater, electric rod and other similar appliances are
                  prohibited. Hostellers are warned against tempering with
                  electric installation and for all electric repairs the
                  electrician should be called in.
                </List.Item>
                <List.Item>
                  Students in their own interest are advised not to keep excess
                  cash or any valuables in their hostel rooms. They should close
                  their rooms securely when they leave the room even for short
                  periods. Institute shall not be responsible for the loss of
                  such items due to theft or otherwise. However, in the case of
                  theft, the matter should be immediately reported to the
                  concerned Warden In-charge/Warden.
                </List.Item>
                <List.Item>
                  Students are prohibited from consuming alcoholic drinks,
                  drugs, cigarettes, tobacco products or any other intoxicants
                  inside the hostel or to enter the hostel after consuming the
                  same. Any student found consuming such thing or in a drunken
                  state in the hostel will render himself liable for strict
                  disciplinary action, including expulsion/rustication from
                  Hostel/Institute.
                </List.Item>
                <List.Item>
                  Students are prohibited from screening/ keeping obscene
                  literature/ video films in the possession. Any violation in
                  this regard will result disciplinary action.
                </List.Item>
              </List>
              <Text weight={700} mt={30} size="sm">
                Additional Rules for Girls' Hostel:
              </Text>
              <List
                withPadding
                size={"sm"}
                spacing={15}
                mt={20}
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <i className="fas fa-shield-alt"></i>{" "}
                  </ThemeIcon>
                }
              >
                <List.Item>
                  Closing time 7:00 PM in summer (April to September) and 6:00
                  PM in winter (October to March)
                </List.Item>
                <List.Item>
                  No male visitor is allowed to enter the Girls' Hostel without
                  prior permission of the respective Warden In-charge/Warden.
                </List.Item>
                <List.Item>
                  The girl students must make entry in the "In/Out Register"
                  kept at the Girls' Hostel.{" "}
                </List.Item>
              </List>
            </>
          )}
       </CustomHeroSection>
    );
  }
}

export default UIInfrastructure;
