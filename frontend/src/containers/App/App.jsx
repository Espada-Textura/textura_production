//styles
import "@sass/index.scss";

//components
import { Route, Routes } from "react-router-dom";

//containers
import Home from "@containers/Home/";
import NotFound from "../NotFound/index.jsx";
import Discover from "../Discover/index.jsx";
import Profile from "../Profile/index.jsx";
import Search from "../Search/index.jsx";
import Terms from "../Terms/index.jsx";
import FullView from "../FullView/index.jsx";

//subcontainer
import { Default } from "@containers/Discover/Default/";
import { Latest } from "@containers/Discover/Latest";
import { Following } from "@containers/Discover/Following";
import { Popular } from "@containers/Discover/Popular";
import { Trending } from "@containers/Discover/Trending";
import { Topics } from "@containers/Discover/Topics";
import { Stories } from "@containers/Discover/Stories";
import { Artists } from "@containers/Discover/Artists";

//layouts
import Topbar from "@layouts/TopBar/";

function App() {
  return (
    <>
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="discover/*" element={<Discover />}>
            <Route index element={<Default />} />
            <Route path="latest" element={<Latest />} />
            <Route path="following" element={<Following />} />
            <Route path="artists" element={<Artists />} />
            <Route path="popular" element={<Popular />} />
            <Route path="trending" element={<Trending />} />
            <Route path="stories" element={<Stories />} />
            <Route path="topics" element={<Topics />} />
          </Route>
          <Route path="profile/*" element={<Profile />} />
          <Route path="search/*" element={<Search />} />
          <Route path="terms/*" element={<Terms />} />
          <Route path="art/:artId" element={<FullView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
