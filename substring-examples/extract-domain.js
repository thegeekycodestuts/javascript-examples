// More details - https://thegeekycodes.com/2023/08/14/exploring-javascript-substring-real-world-use-cases-with-examples/

const urls = [
    "https://www.test.com/page1",
    "https://blog.sample.com/article",
    "https://api.data.org/data",
];

const domains = urls.map((url) => {
    const startIndex = url.indexOf("//") + 2;
    const endIndex = url.indexOf("/", startIndex);
    return url.substring(startIndex, endIndex);
});

console.log(domains);
