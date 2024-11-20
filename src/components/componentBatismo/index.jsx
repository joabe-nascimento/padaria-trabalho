"use client";

import { Flex, Stack, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FeedbackHeader from "./components/batismo";
import pao from "../../assets/pao.png";

// Componentes animados usando framer-motion
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export default function Feedback() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "column" }}
      backgroundSize={"cover"}
      spacing={0} // Remove espaçamento entre os elementos
    >
      <MotionFlex
        marginTop="-150px"
        direction={{ base: "column", md: "row" }} // Organiza os itens em coluna para telas pequenas
        flex={1}
        align={"center"} // Centraliza verticalmente
        justify={"space-evenly"} // Espaço entre os itens
        p={{ base: 6, md: 12 }}
        borderRadius={"0px 0px 15px 15px"}
        textAlign="center" // Centraliza o texto
        initial={{ opacity: 0, y: 50 }} // Estado inicial (fora da tela)
        whileInView={{ opacity: 1, y: 0 }} // Animação quando o item entra na visualização
        viewport={{ once: true, amount: 0.2 }} // Controla quando a animação ocorre
        transition={{ duration: 0.8 }} // Duração da animação
      >
        <FeedbackHeader />
        <MotionImage
          src={pao} // Substitua pela URL da sua imagem
          alt="Descrição da imagem"
          boxSize={{ base: "100%", md: "400px" }} // Tamanho da imagem
          objectFit="cover" // Ajusta a imagem para cobrir o espaço
          borderRadius="md" // Bordas arredondadas
          mt={{ base: 4, md: 0 }} // Margem superior para telas pequenas
          initial={{ opacity: 0, scale: 0.8 }} // Estado inicial (fora da tela)
          whileInView={{ opacity: 1, scale: 1 }} // Animação quando a imagem entra na visualização
          viewport={{ once: true, amount: 0.2 }} // A animação ocorre apenas uma vez
          transition={{ duration: 1 }} // Duração da animação
        />
      </MotionFlex>
    </Stack>
  );
}
