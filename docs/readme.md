## react-native-screens

On Android the View state is not persisted consistently across Activity restarts, which can lead to crashes in those cases. It is recommended to override the native Android method called on Activity restarts in your main Activity, to avoid these crashes.

For most people using an app built from the react-native template, that means editing `MainActivity.java`, likely located in `android/app/src/main/java/<your package name>/MainActivity.java`

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

---


### NetInfo

Modify android/build.gradle
add supportLibVersion support @react-native-community/netinfo

```java
supportLibVersion = "28.0.0"
```
