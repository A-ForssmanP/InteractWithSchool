import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import InboxLayout from "./inbox/InboxLayout";
import Inbox from "./inbox/Inbox";
import ViewMessage from "./inbox/viewMessage/ViewMessage";
import AbsenceLayout from "./absence/AbsenceLayout";
import Absence from "./absence/Absence";
import AbsenceForm from "./absence/absenceForm/AbsenceForm";
import RegisterDone from "./absence/registerDone/RegisterDone";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Homepage</h1>} />

        <Route path="inkorg/:student" element={<InboxLayout />}>
          <Route index element={<Inbox />} />
          <Route path=":messageId" element={<ViewMessage />} />
        </Route>
        <Route path="fronvaro" element={<AbsenceLayout />}>
          <Route index element={<Absence />} />
          <Route path=":id/registrera" element={<AbsenceForm />} />
          <Route path=":id/registrera/inskickad" element={<RegisterDone />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default Pages;
