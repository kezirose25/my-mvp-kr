import React from "react";

function ArtistList(props) {
  return (
    <div className="ArtistList">

    {props.theArtists.map(a => (
      <div className="row">
        <div className="col-sm-6 col-md-3 col-lg-4">
        <div className="card" key={a.id}>
          <img className="card-img-top artist" src={a.cover_photo} alt="Profile Picture"></img>
          <div className="card-body text-center">
          <img className="avatar rounded-circle" src={a.profile_pic} alt="Profile Picture"/>
          <br></br>
          <h4 className="card-title">{a.first_name} {a.last_name}, {a.pronouns}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{a.studio}</h6>
          <span className="badge badge-pill badge-primary">{a.city}</span>
          <span className="badge badge-pill badge-primary">{a.style_one}</span>
          <span className="badge badge-pill badge-primary">{a.pricepoint} per hour</span>
          <a href="#" className="btn btn-outline-info">Message</a>
          <a href="#" className="btn btn-outline-info">Portfolio</a>
          </div>
          </div>
        </div>
        </div>
        
      ))}
      </div>
  );
}

export default ArtistList;

