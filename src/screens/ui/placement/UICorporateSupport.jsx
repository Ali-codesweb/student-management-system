import { Box, Image, List, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../constants/constants";

function UICorporateSupport() {
  const companies = [
    "DBS Cholamandalam (P) Ltd.",
    "India Bulls Security (P) Ltd.",
    "IDBI-Fortis Life Insurance Co. (P) Ltd.",
    "HDFC Standard Life Insurance (P) Ltd.",
    "Unicon Investment Solutions (P) Ltd.",
    "IBM",
    "VVDN Technology",
    "Pidilite Industries (P) Ltd.",
    "ICICI Prudential Life Insurance (P) Ltd.",
    "Bajaj Consumer Care (P) Ltd.",
    "Ansal API",
    "Kotak Mahindra Bank (P) Ltd.",
    "STCI Capital Market (P) Ltd.",
    "Anurag Stock & Broking Pvt. Ltd.",
    "Pantaloon Future Group Retails Ltd.",
    "Aloha Technology",
    "Aditya Birla Group",
    "Mr. Beans (Indore)",
    "Bajaj Capital Ltd.",
    "Cadbury India Ltd.",
    "SBI Life Insurance Ltd.",
    "ICICI Securities Ltd.",
    "Panasonic solutions Ltd",
    "Network Media Solutions (Mumbai)",
    "Chegg India Inc.",
    "RGA & Corporation",
    "GHCL LTD",
    "Bosh India Ltd",
    "Ratan Mani metal Ltd",
    "Indraprasth Gas Ltd.",
    "Delhi",
    "HRH Group of Hotel Pvt. Ltd.",
    "Udaipur",
    "JK Tyre Industry Ltd. ",
    "Kankroli",
    "Angel Broking Ltd.",
    "NTPC Ltd.",
    "Anta",
    "Indusind Bank",
    "Peacock Industries Ltd.",
    "Udaipur",
    "Dot spark systems India Ltd.",
    "Nirula's Delhi",
    "Nitin Spinners Ltd.",
    "Bhilwara",
    "Rajasthan Spinning & Weaving Ltd.",
    "Shree Cement Ltd.",
    "Beawer",
    "TATA AIG Life Insurance Ltd.",
    "Udaipur",
    "Morgan Stanlay India Co. Ltd.",
    "Mumbai",
    "PMC Project ADNANI Group",
    "Ahmedabad",
    "Sangam India Ltd.",
    "Bhilwara",
    "Udaivilas Hotel",
    "Udaipu",
    "HDFC Mutual Fund",
    "GMCH",
    "Udaipur",
    "BYJUs",
    "AXIS Bank",
    "Udaipur",
    "Siemens Ltd",
    "Manglam Cement Ltd.",
    "Jaipur",
    "Club Mahindra Holidays",
    "Mumbai",
    "Surling Solutions",
    "RSMML",
    "Ola Electric Ltd.",
    "Dabur India Ltd.",
    "Ralson India Ltd.",
    "HDFC Bank Ltd.",
    "Escorts Securities Ltd.",
    "Delhi",
    "Mewar Group of Companies",
    "Grand Laxmivilas",
    "Udaipur",
    "Two Friends",
    "Delhi",
    "Times of India",
    "Coca Cola",
    "BSL Ltd.",
    "Bhilwara",
    "Net spice processing Ltd.",
    "Jaquar & Company Pvt.Ltd.",
    "Coromendal International Ltd.",
    "TCS",
    "Mundra",
    "JK cement Ltd",
    "Usha Om Knowledge Consultancy Services",
    "Wipro Ltd.",
    "Miraj Group",
    "Sheraton Udaipur Palace Resort & Spa",
    "Collabera Technologies Pvt. Ltd.",
    "Medicore Laboratories Pvt. Ltd.",
    "Pyrotech Electronics Pvt. Ltd.",
    "IIFL81. NIIT",
    "Navneet Commercial Services Pvt. Ltd.",
    "India Mart",
    "HDFC Securities Ltd.",
    "Smart Lifestyles Ltd.",
    "Alliance Real Estates Pvt. Ltd.",
    "India Broad Band Ltd.",
    "Religare Securities Ltd.",
    "Capgemini",
    "HCL Technologies Ltd.",
    "HDFC Standard Life Insurance",
    "Siemens India Ltd",
    "Kotak Mahindra Group",
    "Shell & Pearl Ceramics Ltd.",
    "Bajaj Finance",
    "Redix Media Technologies",
    "Midas Connections and Corporations",
    "Piramal Waters Pvt. Ltd.",
    "Insum Technologies Pvt. Ltd.",
  ];

  return (
    <div>
      <CustomHeroSection
        carouselImages={[
          "https://www.pacific-university.ac.in/uploads/PageHeaders/941/_default.jpg",
        ]}
      >
        <Text size="xl" align="center" weight={600} color="primary">
          Corporate Support
        </Text>
        <Image
          mt={30}
          withPlaceholder
          height={400}
          fit="contain"
          src={"https://www.pacific-university.ac.in/Company.jpg"}
        />
        <Text mt={30} weight={600} color="primawry">
          {" "}
          Placement Support, Industry Internship Support & Visiting Faculty
          Support 2021-22
        </Text>
        <Box mt={20}>
          <List type="ordered" size={"sm"}>
            <SimpleGrid
              cols={6}
              breakpoints={breakpoints("xs")}
              className="align-items-start"
              spacing={10}
            >
              {companies.map((e) => (
                <List.Item
                  key={e}
                  sx={(theme) => ({
                    padding: theme.spacing.xs,
                    borderRadius: theme.spacing.sm,
                    "&:hover": {
                      backgroundColor: theme.colors.gray[2],
                    },
                  })}
                >
                  {e}
                </List.Item>
              ))}
            </SimpleGrid>
          </List>
        </Box>
      </CustomHeroSection>
    </div>
  );
}

export default React.memo(UICorporateSupport);
