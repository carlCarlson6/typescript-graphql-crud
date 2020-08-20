import mongoose from 'mongoose';
import env_variables from '../../env_variables';

class DbConfig {
    constructor() {
        mongoose.set('useFindAndModify', true);
    }

    async connect(): Promise<void> {
        const connection = await mongoose.connect(env_variables.MONGODB, 
            {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true}
        )
        console.log('connected to db', connection.connection.name);
    }

}

export default DbConfig;
