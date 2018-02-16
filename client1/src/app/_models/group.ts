

export class Group {
    _id: string;
    groupname:       { type: String, required: true, unique: true };
    members:    [{type: String}];
    
   
}