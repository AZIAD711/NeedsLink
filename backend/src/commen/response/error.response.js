// GOLBAL FAIL RESPONSE
export const failResponse = ({ response, message = "failed", data, statusCode = 400 }) => {
    return response.status(statusCode).json({
        success: false,
        message,
        data
    });
}
// DATA IS NOT FOUND RESPONSE 
export const dataNotFoundResponse = ({
    response,
    message = "data not found",
    data
})=>{
    return failResponse({
        response,
        message: `${message} is not found successfully`,
        data,
    })

}
// AUTHORIZED RESPONSE 
export const authorizedResponse = ({
    response,
    message = "authorized",
    data
})=>{
    return failResponse({
        response,
        message: `${message} Access `,
        data,
        statusCode: 404
    })

}