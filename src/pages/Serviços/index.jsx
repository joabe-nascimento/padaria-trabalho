import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Footer from "../Home/components/Footer"; // Certifique-se de que o caminho do Footer esteja correto
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import SectionSoluctions from "../../components/imageParallel";

export default function História() {
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
        pt={{ base: "20", md: "24" }} // Ajusta o padding-top para telas menores
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
                A Nossa História
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "lg", lg: "xl" }}
              color={"gray.500"}
              textAlign="left"
            >
              Fundada há 20 anos, a Doce Sabor nasceu do sonho de oferecer pães e bolos frescos e de qualidade, feitos com muito amor e dedicação. Desde o início, nossa missão foi trazer alegria para os nossos clientes por meio de produtos saborosos e feitos com ingredientes selecionados.
            </Text>

            <Stack spacing={2}>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                color={"gray.500"}
                textAlign="left"
              >
                <Text fontWeight="bold">Nossos serviços incluem:</Text>
                <Text mt={2}>- Pães Artesanais: Preparados com ingredientes frescos e de qualidade.</Text>
                <Text>- Bolos e Doces: Receitas tradicionais e exclusivas, que tornam cada momento especial.</Text>
                <Text>- Lanches Rápidos: Opções práticas e saborosas para o seu dia a dia.</Text>
                <Text>- Café da Manhã Completo: Com opções variadas para um início de dia delicioso.</Text>
                <Text>- Eventos e Comemorações: Realizamos doces personalizados para festas e eventos especiais.</Text>
              </Text>

              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                color={"gray.500"}
                textAlign="left"
              >
                <Text fontWeight="bold" textAlign="left" mt={4}>
                  Onde a tradição encontra o sabor.
                </Text>
                <Text textAlign="left" mt={2}>
                  Fundadores: João e Maria Ferreira
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Flex>

        <Flex
          flex={1}
          position="relative"
          zIndex={1}
          justify={"center"}
          align={"center"}
          py={{ base: "10", md: "0" }} // Adiciona padding vertical para telas menores
          mt={{ base: "10", md: "0" }} // Adiciona margem superior para empurrar a imagem para baixo em telas menores
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TWRO3U04G6rEox3TP1u9WeHhts3R4qe4o-xOOkjwMK3GXMVdxiw3x7JMDC46szLCYgU&usqp=CAU" // Use o caminho da nova imagem
            alt="Padaria Doce Sabor" // Descrição adequada para a imagem
            borderRadius="100px 0px 100px 0px" // Mantém o estilo da borda
            boxShadow="0 0 10px blue.400" // Sombra para destacar a imagem
            maxWidth="450px" // Largura máxima para garantir que a imagem não fique muito grande
            width="100%" // Ajuste para responsividade
          />
        </Flex>
      </Stack>

      <SectionSoluctions />
      <Footer />
      <ScrollToTopButton /> {/* Botão para voltar ao topo da página */}
    </>
  );
}
