//styles
import "../../sass/containers/_app.scss";

//components
import { Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

//containers
import Loading from "../../layouts/Loading";
// import Main from "../../containers/Main";
// import Home from "../../containers/Home";
// import Discover from "../../containers/Discover";

// const SignUp = React.lazy(() => import("../../containers/SignUp"));
// const SignIn = React.lazy(() => import("../../containers/SignIn"));
// const RecoveryPassword = React.lazy(() =>
//   import("../../containers/RecoveryPassword")
// );
const NotFound = React.lazy(() => import("../../containers/NotFound"));
// const Profile = React.lazy(() => import("../../containers/Profile"));
// const Terms = React.lazy(() => import("../../containers/Terms"));
// const PrivacyPolicy = React.lazy(() =>
//   import("../../containers/PrivacyPolicy")
// );
// const FullView = React.lazy(() => import("../../containers/FullView"));
// const Challenge = React.lazy(() => import("../../containers/Challenge"));
// const Forum = React.lazy(() => import("../../containers/Forum"));
// const Search = React.lazy(() => import("../../containers/Search"));

//subcontainer
// import { All } from "../Discover/All";
// import { Latest } from "../Discover/Latest";
// import { Following } from "../Discover/Following";
// import { Popular } from "../Discover/Popular";
// import { Trending } from "../Discover/Trending";
// import { Topics } from "../Discover/Topics";
// import { Stories } from "../Discover/Stories";
// import { Artists } from "../Discover/Artists";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" index element={<Navigate to={"home"} />} /> */}
        {/* <Route
          path="sign-up"
          element={
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          }
        /> */}
        {/* <Route
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
          <Route
            path="terms"
            element={
              <Suspense fallback={<Loading />}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <Suspense fallback={<Loading />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="art/:artId"
            element={
              <Suspense fallback={<Loading />}>
                <FullView />
              </Suspense>
            }
          />
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
        </Route> */}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
