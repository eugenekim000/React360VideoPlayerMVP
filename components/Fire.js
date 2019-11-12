import React from "react";
import { StyleSheet, View, asset } from "react-360";

import Entity from "Entity";

export default class Fire extends React.Component {
  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset("../static_assets/PUSHILIN_campfire.obj"),
            mtl: asset("../static_assets/PUSHILIN_campfire.mtl")
          }}
          style={{
            transform: [{ translate: [-1, -1, -2] }, { scale: 0.4 }]
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {}
});
