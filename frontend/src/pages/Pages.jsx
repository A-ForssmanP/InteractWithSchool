import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Inbox from "./inbox/Inbox";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Homepage</h1>} />

        <Route path="inbox" element={<Inbox />}>
          <Route path="message" element={<h1>message</h1>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
