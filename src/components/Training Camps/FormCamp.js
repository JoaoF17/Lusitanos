import { useState } from "react";
import "./FormCampStyles.css"
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import paymentImg from "../../Assets/paymentbanner.png"


function FormCamp() {

    const[participation, setParticipation] = useState("");
    const[name, setName] = useState("");
    const[gender, setGender] = useState("");
    const[dateOfBirth, setDateOfBirth] = useState("");
    const[nationality, setNationality] = useState("");
    const[kitSize, setKitSize] = useState("");
    const[guardianName, setGuardianName] = useState("");
    const[guardianRelation, setGuardianRelation] = useState("");
    const[guardianEmail, setGuardianEmail] = useState("");
    const[guardianPhone, setGuardianPhone] = useState("");
    const[message, setMessage] = useState("");
    const[proofURL,setProofURL] = useState("");
    
    const[submitLoading,setSubmitLoading]=useState('Submit');
    const[uploadLoading,setUploadLoading]=useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()
        setSubmitLoading('Submitting...')
        await addDoc(collection(db, "Songkran Camp 2023"), {
            participation: participation,
            name: name,
            gender: gender,
            dateOfBirth: dateOfBirth,
            nationality: nationality,
            kitSize: kitSize,
            guardianName: guardianName,
            guardianRelation: guardianRelation,
            guardianEmail: guardianEmail,
            guardianPhone: guardianPhone,
            message: message,
            paymentProof: proofURL,            
            })
            .then(() => {
                alert("Thank you for your registration, we have sucessfully received your details and will be in touch with you soon.")
            })
            .catch(error => {
                alert(error.message);
        });

        setSubmitLoading('Submission Done')

        setParticipation("");
        setName("");
        setGender("");
        setDateOfBirth("");
        setNationality("");
        setKitSize("");
        setGuardianName("");
        setGuardianRelation("");
        setGuardianEmail("");
        setGuardianPhone("");
        setMessage("");
        setProofURL("");
        setSubmitLoading("Submit");
    };

    const onFileChange = (e) => {
        setUploadLoading('Uploading Image...')
        const file = e.target.files[0]
        const name = new Date().getTime() + file.name;
        console.log(name)
        const storageRef = ref(storage, 'payment_proof/'+name);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
        }).then(()=>{
            getDownloadURL(ref(storageRef)).then((url)=>{
                setProofURL(url);
                setUploadLoading('Image Uploaded')
            })
        });
    }

    return(
        <div className="form-container">
            <h1>Registration Form</h1>
            <p>We will be sending an email with all details within 24 hours of your registration. If you would like to contact us directly email us at: <br /><strong>hello@lusitanos.org</strong></p>
            <form onSubmit={handleSubmit}>
                <label>Please select in which week or how many sessions you wish to participate</label>
                <select id="participation" name="participation" value={participation} onChange={(e) => setParticipation(e.target.value)} required>
                    <option defaultValue hidden value> -- select an option -- </option>
                    <option value="Week1">Week 1 (APR 10th - 15th) -- 8,000 ฿</option>
                    <option value="Week2">Week 2 (APR 17th - 22th) -- 8,000 ฿</option>
                    <option value="1xSession">1x Session -- 1,500 ฿</option>
                    <option value="2xSessions">2x Sessions -- 3,000 ฿</option>
                    <option value="3xSessions">3x Sessions -- 4,500 ฿</option>
                </select>                
                <label>Name</label>
                <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>

                <label>Gender</label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option defaultValue hidden value> -- select an option -- </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label>Date of Birth</label>
                <input placeholder="Date of Birth" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required/>

                <label>Nationality</label>
                <input placeholder="Nationality" type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} required/>

                <label>Kit Size</label>
                <input placeholder="Kit Size" type="text" value={kitSize} onChange={(e) => setKitSize(e.target.value)} required/>

                <label>Guardian Name</label>
                <input placeholder="Guardian Name" type="text" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} required/>

                <label>Guardian Relation</label>
                <input placeholder="Guardian Relation" type="text" value={guardianRelation} onChange={(e) => setGuardianRelation(e.target.value)} required/>

                <label>Guardian Email</label>
                <input placeholder="Guardian Email" type="email" value={guardianEmail} onChange={(e) => setGuardianEmail(e.target.value)} required/>

                <label>Guardian Phone</label>
                <input placeholder="Guardian Phone" type="tel" value={guardianPhone} onChange={(e) => setGuardianPhone(e.target.value)} required/>

                <h3>Please find the payment details bellow:</h3>
                <div className="payment">
                    <img src={paymentImg} alt="paymentdetails" />
                </div>

                <label>Payment Proof</label>
                <div style={{marginBotton:'2rem','display':'flex', flexDirection:'column', 'width':'100%'}}>
                <input placeholder="Payment Proof" accept="image/*" type="file" name="fileName" onChange={onFileChange} style={{'margin':'auto',textAlign:'center' , 'width':'100%' }} required/>
                {uploadLoading}
                </div>
                <div style={{'display':'flex', justifyItems:'center', justifyContent:'center'}}>
                <img src={proofURL} style={{ maxWidth:'300px', height:'auto', objectFit: 'cover', marginBotton:'2rem' }} alt="" />
                </div>

                <textarea placeholder="Any information you would like us to know or be aware of?" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button type="submit">{submitLoading}</button>

            </form>

            
        </div>
    );
}

export default FormCamp;