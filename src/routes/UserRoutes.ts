import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// create a user:
router.post("/", async(req, res)=>{
    const {email, name, username} = req.body;
    try{
        const result = await prisma.user.create({
            data:{
                email,
                name,
                username,
                bio: "Hello, I'm new on Twitter",
        
            }
        })    
        
            res.json(result);
    }
catch(e){
    res.status(400).json("Error occured")
}
    
    })
    //list users:
    router.get("/", async(req, res)=>{
        const allUsers = await prisma.user.findMany();
    
    res.json(allUsers);
     
    
    })
    //list one user:
    router.get("/:id",async (req, res)=>{
        const {id} = req.params;
        const oneUser = await prisma.user.findUnique({where: {id :Number(id)} })
        if (!oneUser){
            return res.status(400).json("User not found!")
        }
        res.json(oneUser);
    
    })
    //update one user:
    router.put("/:id", async (req, res)=>{
try {
    const {id} = req.params;
    const {bio, image, name} = req.body;
    const result = await prisma.user.update({
        where:{id : Number(id)},
        data:{
            bio, image, name
        }
    })
    
res.json(result);
}
catch(e){
    res.status(400).json({error:"Failed to updated user"})

}
      
    })
    
    router.delete("/:id", async(req, res)=>{
        const {id} = req.params;
       await prisma.user.delete({where: {id: Number(id)}})
        res.sendStatus(200)
    })
    export default router;