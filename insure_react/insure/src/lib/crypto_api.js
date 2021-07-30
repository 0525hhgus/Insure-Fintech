import Key from "../Key"

const { createCipheriv, createHash } = require("crypto");

const makeHashValue = () => {
    const hash = createHash("sha256");
    const input = "test.js";
    console.log(hash.update(input).digest("base64"));
    return hash.update(input).digest("base64");
}
makeHashValue();

const plainText = "!Kwic123테스트";

const makeAES = (plainText) => {

    const key = Key.apiKey;
    const iv = Key.apiIv;
    const AESChipher = createCipheriv("aes-256-cbc", key, iv);
    let encryptedData = AESChipher.update(plainText, "utf-8", "base64");
    encryptedData += AESChipher.final("base64");
    return encryptedData;
  };

// makeAES(algorithm, plainText, key, iv);

export default {
    makeAES, 
    makeHashValue,
};

// module.exports = {
//     hsKey : (str) =>{
//         const key = appSecretKey + timeSt;
//         var hmac = crypto.createHmac("sha512", new Buffer.from(key, 'utf-8'));
//         var signed = hmac.update(new Buffer.from(str, 'utf-8')).digest("base64");
//         console.log(signed);
//         return signed
//     },
//     ssnEncrypt : (ssnnum) => {
//         const serial = timeSt + appSecretKey;
//         let secureKey = rpad(serial, 32, '0')
//         var bytes = crypto.randomBytes(20);
//         let iv = crypto.randomBytes(16)
//         console.log(bytes);
//         const key = crypto.pbkdf2Sync(secureKey, bytes, 70000, 32, 'sha1');
//         const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
//         cipher.setAutoPadding(false);
//         console.log('b:' , bytes.toString('base64'))
//         console.log('iv:', iv.toString('base64'))
//         let encrypted = cipher.update(pkcs7Pad(ssnnum), 'utf8','base64');
//         encrypted += cipher.final('base64');
//         console.log("here :", encrypted)
//         var encBuf = Buffer.from(encrypted,'base64');
//         let arr = [bytes, iv, encBuf];
//         let conBuf = Buffer.concat(arr);
//         console.log(conBuf.toString('base64'));
//         // encrypted += conBuf.toString('base64');
//         console.log(encrypted);
//         return conBuf.toString('base64');
//     }
// }
