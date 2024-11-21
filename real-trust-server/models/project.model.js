import { model, Schema } from 'mongoose';

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        public_id: {
            type: String,
        },
        secure_url: {
            // required: [true, "thumbnail is required"],
            type: String,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
    }
);

const Project = model('Project', projectSchema);
export default Project;
