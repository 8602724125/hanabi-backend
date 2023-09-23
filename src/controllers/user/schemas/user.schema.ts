import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true
})

export class User {

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,  
    minlength: 3,
    maxlength: 16,
    validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9_-]{3,16}$/.test(value); 
      },
      message: (props) => `${props.value} is not a valid username!`,
    },
  })
  username: string;

  @Prop({
    required: true,
    validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value); 
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  })
  email: string;

  @Prop({
    required: true,
    minlength: 10,
    maxlength: 10,
    match: /^[0-9]+$/, 
  })
  phoneMobile: string;

  @Prop({
    required: true,
  })
  dob: string;
}

export const UserSchema = SchemaFactory.createForClass(User);