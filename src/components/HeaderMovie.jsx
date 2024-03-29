import { useContext } from "react";
import { MoviesContext } from "../pages/MovieApp";
import { Grid, Input, Link } from "@mui/joy";
import logo from "../assets/logo.svg";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  let arr = ["Popular", "Kids", "Drama", "Horror"];

  const { getMovies, search, setSearch, searchMovies } = useContext(MoviesContext);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchMovies();
    }
  };

  return (
    <Grid className="header" container spacing={2} alignItems="center" sx={{ flexGrow: 1, margin: '0 30px' }}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <RouterLink to="/">
          <img src={logo} alt="Movie App" />
        </RouterLink>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              key={position}
              name={value}
              onClick={(e) => getMovies(e.target.name)}
              style={{
                margin: "10px",
                padding: "5px 20px", 
                borderRadius: "5px",
                fontSize: "15px", 
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "lighter",
                '&:hover': {
                  backgroundColor: "#115293",
                }
              }}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={4} container alignItems="center" justifyContent="flex-end">
        <Grid item xs={8} sm={7} md={7} lg={6} xl={6}>
          <Input
            color="light"
            size="sm"
            variant="soft"
            placeholder="Search a movie..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item xs={4} sm={5} md={5} lg={6} xl={6} justifyContent="flex-start">
          <button 
          onClick={searchMovies}
          style={{
              backgroundColor: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "8px 16px",
              fontSize: "14px",
              cursor: "pointer",
              '&:hover': {
                backgroundColor: "#66bb6a",
              }
            }}
          >Search Movie</button>
        </Grid>
      </Grid>
    </Grid>
  );
}
