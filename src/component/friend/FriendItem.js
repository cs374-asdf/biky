import { formatDistance, formatTime } from "../../util/format";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Icon } from "@iconify/react";
import LinearProgressBar from "./LinearProgressBar";
import React from "react";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";

export function JournalEntry({ journal }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "7px",
        marginTop: "10px",
        fontSize: "11px",
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "30%",
        }}
      >
        {dayjs(journal.startTime).format("YYYY. M. D.")}
      </div>
      <div
        style={{
          display: "inline-block",
          width: "70%",
        }}
      >
        {journal.title}
      </div>
    </div>
  );
}

export default function FriendItem({ friend, journals }) {
  console.log(journals);
  var time = 0.0;
  var distance = 0.0;
  journals &&
    journals.map((journal) => {
      distance += journal.distance;
      time += dayjs(journal.endTime).diff(journal.startTime, "minute", true);
    });
  friend.total_intimacy = (time + distance * 10) / 2;
  if (friend.total_intimacy >= 100.0) {
    friend.total_intimacy = 100.0;
  }
  return (
    <Accordion
      style={{ boxShadow: "0px 1.77918px 3.55836px rgba(0, 0, 0, 0.25)" }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <FriendListItemInner key={friend.id} friend={friend} />
      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
        <div style={{ width: "100%" }}>
          <div style={{ display: "inline-block", width: "50%" }}>
            <b>Time: </b>
            {formatTime(time)}
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <b>Distance: </b>
            {formatDistance(distance)}
          </div>

          <div>
            {journals &&
              journals.map((journal) => (
                <JournalEntry journal={journal} key={journal.id} />
              ))}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

function FriendListItemInner({ friend }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="row"
      width="100%"
    >
      <Box flex={1} mr={1}>
        <Avatar
          alt={friend.name}
          src={process.env.PUBLIC_URL + friend.picture}
          style={{
            border: "2px solid lightgray",
            width: "30px",
            height: "30px",
          }}
        />
      </Box>
      <Box flex={2} mr={2} style={{ minWidth: "75px" }}>
        <Typography variant="body1" color="textPrimary">
          {friend.name}
        </Typography>
      </Box>
      <Box flex={6}>
        <LinearProgressBar value={friend.total_intimacy} />
      </Box>
    </Box>
  );
}
