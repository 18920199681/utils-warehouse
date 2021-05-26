const CryptoJS = require("crypto-js");

// const key = "1234123412ABCDEF";  //十六位十六进制数作为密钥
// const iv = "ABCDEF1234123412";   //十六位十六进制数作为密钥偏移量

//加密方法
export const Encrypt = (key, iv, value) => {
  const EnKey = CryptoJS.enc.Utf8.parse(key);
  const Eniv = CryptoJS.enc.Utf8.parse(iv);
  const srcs = CryptoJS.enc.Utf8.parse(value);

  const encrypted = CryptoJS.AES.encrypt(srcs, EnKey, {
    iv: Eniv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.ciphertext.toString().toUpperCase();
};

//解密方法
export const Decrypt = (key, iv, value) => {
  const DeKey = CryptoJS.enc.Utf8.parse(key);
  const Deiv = CryptoJS.enc.Utf8.parse(iv);
  const encryptedHexStr = CryptoJS.enc.Hex.parse(value);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);

  const decrypt = CryptoJS.AES.decrypt(srcs, DeKey, {
    iv: Deiv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);

  return decryptedStr.toString();
};
