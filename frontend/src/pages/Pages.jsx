import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import InboxLayout from "./inbox/InboxLayout";
import Inbox from "./inbox/Inbox";
import ViewMessage from "./inbox/viewMessage/ViewMessage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Homepage</h1>} />

        <Route path="inbox" element={<InboxLayout />}>
          <Route index element={<Inbox />} />
          <Route path=":messageId" element={<ViewMessage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
