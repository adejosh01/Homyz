import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8008",
    issuerBaseURL: "https://dev-2g7yotyaj1vhxpl0.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck