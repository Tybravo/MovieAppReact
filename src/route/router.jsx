import Layout from "../layout/layout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Counter from "../components/Counter";
import PopularMovies from "../components/PopularMovies"
import UpcomingMovies from "../components/UpcomingMovies";
import NowPlaying from "../components/NowPlaying";


const ROUTES = [
    {
        path :"/counter",
        element:  <Counter/>
    },
    
    {
        path :"/signup",
        element:  <SignUp/>
    },

    {
        path :"/login",
        element:  <Login/>
    },

    {
        path :"/",
        element:  <Login/>
    },

    {
        path :"/movie",
        element:  <Layout/>,
        children: [
            {
                path:"/movie/popular",
                element: <PopularMovies/>
            },
            {
                path:"/movie/upcoming",
                element: <UpcomingMovies/>
            },
            {
                path:"/movie/now_playing",
                element: <NowPlaying/>
            }
        ]
    
    }

]

export default ROUTES;