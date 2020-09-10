import transactionInterface from '../interfaces/transactionInterface'

class transactionController {

    public createQRcode = (data: transactionInterface) => {
        return ({'qrcode': data})
    }
}
 
export default transactionController;