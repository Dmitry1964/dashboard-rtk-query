import mongoose, {Schema} from "mongoose";

export interface IPartners {
    inn: string;
    shortName: string;
    fullName?: string;
    phone?: string;
    contacts?: string;
    roles: 'Покупатели' | 'Поставщики';
  }
  
  const partnerSchema = new Schema<IPartners>({
    shortName: {
        type: String,
        required: [true, 'Наименование обязательно'],
        trim: true,
    },
    inn: {
        type: String,
        required: [true, 'ИНН обязателен'],
        minlength: [10, 'ИНН должен содержать не менее 10 знаков'],
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        maxlength: [50, 'Телефон не может быть длиннее 50 символов'],
    
    },
    contacts: String,
    roles: String
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Partner', partnerSchema);