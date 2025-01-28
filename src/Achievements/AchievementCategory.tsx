import React from "react";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

import { Achievement } from "./Achievements";

interface IProps {
  title: string;
  achievements: { achievement: Achievement }[];
  allAchievements?: { achievement: Achievement }[];
  pad?: boolean;
}

function steamCount(achievements: { achievement: Achievement }[]): number {
  return achievements.filter((entry) => !entry.achievement.NotInSteam).length;
}

export function AchievementCategory({
  title,
  achievements,
  allAchievements,
  pad,
  children,
}: React.PropsWithChildren<IProps>): JSX.Element {
  // The 264px minWidth feels scuffed, but fixes an unknown edge case (Brought up in PR #1508).
  return (
    <Accordion defaultExpanded={!!allAchievements} disableGutters square sx={{ minWidth: "264px" }}>
      <AccordionSummary>
        {allAchievements ? (
          <Typography variant="h5" sx={{ my: 1 }}>
            {title} ({achievements.length}/{allAchievements.length}, {steamCount(achievements)}/
            {steamCount(allAchievements)} for Steam)
          </Typography>
        ) : (
          <Typography variant="h5" color="secondary">
            {title} ({achievements.length} remaining, {steamCount(achievements)} for Steam)
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails sx={pad ? { pt: 2 } : undefined}>{children}</AccordionDetails>
    </Accordion>
  );
}