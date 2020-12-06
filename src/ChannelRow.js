import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const ChannelRow = ({
  image,
  channel,
  subs,
  description,
  noOfVideos,
  verified
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" img="" />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleIcon className="verifiedIcon" />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ChannelRow;
