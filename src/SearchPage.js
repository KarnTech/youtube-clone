import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
        channel="balbal"
        verified="true"
        noOfVideos={382}
        description="thi sis beasue o thkjefdasfa  sdhfkakdfjk af assdfkasdf as fflasdkjfa  af asdfasdfjaksjdfj"
        subs="660k"
      />
      <hr />
      <VideoRow
        views="2M"
        subs="200k"
        description="this video sia a youta dlone"
        timestamp="3"
        channel="gary101"
        title="this is my video"
        image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
      />
    </div>
  );
};

export default SearchPage;
