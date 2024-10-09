import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../../components/MovieCast/MovieCast"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieID" element={<MovieDetailsPage />}></Route>
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieCast />
              </Suspense>
            }
          ></Route>
          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieReviews />
              </Suspense>
            }
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}