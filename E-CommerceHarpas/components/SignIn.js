import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from "./Home";
import { SafeAreaView } from "react-native";

const SignIn = ({ navigation, route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = () => {
    // Validasi input
    if (username === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }

    // Validasi username dan password
    if (username === "febri" && password === "123") {
      // Logika untuk memproses pendaftaran pengguna
      // console.log("Pendaftaran berhasil:", username, password);
      navigation.navigate('ButtonTab');
    } else {
      setError("Account is not registered");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView>
      <View style={styles.judul}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Sign In</Text>
        <Text>Create an account, it’s free</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 48 }}>Username</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <TextInput
          placeholder=""
          style={styles.textusername}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 48 }}>Password</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 5 }}>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textpassword}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
            <FontAwesome5 name={showPassword ? "eye-slash" : "eye"} size={18} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>

      {error !== "" && <Text style={styles.errorText}>{error}</Text>}

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bawah}>
        <Text>Doesn’t have an account, yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: "blue" }}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  judul: {
    alignItems: "center",
    marginTop:70,
  },
  textusername: {
    borderWidth: 1,
    width: 300,
    height: 50,
    padding: 5,
    borderRadius: 10,
  },
  textpassword: {
    flex: 1,
    width: 260,
    height: 50,
    padding: 5,
    borderRadius: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  eyeIcon: {
    marginRight: 5,
  },
  button: {
    backgroundColor: "#31308B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 150,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  bawah: {
    alignItems: "center",
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "center"
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default SignIn;