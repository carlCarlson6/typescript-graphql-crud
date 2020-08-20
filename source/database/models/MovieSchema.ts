import {Schema, model} from 'mongoose';
import { Movie } from '../../gql/entities/Movie';

const MovieSchema = new Schema(
    {
        id: String,
        title: String,
        minutes: Number,
        createdAt: Date,
    }
)

export default model<Movie>('MovieRepro', MovieSchema, 'movies');
