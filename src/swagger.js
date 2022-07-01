export default {
    swagger: "2.0",
    info: {
        description: "User Management System",
        version: "1.0.0",
        title: "Tasks API",
        contact: {
            email: "peace@google.com"
        }
    },
    schemes: ["http"],
    host: "localhost:4000",
    basePath: "/api/v1",
    paths: {
        "/auth/signup": {
            post: {
                summary: "Create an a new user",
                description: "Create new User",
                produces: ["application/json"],
                parameters: [],
                response: {
                    200: {
                        description: "Successul Operation",
                        schema: {
                            type: "array",
                            // items: {
                            //     $ref: "#/definitions/signupResponse"
                            // }
                        }
                    },
                    401: {
                        description: "Unauthorized",
                        schema: {
                            // $ref: "#/definition/unauthorizedResponse"
                        }
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            // $ref: "#/definition/badrequestResponse"
                        }
                    }
                }
            }
        }
    }
}