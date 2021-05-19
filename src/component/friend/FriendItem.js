import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Icon } from "@iconify/react";
import LinearProgressBar from './LinearProgressBar'
import React from "react";
import Typography from "@material-ui/core/Typography";
import chickenIcon from "@iconify-icons/twemoji/chicken";
import eggIcon from "@iconify-icons/twemoji/egg";
import frontFacingBabyChick from "@iconify-icons/twemoji/front-facing-baby-chick";
import hatchingChick from "@iconify-icons/twemoji/hatching-chick";

export function JournalEntry({ journal }) {
  return <div>
    {journal.title}
    {journal.desc}
    {/* 디자인한대로 journal 간단한 정보 출력하면 됨 */}
  </div>

}
export default function FriendItem({ friend, journals }) {

  return (
    <Accordion>
      <AccordionSummary
        style={{ width: "95%" }}
        expandIcon={<ExpandMoreIcon />}
      >
        <FriendListItemInner
          key={friend.id}
          friend={friend}
        />
      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: "light-gray" }}>
        <Typography variant="body2" color="textPrimary">
          Rode with {friend.name} for {friend.time}min and {friend.distance}km
        </Typography>
        {journals.map(journal => <JournalEntry journal={journal} />)}
      </AccordionDetails>
    </Accordion>
  );
}

function getIcon(intimacy) {
  if (intimacy < 25) {
    return eggIcon;
  } else if (intimacy < 50) {
    return frontFacingBabyChick;
  } else if (intimacy < 75) {
    return hatchingChick;
  }
  return chickenIcon;
}

function FriendListItemInner({ friend }) {
  const icon_name = getIcon(friend.total_intimacy);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="row"
      width="100%"
      mb={1}
    >
      <Box flex={1} mr={1}>
        <Icon style={{ fontSize: 30 }} icon={icon_name} />
      </Box>
      <Box flex={1} mr={1}>
        <Avatar
          alt={friend.name}
          src={process.env.PUBLIC_URL + friend.picture}
          style={{
            border: "2px solid light-gray",
          }}
        />
      </Box>
      <Box flex={2} mr={2}>
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