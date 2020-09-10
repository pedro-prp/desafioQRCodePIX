import transactionInterface from '../interfaces/trasanction'
import bcrypt from 'bcryptjs';

class transactionController {

    public createQRcode = (data: transactionInterface) => {
        
        const data_str = JSON.stringify(data)
        const saltRounds = 10;

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(data_str, salt);

        return ({'qrCodeString': String(hash)})
    }
}

export default transactionController;