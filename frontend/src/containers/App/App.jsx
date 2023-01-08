//styles
import "@sass/containers/_app.scss";

//components
import React, { Suspense } from "react";
import {
  Route,
  Outlet,
  Navigate,
  ScrollRestoration,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
const PrivacyPolicy = React.lazy(() => import("@containers/PrivacyPolicy"));
const ArtView = React.lazy(() => import("@containers/ArtView"));
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <ScrollRestoration
            getKey={(location, _matches) => {
              return location.pathname;
            }}
          />
          <Outlet />
        </>
      }
      errorElement={<NotFound />}
    >
      <Route
        path="/"
        index
        element={
          <>
            <Navigate
              to={"home"}
              getKey={(location, matches) => {
                return location.pathname;
              }}
            />
          </>
        }
      />

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
      <Route
        path="post/:postId"
        element={
          <Suspense fallback={<Loading />}>
            <ArtView />
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
    </Route>
  )
);

const App = () => {
  return (
    <>
      <Helmet>
        <title>Textura</title>
        <link rel="canonical" href="https://web.textura-art.com/" />
        <meta
          property="twitter:image"
          content="https://web.textura-art.com/api/art/Jqiu3gLgwzNg9mUG6BEv9k_thumbnail.jpeg"
        />
        <meta
          property="og:image"
          content="https://web.textura-art.com/api/art/Jqiu3gLgwzNg9mUG6BEv9k_thumbnail.jpeg"
        />
        <meta
          property="og:image:alt"
          content="Textura is a place, likely a community, for our Cambodian Artists to share their arts, earn recognition, express feeling and emotion through art, and more importantly is to improve the artist community in Cambodia. Textura mainly focuses on Digital Art and Digital painting. We are developing and growing bigger and will add more than just Digital Arts."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="Textura" />
        <meta property="og:type" content="object" />
        <meta
          property="og:description"
          content="Textura is a place, likely a community, for our Cambodian Artists to share their arts, earn recognition, express feeling and emotion through art, and more importantly is to improve the artist community in Cambodia. Textura mainly focuses on Digital Art and Digital painting. We are developing and growing bigger and will add more than just Digital Arts."
        />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
