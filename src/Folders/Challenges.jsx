import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function Challenges() {
  const challengesArray = [
    {
      id: 1,
      color: "red",
      title: "task 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, this is a challenge, this is a challenge, this is a challenge, this is a challenge, this is a challenge",
    },
    {
      id: 2,
      color: "rgb(166, 166, 252)",
      title: "task 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, this is a challenge, this is a challenge, this is a challenge, this is a challenge, this is a challenge",
    },
  ];
  return (
    <Accordion allowMultiple>
      {challengesArray.map((challenge) => {
        return (
          <AccordionItem
            style={{ borderTopWidth: "0px", borderBottomWidth: "0px" }}
          >
            <h2 style={{ background: challenge.color, margin: "10px", borderRadius: "10px"}}>
              <AccordionButton style={{ margin: "10px" }}>
                {challenge.title}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{challenge.description}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default Challenges;
