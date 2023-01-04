import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../contexts/authContext";
import { dataContext } from "../contexts/dataContext";
import firebase from "../firebase";
import ChooseUsername from "./ChooseUsername";
import {
    Accordion,
  } from "@chakra-ui/react";
  import RoutesSelector from "../Components/RoutesSelector";
import Task1 from "./Challenges/Task1"
import Task2 from "./Challenges/Task2"
import Task3 from "./Challenges/Task3"
import Task4 from "./Challenges/Task4"
import Task5 from "./Challenges/Task5"
import Task6 from "./Challenges/Task6"
import Task7 from "./Challenges/Task7"
import Task8 from "./Challenges/Task8"
import Task9 from "./Challenges/Task9"
import Task10 from "./Challenges/Task10"

function Links() {
  // getting the states from context
  const { email, uid, displayName, photoURL } = useContext(authContext);
  const { dataCenter, appData } = useContext(dataContext);

  // storing the uid/name/email/photoURL each time the user sign
  useEffect(() => {
    if (uid && email) {
      firebase
        .database()
        .ref(`${localStorage.getItem("this_uid")}/user_info_section_1`)
        .set({
          uid: uid,
          displayName: appData ? appData[0].displayName : displayName,
          bio: appData ? appData[0].bio : "",

          email: email,
          photoURL: appData ? appData[0].photoURL : photoURL,
        });
    }
  }, [email, uid, displayName, photoURL]);

  // UI UI UI UI UI UI UI UI UI UI
  if (dataCenter && dataCenter.length == 2) {
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
      <div className="App">
        <div className="twitter_header_container">
          <div className="website_header">the 15 days challenge</div>
        </div>
        <div className="routes-section">
          <Accordion allowMultiple>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6 />
            <Task7 />
            <Task8 />
            <Task9 />
            <Task10 />
          </Accordion>
        </div>
        <div className="routes-selector-section">
          <RoutesSelector />
        </div>
      </div>
    );
  } else if (dataCenter && dataCenter.length == 1) {
    return <ChooseUsername />;
  } else {
    return "todo: loading background should be gray and divided by two";
  }
}

export default Links;
