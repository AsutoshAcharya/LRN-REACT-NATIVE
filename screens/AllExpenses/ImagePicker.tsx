import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  ImagePickerResult,
} from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

const ImagePicker = () => {
  const [cameraPermissionIInfo, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState<ImagePickerResult | null>(
    null
  );
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
    setPickedImage(image);
  }
  console.log(pickedImage);

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        {pickedImage?.assets?.at(0)?.uri ? (
          <Image
            style={styles.image}
            source={{ uri: pickedImage?.assets?.at(0)?.uri }}
          />
        ) : (
          <Text children="No image taken" />
        )}
      </View>
      <Button title="Take Image" onPress={takeImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePicker;
