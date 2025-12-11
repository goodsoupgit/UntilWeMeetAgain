import type { Request, Response } from "express";
import { Router } from "express";
import Thoughts from "../models/Thoughts";

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    try{
        const {text, receiver} = req.body

        if(!text || !receiver){
            res.status(400).json({message: "Thought text is required"});
            return;
        }

        const newThought = new Thoughts({
            text,
            receiver: receiver || "anonymous"
        })

        const savedThought = await newThought.save()
        res.status(201).json(savedThought)
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

router.get('/', async (req: Request, res: Response) => {
    try{
        const thoughts = await Thoughts.find().sort({createdAt: -1})
        res.json(thoughts)
    }catch(e){
        res.status(500).json({message: "Error fetching data"})
    }
})

export default router;