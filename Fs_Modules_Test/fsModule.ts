import fs from "fs";

// Synchronous way
fs.writeFileSync("test.txt", "Hello World");
console.log("File created successfully");

// Asynchronous way
fs.writeFile("test.txt", "Hello World", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});

// Synchronous way
const data = fs.readFileSync("test.txt", "utf8");
console.log(data);

// Asynchronous way
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Append file
fs.appendFile("test.txt", "Hello World", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File appended successfully");
    }
});

// Delete file
fs.unlink("test.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted successfully");
    }
});

// Rename file
fs.rename("test.txt", "test2.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File renamed successfully");
    }
});

// Create directory
fs.mkdir("test", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory created successfully");
    }
});

// Remove directory (only if empty) 
fs.rmdir("test", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory removed successfully");
    }
});
