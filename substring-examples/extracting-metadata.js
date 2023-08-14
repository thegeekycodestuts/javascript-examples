const metadataString = "JavaScript Substring - John Doe";
const separatorIndex = metadataString.indexOf(" - ");

if (separatorIndex !== -1) {
    const title = metadataString.substring(0, separatorIndex);
    const author = metadataString.substring(separatorIndex + 3);
    console.log(`Title: ${title}, Author: ${author}`);
} else {
    console.log("Invalid metadata format");
}
