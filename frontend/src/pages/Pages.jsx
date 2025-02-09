import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Layout from "./Layout";
import InboxLayout from "./inbox/InboxLayout";
import Inbox from "./inbox/Inbox";
import ViewMessage from "./inbox/viewMessage/ViewMessage";
import AbsenceLayout from "./absence/AbsenceLayout";
import Absence from "./absence/Absence";
import AbsenceForm from "./absence/absenceForm/AbsenceForm";
import RegisterDone from "./absence/registerDone/RegisterDone";
import AbsenceOverview from "./absence/absenceOverview/AbsenceOverview";
import TimeScheduleLayout from "./TimeSchedule/TimeScheduleLayout";
import TimeSchedule from "./TimeSchedule/TimeSchedule";
import TimeScheduleRegister from "./TimeSchedule/timeScheduleRegister/TimeScheduleRegister";
import TimeScheduleOverview from "./TimeSchedule/timescheduleOverview/TimeScheduleOverview";
import DashBoard from "./dashBoard/DashBoard";
import Login from "./login/Login";
import CreateAccount from "./createAccount/CreateAccount";
import ChatLayout from "./chat/ChatLayout";
import ChatContacts from "./chat/ChatContacts";
import ChatWindow from "../components/chatWindow/ChatWindow";

function Pages({ isAuthenticated, setIsAuthenticated }) {
  const [navigateToLogin, setNavigateToLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    redirectToLogin();
  }, [navigateToLogin === true]);

  useEffect(() => {
    setNavigateToLogin(false);
    const value = checkIsAuthCookie();
    if (isAuthenticated !== value) {
      setIsAuthenticated(value);
    }
    !value && setNavigateToLogin(true);
  });

  // check isAuthenticated cookie
  const checkIsAuthCookie = () => {
    let cookieValue = false;
    // get all cookies
    const allCookies = document.cookie;
    if (allCookies.length > 0) {
      //split every cookie key-value pair into an array
      const cookieArr = allCookies.split("; ");
      //check if isAuthenticated cookie exists and if so, chech the value
      cookieArr.forEach((c) => {
        if (c.indexOf("isAuthenticated") === 0) {
          const splittKeyValue = c.split("=");
          const value = splittKeyValue[1];
          const stringToBoolean = value === "true";
          // set cookieValue to stringToBoolean value
          cookieValue = stringToBoolean;
        }
      });
    }
    return cookieValue;
  };

  //redirectToLogin when user is not authenticated
  const redirectToLogin = () => {
    if (navigateToLogin) {
      navigate("/logga_in");
    }
  };

  // update state of isAuthenticated
  const handleIsAuthenticated = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  return (
    <Box height={"100%"}>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoard />} />

            <Route path="inkorg/:student" element={<InboxLayout />}>
              <Route index element={<Inbox />} />
              <Route path=":messageId" element={<ViewMessage />} />
            </Route>

            <Route path="chatt" element={<ChatLayout />}>
              <Route index element={<ChatContacts />} />
              <Route path=":id" element={<ChatWindow />} />
            </Route>

            <Route path="fronvaro" element={<AbsenceLayout />}>
              <Route index element={<Absence />} />
              <Route path=":id/registrera" element={<AbsenceForm />} />
              <Route
                path=":id/registrera/inskickad"
                element={<RegisterDone />}
              />
              <Route path=":id/oversikt" element={<AbsenceOverview />} />
            </Route>

            <Route path="tidsschema" element={<TimeScheduleLayout />}>
              <Route index element={<TimeSchedule />} />
              <Route
                path=":id/registrera_omsorg"
                element={<TimeScheduleRegister />}
              />
              <Route
                path=":id/planerad_omsorg"
                element={<TimeScheduleOverview />}
              />
            </Route>
          </Route>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route
              path="logga_in"
              element={
                <Login isAuthenticated={() => handleIsAuthenticated(true)} />
              }
            />
            <Route
              path="skapa_konto"
              element={
                <CreateAccount
                  isAuthenticated={() => handleIsAuthenticated(true)}
                />
              }
            />
          </Route>
        )}

        <Route path="*" element={<h1>Sidan kan inte hittas</h1>} />
      </Routes>
    </Box>
  );
}

export default Pages;
