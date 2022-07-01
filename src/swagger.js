export default {
    swagger: "2.0",
    info: {
        description: "User Management System",
        version: "1.0.0",
        title: "Users API",
        contact: {
            email: "peace@google.com"
        },
        license: {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    schemes: ["http", "https"],
    host: "localhost:4000",
    basePath: "/api/v1",

    tags: [
        {
            name: 'User',
            description: 'APIs for users'
        },
        {
            name: 'Task',
            description: 'APIs for tasks'
        }
    ],

    definitions: {
        User: {
            required: ["name", "email", "password"],
            properties: {
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                },
                // registered_at:{
                //     type: 'string'
                // }
            }
        },
        Error: {
            title: "Error",
            type: 'Object',
            message: {
                type: 'string'
            }

        }
    },
    paths: {
        "/auth/signup": {
            post: {
                tags: ['User'],
                summary: "Create an a new user",
                parameters: [
                    {
                        name: 'user',
                        in: 'body',
                        description: 'User to register',
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    }
                ],
                produces: ['application/json'],
                response: {
                    200: {
                        description: "Successul Operation",
                        schema: {
                            $ref: "#/definitions/User"
                        }
                    },
                    401: {
                        description: "Unauthorized",
                        schema: {
                            $ref: "#/definitions/Error"
                        }
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            $ref: "#/definitions/Error"
                        }
                    }
                }
            }
        },
    }
}