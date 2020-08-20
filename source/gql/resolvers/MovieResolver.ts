import { Resolver, Mutation, Query, Arg, Int, FieldResolver, Root, Field } from "type-graphql";
import { Movie } from "../entities/Movie";
import {v4 as generateId} from 'uuid';
import MovieRepro from "../../database/models/MovieSchema";

@Resolver(() => Movie)
export class MovieResolver {
    @Query(() => String, {nullable: true})
    hello(): string {
        return 'hello';
    }

    @Query(() => [Movie])
    async movies(): Promise<Array<Movie>> {
        const movies = await MovieRepro.find();
        console.log(movies[0].createdAt)
        return movies;
    }

    @Mutation(() => Movie, {nullable: true})
    async AddMovie(@Arg('title') title: string, @Arg('minutes', ()=>Int, {nullable: true}) minutes: number): Promise<Movie | null> {
        const id = generateId();
        const createdAt = new Date();

        const newMovie = new MovieRepro({id, title, minutes, createdAt});
        console.log(newMovie.createdAt)
        
        await newMovie.save();
        return newMovie;
    }

    @FieldResolver()
    createdAt(@Root() parent: any): String{
        console.log('from field resolver', parent)
        return parent.createdAt.toString();
    }

}