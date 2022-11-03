import { createStackNavigator } from "@react-navigation/stack";

import type { Routes } from "./app/Routes";
import { Examples } from "./app/Examples";
import { HeartOfTheMatter } from "./app/HeartOfTheMatter";
import { PanGesture } from "./app/PanGesture";
import { Transitions } from "./app/Transitions";
import { CircularSlider } from "./app/CircularSlider";
import { Graph } from "./app/Graph";
import { Worklets } from "./app/Worklets";
import { DragToSort } from "./app/DragToSort";
import { DynamicSpring } from "./app/DynamicSpring";
import { Animations } from "./app/Animations";
import { Swiping, swipingAssets } from "./app/Swiping";
import { Bezier } from "./app/Bezier";
import { ShapeMorphing } from "./app/ShapeMorphing";
import { Accordion } from "./app/Accordion";
import { LoadAssets } from "./app/components";

const assets = [...swipingAssets];
const Stack = createStackNavigator<Routes>();
const App = () => (
  <LoadAssets assets={assets}>
    <Stack.Navigator>
      <Stack.Screen
        name="Examples"
        component={Examples}
        options={{
          title: "Learn Reanimated 2",
        }}
      />
      <Stack.Screen
        name="TheHeartOfTheMatter"
        component={HeartOfTheMatter}
        options={{
          title: "The Heart of the Matter",
        }}
      />
      <Stack.Screen
        name="Worklets"
        component={Worklets}
        options={{
          title: "Worklets",
        }}
      />
      <Stack.Screen
        name="Animations"
        component={Animations}
        options={{
          title: "Animations",
        }}
      />
      <Stack.Screen
        name="PanGesture"
        component={PanGesture}
        options={{
          title: "PanGesture",
        }}
      />
      <Stack.Screen
        name="Transitions"
        component={Transitions}
        options={{
          title: "Transitions",
        }}
      />
      <Stack.Screen
        name="CircularSlider"
        component={CircularSlider}
        options={{
          title: "Circular Slider",
        }}
      />
      <Stack.Screen
        name="Graph"
        component={Graph}
        options={{
          title: "Graph",
        }}
      />
      <Stack.Screen
        name="DynamicSpring"
        component={DynamicSpring}
        options={{
          title: "Dynamic Spring",
        }}
      />
      <Stack.Screen
        name="DragToSort"
        component={DragToSort}
        options={{
          title: "Drag to Sort",
        }}
      />
      <Stack.Screen
        name="Swiping"
        component={Swiping}
        options={{
          title: "Swiping",
        }}
      />
      <Stack.Screen
        name="Bezier"
        component={Bezier}
        options={{
          title: "Bézier",
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ShapeMorphing"
        component={ShapeMorphing}
        options={{
          title: "Shape Morphing",
        }}
      />
      <Stack.Screen
        name="Accordion"
        component={Accordion}
        options={{
          title: "Accordion",
        }}
      />
    </Stack.Navigator>
  </LoadAssets>
);

// eslint-disable-next-line import/no-default-export
export default App;
