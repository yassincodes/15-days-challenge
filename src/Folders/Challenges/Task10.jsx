import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from "@chakra-ui/react";
  import { dataContext } from "../../contexts/dataContext";
  import firebase from "../../firebase";
  import { useContext, useState } from "React";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  
  function Task10() {
    // getting the states from context
    const startIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-hand-rock"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0v1.5" />
        <path d="M17 12v-6.5a1.5 1.5 0 0 1 3 0v10.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
        <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
        <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
      </svg>
    );
  
    const translateIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-language"
        width="33"
        height="33"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 5h7" />
        <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
        <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
        <path d="M12 20l4 -9l4 9" />
        <path d="M19.1 18h-6.2" />
      </svg>
    );
  
    const { appData } = useContext(dataContext);
  
    const [isOpen, setIsOpen] = useState(false);
  
    function sendData() {
      appData &&
        firebase
          .database()
          .ref(appData[0].username + "/" + "user_z_finished_tasks" + "/Task1")
          .set("here we are");
    }
  
    return (
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.3 }}
      >
      <AccordionItem style={{ borderTopWidth: "0px", borderBottomWidth: "0px" }}>
        <h2
          style={{
            background: "#b3cbb9",
          }}
        >
          <AccordionButton style={{ margin: "10px" }}>Task 9 💪</AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            paddingTop: "15px"
          }}
        >
          <div>in this task you'll do this and that</div>
          <div>in this task you'll do "the arabic verse"</div>
          <div
            style={{
              display: "flex",
              marginTop: "10px"
            }}
          >
            <Button style={{borderRadius: "50px", margin: "5px 5px 5px 0"}} variant='outline'>{translateIcon} see in arabic</Button>
            <Button style={{borderRadius: "50px", margin: "5px"}} variant='outline' onClick={() => setIsOpen(true)}>
              {startIcon} start challenge
            </Button>
          </div>
        </AccordionPanel>
  
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Task 1</ModalHeader>
            <ModalCloseButton />
            <ModalBody>hi</ModalBody>
  
            <ModalFooter style={{display: "flex", justifyContent: "center"}}>
              {appData ? (
                <Button variant="outline" style={{borderRadius: "50px"}} onClick={sendData}>
                  send
                </Button>
              ) : (
                "loading icon"
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AccordionItem>
      </motion.div>
    );
  }
  
  export default Task10;
  