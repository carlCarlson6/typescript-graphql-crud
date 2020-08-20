import { ObjectType, Field, Int, ID } from "type-graphql";
import mongoose from 'mongoose';
import 'reflect-metadata'

@ObjectType()
export class Movie extends mongoose.Document {

    @Field(() => String)
    id: string

    @Field({nullable: true})
    title: string

    @Field(() => Int)
    minutes: number

    @Field(() => String)
    createdAt: String

}