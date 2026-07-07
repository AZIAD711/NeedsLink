// GOLBAL FAIL RESPONSE
export const failResponse = ({ response, message = "failed", data, statusCode = 400 }) => {
    return response.status(statusCode).json({
        success: false,
        message,
        data
    });
}
