// GOLBAL SCCUESS RESPONSE
export const successResponse = ({res, message="done", data,statusCode=200}) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
}