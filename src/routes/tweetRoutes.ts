import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";


const router = Router();
const prisma = new PrismaClient();
// create a tweet:
router.post("/", async(req, res)=>{
    const {content, image, userId } = req.body;
    try {
        const result = await prisma.tweet.create({
            data:{      
                content,   
                image, 
                userId //TODO: Manage based on the auth user

            }
        })    
        res.json(result);
    } catch (error) {
        res.status(501).json({error: "Error creating tweet"})

    }

    
    })
    //list tweets:
    router.get("/", async(req, res)=>{
const allTweets= await prisma.tweet.findMany()
        res.json(allTweets)
    
    })
    //list one tweet:
    router.get("/:id", async(req, res)=>{
        const {id} = req.params;
        const oneTweet = await prisma.tweet.findUnique({where:{id : Number(id)}})
if (!oneTweet){
    return res.status(400).json({error:"Tweet not found!"})
}
        res.json(oneTweet);
    
    })
    //update one tweet:
    router.put("/:id", async(req, res)=>{
        try {  const {id} = req.params;
        const {content, image} = req.body;
        const result = await prisma.tweet.update({where:{id:Number(id)}, data:{
            content, image
        }})
            res.json(result);

        } catch (error) {
            res.status(400).json({error:"Failed to updated tweet"})

        }
      
    })
    
    router.delete("/:id", async(req, res)=>{
        const {id} = req.params;
const result = await prisma.tweet.delete({where:{id:Number(id)}})
res.sendStatus(200)

    })
    export default router;