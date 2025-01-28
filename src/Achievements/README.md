# Adding Achievements

- Add a .svg in `./assets/Steam/achievements/real`
- If making a Steam achievement, create the achievement in Steam Dev Portal
- Run `sh ./assets/Steam/achievements/pack-for-web.sh`, or `pack-for-web-mac.sh` for MacOS
- Add an entry in `./src/Achievements/AchievementData.json` -> achievements
  - It should match the information for the Steam achievement, if applicable
  - Order the new achievement entry thematically
- Add an entry in `./src/Achievements/Achievements.ts` -> achievements
  - Match the order of achievements in `AchievementData.json`
- Commit `./dist/icons/achievements`
