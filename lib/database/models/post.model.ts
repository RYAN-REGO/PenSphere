import { Document, Schema, model, models } from 'mongoose';

export interface IPost extends Document{
    _id : string;
    title : string;
    description : string;
    createdAt : Date;
    imageUrl : string;
    category : {_id : string, name : string};
    creator : {_id : string, firstName : string, lastName : string};
}

const PostSchema = new Schema({
    title : {type : String, required : true},
    description : {type : String},
    createdAt : {type : Date, default : Date.now},
    imageUrl : {type : String, required : true},
    category : {type : Schema.Types.ObjectId, ref : 'Category'},
    creator : {type : Schema.Types.ObjectId, ref : 'User'},
})

const Post = models.Post || model('Post', PostSchema);

export default Post;
//number of likes
//comments