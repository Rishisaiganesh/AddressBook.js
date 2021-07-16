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
     /// declaring Paremeters to string
  
    ///Applying RegexFormet to First Name 
    get FirstName() { return this.FirstName; }
    set FirstName(firstName) {
        let FirstnameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (FirstnameRegex.test(FirstName)) {
            this.FirstName = FirstName;
        } else {
            return 'Invalid  Name';          }
    }
    /// Applying Regex to Last Name
    get LastName() { return this.LastName; }
    set LastName(LastName) {
        let LastnameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (LastnameRegex.test(LastName))
          this.LastName = LastName;
        else
          throw "Invalid last Name";
    }
    ///Applyin Regex to Address
    get Address() { return this.Address; }
    set Address(Address) {
    let AddressRegex = RegExp("^[A-Za-z]{4,}$");
        if (AddressRegex.test(Address))
          this.Address = Address;
        else
          throw "Give Valid Address";
    }
    ///Appling Regex to City
    get City() { return this.City; }
    set City(City) {
      let CityRegex = RegExp("^[A-Za-z]{4,}$");
    if (CityRegex.test(City))
         this.City = City;
     else
         throw "Give valid city ";
    }
    ///Applying Regex to State class
    get State() { return this.State; }
    set State(State) {
    let StateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (StateRegex.test(State))
          this.State = State;
        else
          throw "Give valid state";
    }
    /// Applying Regex to Pincode
    get PINCode() { return this.PINCode; }
    set PINCode(PINCode) {
      let PINRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
      if (PINRegex.test(PINCode))
        this.PINCode = PINCode;
      else
        throw "Invalid pincode ";
    }
    ///Applying Regex to Phone NUmber
    get PhoneNumber() { return this.PhoneNumber; }
    set PhoneNumber(PhoneNumber) {
      let PhoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
      if (PhoneRegex.test(PhoneNumber))
        this.PhoneNumber = PhoneNumber;
      else
        throw "Invalid phonenumber";
    }
    ///Applying regex to EmailID
    get emailID() { return this.emailID; }
    set emailID(emailID) {
      let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
      if (emailRegex.test(emailID))
        this.emailID = emailID;
      else
        throw "Invalid email";
    }
    toString() {
      return "first Name: " + this.FirstName ,+ " last Name: " + this.lastName,
        + "Address: " + this.Address + ", City: " + this.city,
        + " State: " + this.State + "Pincode: " + this.PINCode ,
        + " PhoneNumber: " + this.PhoneNumber ,+ " email: " + this.emailID;
  }
}

try{
  let contactDetails = new AddressBook("Rishi","Saiganesh","RRComplex","Nellore","Andhrapradesh","524001","91 9898989898","dsdsr23@gmail.com");
  console.log(contactDetails.toString());
  
} catch (error)
{
  console.log(error)
}