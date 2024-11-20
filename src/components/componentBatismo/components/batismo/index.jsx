import { Flex, Heading, Stack, Text, Image, Button } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Hook para detectar se o componente está em exibição
import pao from "../../../../assets/pao.png";
import bolo from "../../../../assets/bolo.png";
import doces from "../../../../assets/doce.png";

const EvangelismoInfo = () => {
  const controls = useAnimation(); // Controla a animação
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Detecta se o elemento está em exibição

  // Aciona a animação quando o componente entra em exibição
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animações com Framer Motion
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

  return (
    <Flex
      ref={ref} // Ref necessário para detectar visibilidade
      w={"full"}
      maxW={"lg"}
      ml={{ base: 0, md: 0 }}
      mb={{ base: 4, md: 0 }}
      align="flex-start"
      direction={{ base: "column", md: "row" }} // Altera a direção em telas pequenas
    >
      <Stack
        spacing={4}
        flex={1} // Faz o Stack ocupar espaço disponível
        textAlign="left" // Alinha o texto à esquerda
      >
        {/* Título animado */}
        <MotionHeading
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          initial={{ opacity: 0, x: -100 }} // Estado inicial fora da tela
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 }, // Animação ao entrar em view
            hidden: { opacity: 0, x: -100 }, // Volta ao estado original
          }}
          transition={{ duration: 0.6 }}
        >
          <Text
            color={"gray.700"}
            fontWeight={"800"}
            as={"span"}
            position={"relative"}
            _before={{
              content: "''",
              position: "absolute",
              height: "100%",
              width: "5px",
              bg: "red.400",
              left: "-10px",
              top: 0,
              borderRadius: "full",
            }}
            _after={{
              width: "full",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "blue.400",
              height: "4px",
              zIndex: -1,
            }}
          >
            Descubra o sabor do pão artesanal!
          </Text>
        </MotionHeading>

        {/* Texto animado */}
        <MotionText
          fontSize={{ base: "lg", md: "xl" }}
          color={"gray.600"}
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Conheça nossos produtos
        </MotionText>

        {/* Botão para ir para os produtos */}
        <Button
          as="a"
          href="/produtos" // Caminho para a página de produtos
          colorScheme="blue"
          size="lg"
          borderRadius="md"
          mt={2} // Espaçamento superior para separar do texto
        >
          Ir para Produtos
        </Button>
      </Stack>

      {/* Imagens ao lado do texto */}
      <Stack spacing={4} ml={{ base: 0, md: 8 }} mt={{ base: 4, md: 0 }}>
        <Image
          src={pao}
          alt="Descrição da imagem 1"
          boxSize={{ base: "100%", md: "150px" }} // Ajuste o tamanho conforme necessário
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src={bolo}
          alt="Descrição da imagem 2"
          boxSize={{ base: "100%", md: "150px" }} // Ajuste o tamanho conforme necessário
          objectFit="cover"
          borderRadius="md"
        />
        <Image
          src={doces}
          alt="Descrição da imagem 3"
          boxSize={{ base: "100%", md: "150px" }} // Ajuste o tamanho conforme necessário
          objectFit="cover"
          borderRadius="md"
        />
      </Stack>
    </Flex>
  );
};

export default EvangelismoInfo;
