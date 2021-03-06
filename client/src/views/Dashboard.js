import React, { useEffect, useState } from "react";
import ArtistList from "../components/ArtistList";
import {getUserId} from "../api/user";

const userObj = {
  first_name: "Kezi"
};

function Dashboard(props) {
    let [user, setUser] = useState(userObj);
    let [artists, setArtists] = useState([]);

  useEffect(() => { 
    getArtists();
  }, []);

// fetch by user id 
  async function getArtists() {
    try {
      const user = await getUserId(1);
      // console.log({user})
      const params = new URLSearchParams({
        city: user.city,
        style_one: user.style_one,
        style_two: user.style_two,
        style_three: user.style_three,
      })
      let response = await fetch(`/artists?${params}`); //query string params
      if (response.ok) {
        let artists = await response.json();
        setArtists(artists);
      } else {
        console.log("Server error:", response.statusText);
      }
    } catch (err) {
      console.log("Network error:", err.message);
    }
  }
    return (
        <div className="Dashboard">
          <div className="title-banner">
            <h1>Hi, {user.first_name}</h1>
            <h3>Here are your Tattoo Artist matches</h3>
            </div>
          <ArtistList theArtists={artists} />
          <a className="btn btn-primary" href="/preferences" role="button">Change Preferences</a>
          </div>
    );
}

export default Dashboard;