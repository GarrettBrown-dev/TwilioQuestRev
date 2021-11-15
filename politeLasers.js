function getLaserSetting(magicWord) {
  if (magicWord === "please") {
    return "OFF";
  } else {
    return "ON";
  }
}

const getCurrentSetting = getLaserSetting("please");
console.log("The current laserSetting is " + getCurrentSetting);
