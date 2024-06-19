import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterTabs from "../FilterTabs/FilterTabs";
import "./Songs.css";

const Songs = () => {
  const [songsData, setSongsData] = useState([]);

  const fetchSongs = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setSongsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="songs-wrapper">
      <div className="horizontal-border1"></div>
      <div>
        <h3 className="tabs-title">Songs</h3>
      </div>
      <FilterTabs songsData={songsData}/>
      <div className="horizontal-border2"></div>
    </div>
  );
};

export default Songs;
