class AddressBook{
    FirstName;
    LastName;
    Address;
    City;
    State;
    PINCode;
    PhoneNumber;
    emailID;

    constructor(...params){
        this.FirstName = params[0]
        this.LastName = params[1]
        this.Address = params[2]
        this.City = params[3]
        this.State = params[4]
        this.PINCode = params[5]
        this.PhoneNumber = params[6]
        this.emailID = params[7];

    }
}