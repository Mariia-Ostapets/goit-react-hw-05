import css from "./MovieList.module.css";
import { Link, useSearchParams } from "react-router-dom";

export default function MovieList({ movies, from }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{
              from,
              search: query,
            }}
            className={css.movieLink}
          >
            <h2>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
