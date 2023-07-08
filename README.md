# ReactNative

React Native

# Reference links

1. Page setup react native: https://reactnative.dev/docs/environment-setup
2. Page setup expo: https://docs.expo.dev/workflow/customizing/

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
