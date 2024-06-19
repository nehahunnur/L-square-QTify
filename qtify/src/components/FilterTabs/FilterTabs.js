import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./FilterTabs.css";
import Card from "../Card/card";
import Carousel from "../Carousel/Carousel";

const allSongsTabs = ["All", "Rock", "Pop", "Jazz", "Blues"];

const FilterTabs = ({ songsData ,firstCard }) => {
  const [value, setValue] = useState(0);

  const _handleTabs = (e, val) => {
    setValue(val);
  };

  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{value === index && <>{children}</>}</div>;
  }

  /*const filteredData = (tabIndex) => {
    if (tabIndex === 0) {
      return data;
    } else {
      const tabLabel = ["Rock", "Pop", "Jazz", "Blues"];
      return data.filter((item) => item.genre.key === tabLabel.toLowerCase());
    }
  };*/

  const filteredData = (tabIndex) => {
    if (tabIndex === 0) {
      return songsData;
    } else {
      const tabLabel = ["Rock", "Pop", "Jazz", "Blues"];
      const selectedGenre = tabLabel[tabIndex - 1];
      return songsData.filter(
        (item) => item.genre.key === selectedGenre.toLowerCase()
      );
    }
  };

  //console.log(filteredData("Rock"));

  return (
    <div className="filtertabs-wrapper">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={_handleTabs}
            aria-label="basic tabs"
            id="filter-tabs"
          >
            {allSongsTabs.map((each) => (
              <Tab label={each} key={each} sx={{ color: "white" }} />
            ))}
          </Tabs>
        </Box>

        {allSongsTabs.map((_, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div className="songs-wrapper">
              <Carousel
                data={filteredData(index)}
                renderCardComponent={(item) => (
                  <Card data={item} firstCard={filteredData(index)[0]} type="songs" />
                )}
              />
            </div>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

export default FilterTabs;
