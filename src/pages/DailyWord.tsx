import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiVolume2 } from "react-icons/fi";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  // const wordData = state.wordData ?? null;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Flex
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        justifyContent="center"
      >
        <Text fontWeight="bold">Day {state.wordData.day}</Text> -{" "}
        {state.wordData.title}
      </Flex>
      <Accordion mt={8} allowMultiple>
        {state.wordData.sentences.map((v: ISentence, i: number) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {v.english}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Button
                variant="ghost"
                colorScheme="green"
                size="sm"
                mb={2}
                ml={2}
              >
                <FiVolume2 />
              </Button>
            </h2>
            <AccordionPanel pb={4}>{v.korean}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;
