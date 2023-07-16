# ReactNative

React Native

# Reference links

1. Page setup react native: https://reactnative.dev/docs/environment-setup
2. Page setup expo: https://docs.expo.dev/workflow/customizing/
3. Expo LinearGradient: https://docs.expo.dev/versions/latest/sdk/linear-gradient/
4. Expo vector icon: https://docs.expo.dev/guides/icons/
5. Expo font: https://docs.expo.dev/versions/latest/sdk/font/
6. Expo Loading: https://docs.expo.dev/versions/v46.0.0/sdk/app-loading/
7. React navigation: https://reactnavigation.org/docs/getting-started

# Basic React

Create and run react native

```c
npx create-expo-app AwesomeProject
cd AwesomeProject
npx expo start
```

To debug React-Native use react devtool
Install react devtool

```c
npm install -g react-devtools
```

Run react devtool

```c
react-devtools
```

Install font to expo

```c
expo install expo-font
```

Install loading

```c
expo install expo-app-loading
```

Install LinearGradient

```c
npx expo install expo-linear-gradient
```

install react-native

```c
npm install @react-navigation/native
```

Installing dependencies into an Expo managed project

```c
npx expo install react-native-screens react-native-safe-area-context
```

Native Stack Navigator

```c
npm install @react-navigation/native-stack
```

screen rotation installation guide

1. app.json -> "orientation": "portrait", change to "orientation": "default"

# Tags in react native

| Tag                         | Use                                                                                     | Use to                                                                    |
| --------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| \<Text>\</Text>             | \<Text>Some Text\</Text>                                                                | used to add letter to side in the tag                                     |
| \<View>\</View>             | \<View>\<Text>Some Text\</Text>\</View>                                                 | use like tag div                                                          |
| \<Button/>                  | \<Button title="Create" onPress={function}/>                                            | Create button with title create, onPress like onClick                     |
| \<TextInput />              | \<TextInput placeholder="Name" onChangeText={function}/>                                | Create tag like input with placeholder Name, onChangeText like onChange   |
| \<Modal>\</Modal>           | \<Modal visible={true or false} animationType="slide">\<Text>Some Text\</Text>\</Modal> | create model in mobile and active if true and vice versa, animation slide |
| \<ScrollView>\</ScrollView> | \<ScrollView>\<Text>Some Text\</Text>\</ScrollView>                                     | Create scroll                                                             |
| \<FlatList>\</FlatList>     | \<FlatList>\<Text>Some Text\</Text>\</FlatList>                                         | Create scroll like ScrollView but it optimize than ScrollView             |
