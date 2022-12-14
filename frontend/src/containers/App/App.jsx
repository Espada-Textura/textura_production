//styles
import "@sass/index.scss";

//components
import { Route, Routes, Navigate } from "react-router-dom";

//containers
import Main from "@containers/Main";
import Home from "@containers/Home";
import SignUp from "@containers/SignUp";
import SignIn from "@containers/SignIn";
import RecoveryPassword from "@containers/RecoveryPassword";
import NotFound from "@containers/NotFound";
import Discover from "@containers/Discover";
import Profile from "@containers/Profile";
import Terms from "@containers/Terms";
import FullView from "@containers/FullView";
import Challenge from "@containers/Challenge";
import Forum from "@containers/Forum";
import Search from "@containers/Search";

//subcontainer
import { All } from "@containers/Discover/All";
import { Latest } from "@containers/Discover/Latest";
import { Following } from "@containers/Discover/Following";
import { Popular } from "@containers/Discover/Popular";
import { Trending } from "@containers/Discover/Trending";
import { Topics } from "@containers/Discover/Topics";
import { Stories } from "@containers/Discover/Stories";
import { Artists } from "@containers/Discover/Artists";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Navigate to={"/home"} />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="recovery-password" element={<RecoveryPassword />} />
          <Route path="search/:input" element={<Search />} />
          <Route path="discover" element={<Discover />}>
            <Route index element={<Navigate to={"all"} />} />
            <Route path="all" element={<All />} />
            <Route path="latest" element={<Latest />} />
            <Route path="following" element={<Following />} />
            <Route path="artists" element={<Artists />} />
            <Route path="popular" element={<Popular />} />
            <Route path="trending" element={<Trending />} />
            <Route path="stories" element={<Stories />} />
            <Route path="topics" element={<Topics />} />
          </Route>
          <Route path="artist/:artistId" element={<Profile />} />
          <Route path="terms" element={<Terms />} />
          <Route path="art/:artId" element={<FullView />} />
          <Route path="challenges" element={<Challenge />} />
          <Route path="forum" element={<Forum />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
