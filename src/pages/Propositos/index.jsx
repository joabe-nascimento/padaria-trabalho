import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../Home/components/Footer"; // Certifique-se de que o caminho do Footer esteja correto
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import SectionSoluctions from "../../components/imageParallel";
import pao from "../../assets/pao.png";
import bolo from "../../assets/bolo.png";
import doces from "../../assets/doce.png";
// import pizza from "../../assets/pizza.png"; // Imagem adicional
// import torta from "../../assets/torta.png"; // Imagem adicional
// import biscoito from "../../assets/biscoito.png"; // Imagem adicional

export default function QuemSomos() {
  // Número de telefone e mensagem
  const whatsappNumber = "+5575999194533"; // Substitua pelo número do WhatsApp desejado
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços.";

  // Link para o WhatsApp com o número e a mensagem
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        pt={{ base: "20", md: "24" }} // Ajusta o padding-top para adicionar mais espaço nas telas menores
        spacing={{ base: 4, md: 8 }} // Adiciona espaçamento entre as colunas
        maxW={"1200px"} // Define a largura máxima do Stack
        mx="auto" // Centraliza o Stack horizontalmente
        px={{ base: "4", md: "8" }} // Adiciona padding horizontal ao Stack
        py={{ base: "8", md: "16" }} // Adiciona padding vertical ao Stack
      >
        <Flex
          p={{ base: 4, md: 8 }}
          flex={1}
          align={"center"}
          justify={"center"}
          mt={{ base: "55", md: "0" }} // Adiciona margem superior para empurrar o conteúdo para baixo em telas menores
        >
          <Stack
            spacing={6}
            w={"full"}
            maxW={"lg"}
            paddingTop={{ base: "40px", md: "90px" }} // Ajusta o padding-top do Stack interno para telas menores
          >
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              textAlign="left"
            >
              <Text
                color={"gray.700"}
                fontWeight={"800"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Produtos
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "lg", lg: "xl" }}
              color={"gray.500"}
              textAlign="left"
            >
              Conheça nossa linha de produtos frescos e deliciosos, feitos com
              carinho e qualidade. De pães artesanais a bolos caseiros, temos
              opções para todos os gostos. Cada item é cuidadosamente preparado
              para garantir sabor e frescor.
            </Text>

            <Stack spacing={2}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                <Box textAlign="center">
                  <Image
                    src={pao}
                    alt="Pão artesanal"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Pão Artesanal</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 12,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={bolo}
                    alt="Bolo caseiro"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Bolo Caseiro</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 25,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={doces}
                    alt="Doces variados"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Doces Variados</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 10,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={pao}
                    alt="Pão artesanal"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Pão Artesanal</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 12,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={bolo}
                    alt="Bolo caseiro"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Bolo Caseiro</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 25,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={doces}
                    alt="Doces variados"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Doces Variados</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 10,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={pao}
                    alt="Pão artesanal"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Pão Artesanal</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 12,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={bolo}
                    alt="Bolo caseiro"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Bolo Caseiro</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 25,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={doces}
                    alt="Doces variados"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Doces Variados</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 10,00
                  </Text>
                </Box>
                {/* <Box textAlign="center">
                  <Image
                    src={pizza}
                    alt="Pizza artesanal"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Pizza Artesanal</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 35,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={torta}
                    alt="Torta caseira"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Torta Caseira</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 20,00
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Image
                    src={biscoito}
                    alt="Biscoito artesanal"
                    borderRadius="md"
                    boxShadow="md"
                    mb={4}
                    objectFit="cover" // Ajusta o ajuste da imagem para cobrir a área
                    maxHeight="250px" // Limita a altura da imagem
                  />
                  <Heading size="md">Biscoito Artesanal</Heading>
                  <Text fontWeight="bold" color="gray.500" mt={2}>
                    R$ 8,00
                  </Text>
                </Box> */}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <SectionSoluctions />
      <Footer />
      <ScrollToTopButton /> {/* Adicionar o botão de "subir" */}
    </>
  );
}
