import "./FormCampStyles.css"

function FormCamp() {
    return(
        <div className="form-container">
            <h1>Summer Camp Registration</h1>
            <form>
                <input placeholder="Name" type="text" required/>
                <input placeholder="Gender" type="text" required/>
                <input placeholder="Date of Birth" type="date" required/>
                <input placeholder="Nationality" type="text" required/>
                <input placeholder="picture" type="file" required/>
                <input placeholder="Kit Size" type="text" required/>
                <input placeholder="Guardian Name" type="text" required/>
                <input placeholder="Guardian Relation" type="text" required/>
                <input placeholder="Guardian Contact" type="text" required/>
                <input placeholder="Payment Proof" type="file" required/>
                <textarea placeholder="Any information you would like us to know or be aware?" rows="10"></textarea>
                <button>Submit</button>
            </form>
            <h3>Please find the payment details bellow:</h3>
            <div className="payment">
                <img src="https://customercarecontacts.com/wp-content/uploads/2019/06/kasikorn-bank-logo.jpg" alt="paymentdetails" />
            </div>
        </div>
    );
}

export default FormCamp;