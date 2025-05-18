import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  const saveItem = async (key, password, name) => {
    try {
      let passwords = await getItem(key);
      const newPassword = {
        id: Date.now().toString(),
        name: name,
        password: password,
      }
      const updatePassword = [...passwords, newPassword]
      await AsyncStorage.setItem(key, JSON.stringify(updatePassword));
    } catch (err) {
      console.log(err);
    }
  };
  const removeItem = async (key, id) => {
    try {
      let passwords = await getItem(key);
      let myPasswords = passwords.filter(item=>item.id !== id);
      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
      return myPasswords;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
