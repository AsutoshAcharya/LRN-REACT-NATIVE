import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import React from "react";
import { Alert, Button, View } from "react-native";

const ImagePicker = () => {
  const [cameraPermissionIInfo, requestPermission] = useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionIInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResp = await requestPermission();
      return permissionResp.granted;
    }
    if (cameraPermissionIInfo?.status === PermissionStatus.DENIED) {
      Alert.alert("Insufficient permission!");
      return false;
    }
    return true;
  }
  async function takeImage() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }
  return (
    <View>
      <Button title="Take Image" onPress={takeImage} />
    </View>
  );
};

export default ImagePicker;
