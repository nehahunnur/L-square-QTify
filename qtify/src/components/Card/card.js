import React from "react";
import { Tooltip, Chip } from "@mui/material";
import "./card.css";

const Card = ({ data, type,firstCard }) => {

  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, songs ,id } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className="card-wrapper">
              <div className="card">
                <div className="imageWrapper">
                  <img src={image} alt={`${title} album`} loading="lazy" />
                  {(id === firstCard?.id) ? <div className="firstCard">
                    <div>Bollywood Hits</div>
                    <div>2018</div>
                  </div> : null}
                </div>
                <div className="card-banner">
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className="card-chip"
                  />
                </div>
              </div>
              <div className="card-title">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title,id } = data;
        return (
          <div className="card-wrapper">
            <div className="card">
            <div className="imageWrapper">
                  <img src={image} alt={`${title} album`} loading="lazy" />
                  {(id === firstCard?.id) ? <div className="firstCard">
                    <div>Bollywood Hits</div>
                    <div>2018</div>
                  </div> : null}
                </div>
              <div className="card-banner">
                <Chip label={`${likes} Likes`} size="small" className="card-chip" />
              </div>
            </div>
            <div className="card-title">
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return getCard(type);
};

export default Card;
