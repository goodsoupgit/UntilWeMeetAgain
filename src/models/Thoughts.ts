import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose';

export interface Ithought extends Document {
    text: string;
    author: string;
    createdAt: Date;
}

const ThoughtsSchema : Schema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        default: "Anonymous"
    }},
    {timestamps: true
})

export default mongoose.model<Ithought>('Thought', ThoughtsSchema)