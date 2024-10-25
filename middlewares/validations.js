import jwt from "jsonwebtoken";
import { SECRETKEY } from "../helpers/config";
import { languageByLang as msg } from "../helpers/messages";
import { handleError, Unauthorized } from "../helpers/errorHandler";

export const validateToken = async (req, res, next) => {

    // Extrae el token del encabezado authorization como "Bearer <token>". 
    // (?.) verifica si el encabezado existe, si está, separa "Bearer" y "<token>", y devuelve el token.
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return handleError(new Unauthorized(msg.tokenNotFound), res);
    }

    jwt.verify(token, SECRETKEY, (err, decoded) => {
        if (err) {
            return handleError(new Unauthorized(msg.invalidToken), res);
        }
        req.user = decoded;
        next();
    });
};
