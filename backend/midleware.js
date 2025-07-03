import jwt  from "jsonwebtoken";
const JWT_SECRET = "secret"

function auth(req,res,next){
        const authHeader = req.headers["authorization"];
        if(!authHeader){
            return res.status(403).json({msg:"missing auth header"});
        }
        const decoded = jwt.verify(authHeader,JWT_SECRET);
        if(decoded && decoded.id){
            req.userId = decoded.id;
            next()
        }else{
            return res.status(403).json({msg:"missing auth header"});
        }
    }


export default auth
