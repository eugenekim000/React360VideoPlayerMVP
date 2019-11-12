import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  NativeModules
} from "react-360";

import Fire from "./components/Fire.js";
import GazeButton from "react-360-gaze-button";

const { VideoModule } = NativeModules;

export default class react_360_mvp extends React.Component {
  constructor() {
    super();
    this.state = { vol: 0.5, gazed: false };
  }
  setGazed = () => {
    this.setState({ gazed: true });
  };
  playSurface() {
    VideoModule.play("myplayer", {
      source: {
        url: "static_assets/SampleVideo.mp4"
        //url: "https://www.youtube.com/watch?v=7idBFx7erWA"
      },
      muted: false
    });

    Environment.setScreen("default", "myplayer", "default", 200, 0, 900, 400);
  }

  pauseVideo() {
    VideoModule.pause("myplayer");
  }

  resumeVideo() {
    VideoModule.resume("myplayer");
  }

  increaseVolume() {
    this.setState({
      vol: this.state.vol + 0.1
    });
    VideoModule.setParams("myplayer", {
      volume: this.state.vol
    });
  }

  decreaseVolume() {
    this.setState({
      vol: this.state.vol - 0.1
    });
    VideoModule.setParams("myplayer", {
      volume: this.state.vol
    });
  }

  componentDidMount() {
    VideoModule.createPlayer("myplayer");
    console.log("video created");
  }
  render() {
    const { gazed } = this.state.gazed;
    return (
      <View>
        <GazeButton
          duration={2000}
          onClick={() => this.playSurface()}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed
                  ? "You have gazed me"
                  : isGazed
                  ? remainingTime
                  : "Play Video"}
              </Text>
            </View>
          )}
        />
        <GazeButton
          duration={500}
          onClick={() => this.pauseVideo()}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed
                  ? "You have gazed me"
                  : isGazed
                  ? remainingTime
                  : "Pause"}
              </Text>
            </View>
          )}
        />

        <GazeButton
          duration={500}
          onClick={() => this.resumeVideo()}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed
                  ? "You have gazed me"
                  : isGazed
                  ? remainingTime
                  : "Resume"}
              </Text>
            </View>
          )}
        />

        <GazeButton
          duration={2000}
          onClick={() => this.increaseVolume()}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed ? "You have gazed me" : isGazed ? remainingTime : "+"}
              </Text>
            </View>
          )}
        />

        <GazeButton
          duration={2000}
          onClick={() => this.decreaseVolume()}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed ? "You have gazed me" : isGazed ? remainingTime : "-"}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 15,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 25
  },
  VrButton: {
    transform: [{ translateX: 0 }]
  }
});

AppRegistry.registerComponent("react_360_mvp", () => react_360_mvp);
AppRegistry.registerComponent("Fire", () => Fire);
