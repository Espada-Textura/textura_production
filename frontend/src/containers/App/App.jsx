//styles
import "@sass/index.scss";

//components
import {
  Route,
  Routes,
  useLocation,
  redirect,
  Navigate,
} from "react-router-dom";

//containers
import Home from "@containers/Home";
import NotFound from "@containers/NotFound";
import Discover from "@containers/Discover";
import Profile from "@containers/Profile";
import Search from "@containers/Search";
import Terms from "@containers/Terms";
import FullView from "@containers/FullView";
import Challenge from "@containers/Challenge";
import Forum from "@containers/Forum";

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
    <main onContextMenu={(e) => e.preventDefault()}>
      <Topbar />

      <Routes>
        <Route index element={<Navigate to={"home"} />} />
        <Route path="/home" index element={<Home />} />
        <Route path="discover" element={<Discover />}>
          <Route index element={<Default />} />
          <Route path="latest" element={<Latest />} />
          <Route path="following" element={<Following />} />
          <Route path="artists" element={<Artists />} />
          <Route path="popular" element={<Popular />} />
          <Route path="trending" element={<Trending />} />
          <Route path="stories" element={<Stories />} />
          <Route path="topics" element={<Topics />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
        <Route path="terms" element={<Terms />} />
        <Route path="art/:artId" element={<FullView />} />
        <Route path="challenges" element={<Challenge />} />
        <Route path="forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
