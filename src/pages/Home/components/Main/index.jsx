"use client";
import { Container } from "@chakra-ui/react";
import Cards from "../../../../components/cardsComponents";
import WithSubnavigation from "../../../../components/navigation";
import Feedback from "../../../../components/componentBatismo";
import MainBatismoInfo from "../../../../components/componentBatismoInfo";
import imageParallel from "../../../../components/imageParallel";

const sections = [
  { component: Cards, maxW: "1200px", px: 4, py: 8 },
  { component: Feedback, maxW: "1200px", px: 0, py: 16 },
  { component: imageParallel, maxW: "100%", px: 0, py: 16 },
  { component: MainBatismoInfo, maxW: "1200px", px: 0, py: 5 },
  { component: WithSubnavigation, maxW: "1200px", px: 4, py: 8 },
];

const MainContent = () => (
  <>
    {sections.map(({ component: Component, maxW, px, py }, index) => (
      <Container key={index} maxW={maxW} px={px} py={py}>
        <Component />
      </Container>
    ))}
  </>
);

export default MainContent;
