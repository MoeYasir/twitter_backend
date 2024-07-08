import { Router } from "express";

const router = Router();

// create a tweet:
router.post("/", (req, res)=>{
    res.status(501).json({error: "Not implemented"})
    
    })
    //list tweets:
    router.get("/", (req, res)=>{
        res.status(501).json({error: "Not implemented:"})
    
    })
    //list one tweet:
    router.get("/:id", (req, res)=>{
        const {id} = req.params;
        res.status(501).json({error: `Not implemented: ${id}`})
    
    })
    //update one tweet:
    router.put("/:id", (req, res)=>{
        const {id} = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
    })
    
    router.delete("/:id", (req, res)=>{
        const {id} = req.params;
        res.status(501).json({error: `Not implemented: ${id}`})
    })
    export default router;