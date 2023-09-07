const urlInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", async () => {
    try {
        const url = urlInput.value;
        if (!isValidURL(url)) {
            throw new Error("Invalid URL format");
        }

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Failed to fetch the resource");
        }

        const contentType = response.headers.get("Content-Type");
        if (!isValidContentType(contentType)) {
            throw new Error("Invalid content type");
        }

        const maxSizeBytes = 10 * 1024 * 1024; // 10MB
        const contentLength = parseInt(response.headers.get("Content-Length"), 10);
        if (contentLength > maxSizeBytes) {
            throw new Error("File size exceeds the limit");
        }

        const file = await response.blob();

        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);

        const filename = url.split("/").pop() || "downloaded_file";

        link.download = filename;

        link.click();
    } catch (error) {
        alert("Failed to download the file: " + error.message);
    }
});

function isValidURL(input) {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(input);
}

function isValidContentType(contentType) {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    return allowedTypes.includes(contentType);
}
