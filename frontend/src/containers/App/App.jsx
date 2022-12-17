//styles
import "@sass/index.scss";

//components
import { Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

//containers
import Loading from "@layouts/Loading";
import Main from "@containers/Main";
import Home from "@containers/Home";
import Discover from "@containers/Discover";

const SignUp = React.lazy(() => import("@containers/SignUp"));
const SignIn = React.lazy(() => import("@containers/SignIn"));
const RecoveryPassword = React.lazy(() =>
  import("@containers/RecoveryPassword")
);
const NotFound = React.lazy(() => import("@containers/NotFound"));
const Profile = React.lazy(() => import("@containers/Profile"));
const Terms = React.lazy(() => import("@containers/Terms"));
const FullView = React.lazy(() => import("@containers/FullView"));
const Challenge = React.lazy(() => import("@containers/Challenge"));
const Forum = React.lazy(() => import("@containers/Forum"));
const Search = React.lazy(() => import("@containers/Search"));

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
        <Route
          path="sign-up"
          element={
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="sign-in"
          element={
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route
            path="recovery-password"
            element={
              <Suspense fallback={<Loading />}>
                <RecoveryPassword />
              </Suspense>
            }
          />
          <Route
            path="search/:input"
            element={
              <Suspense fallback={<Loading />}>
                <Search />
              </Suspense>
            }
          />
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
          <Route
            path="artist/:artistId"
            element={
              <Suspense fallback={<Loading />}>
                <Profile />
              </Suspense>
            }
          />
          <Route path="terms" element={<Terms />} />
          <Route path="art/:artId" element={<FullView />} />
          <Route
            path="challenges"
            element={
              <Suspense fallback={<Loading />}>
                <Challenge />
              </Suspense>
            }
          />
          <Route
            path="forum"
            element={
              <Suspense fallback={<Loading />}>
                <Forum />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
