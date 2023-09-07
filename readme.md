# Secure File Downloader

The Secure File Downloader is a JavaScript-based web application that allows users to download files from web URLs in a secure and controlled manner. It offers URL validation, content type checking, and file size limitations to ensure safe and reliable downloads.

## Features

- **URL Validation**: Validates the format of the provided URL to ensure it is well-formed.

- **Content Type Checking**: Verifies that the downloaded file's content type matches an allowed list of content types, preventing unexpected downloads.

- **File Size Limitations**: Enforces maximum file size limits to prevent excessively large downloads.

## Usage

1. Open the web application.

2. Input the URL of the file you want to download into the input field.

3. Click the "Download" button.

4. If the URL is valid, the file will be fetched and downloaded to your device with a filename based on the current timestamp.

## Error Handling

- If the URL format is invalid, you will receive an "Invalid URL format" error message.

- If the file download fails due to any reason, an error message will be displayed with details about the failure.

## Customization

You can customize the allowed content types and file size limitations by modifying the `isValidContentType` and `maxSizeBytes` variables in the JavaScript code.

## Security Considerations

Please use this tool responsibly and only download files from trusted sources. Ensure that you comply with all relevant legal and ethical guidelines when downloading content from the web.

## Feedback and Contributions

We welcome your feedback and contributions to improve this tool. If you encounter issues or have suggestions, please open an issue or submit a pull request .

