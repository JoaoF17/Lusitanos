import React from 'react';
import { Button, Select, TextField, MenuItem, InputLabel, FormControl, FormLabel,RadioGroup, FormControlLabel, Radio, Dialog, DialogTitle, DialogContent, Grid, DialogActions } from '@mui/material';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import "./FormCamp1Styles.css";


function FormCamp1() {

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

    const[open, setOpen] = useState(false);
    const[submitLoading,setSubmitLoading]=useState('Submit');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSubmitLoading('Submitting...');
        const formatedDate = dateOfBirth.toDate();
        await addDoc(collection(db, "Songkran Camp 2023"), {
            participation: participation,
            name: name,
            gender: gender,
            dateOfBirth: formatedDate,
            nationality: nationality,
            kitSize: kitSize,
            guardianName: guardianName,
            guardianRelation: guardianRelation,
            guardianEmail: guardianEmail,
            guardianPhone: guardianPhone,
            message: message,
            submissionDate: serverTimestamp(),
            })
            .then(() => {
                alert("Thank you for your registration, we have sucessfully received your details and will be in touch with you soon.")
            })
            .catch(error => {
                alert(error.message);
        });

        
        setSubmitLoading('Submission Done');
        setOpen(false);

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
        setSubmitLoading("Submit");
    };

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
            main: '#0971f1',
            darker: '#053e85',
            },
            gold: {
            main: '#FCA311',
            contrastText: '#fff',
            },
        },
    });

    return (
        <>
            <Button className="Button" theme={theme} color='gold' variant='contained' size="large" sx={{m:2}} onClick={() => setOpen(true)}>Enroll</Button>
            <Dialog 
                open={open}
                onClose={() => setOpen(false)}
                maxWidth={'sm'}
            >
                <DialogTitle className='title-form'>Registration Form</DialogTitle>
                <DialogContent>
                    <p className='text-form'>We will be sending an email with all the details before the camp starts. If you have any questions feel free to send us a message to <strong>@lusitanos</strong> in Line or email us at: <br /><strong>hello@lusitanos.org</strong></p>
                    
                    <Grid container xs={{ m:2 }} spacing={2}>
                        <Grid item xs={6}>
                            <TextField id="Name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth required/>
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl>
                                <FormLabel id="gender" fullWidth required>Gender</FormLabel>
                                <RadioGroup
                                    row
                                    name="gender"
                                    value={gender} onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <DatePicker value={dateOfBirth} label="Birth Date" onChange={(e) => setDateOfBirth(e)} disableFuture />
                                </FormControl>
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="participation">Package</InputLabel>
                                <Select id="participation" name="participation" value={participation} label="Package" onChange={(e) => setParticipation(e.target.value)} required>
                                    <MenuItem value="Week1">Week 1 (APR 10th - 12th) -- 2,000 ฿</MenuItem>
                                    {/* <MenuItem value="Week2">Week 2 (APR 17th - 22th) -- 8,000 ฿</MenuItem> */}
                                    {/* <MenuItem value="2Weeks">Both weeks (APR 10th - 22th) -- 15,000 ฿</MenuItem> */}
                                    <MenuItem value="1xSession">1x Session -- 1,000 ฿</MenuItem>
                                    <MenuItem value="2xSessions">2x Sessions -- 1,500 ฿</MenuItem>
                                </Select>
                            </FormControl> 
                        </Grid>

                        <Grid item xs={6}>
                            <TextField id="Nationality" label="Nationality" variant="outlined" value={nationality} onChange={(e) => setNationality(e.target.value)} fullWidth required/>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField id="kitSize" label="Kit Size" variant="outlined" value={kitSize} onChange={(e) => setKitSize(e.target.value)} fullWidth required/>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField id="guardianName" label="Guardian Name" variant="outlined" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} fullWidth required/>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField id="guardianRelation" label="Guardian Relation" variant="outlined" value={guardianRelation} onChange={(e) => setGuardianRelation(e.target.value)} fullWidth required/>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField id="guardianEmail" label="Guardian Email" variant="outlined" value={guardianEmail} onChange={(e) => setGuardianEmail(e.target.value)} fullWidth required/>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField id="guardianPhone" label="Guardian Phone" variant="outlined" value={guardianPhone} onChange={(e) => setGuardianPhone(e.target.value)} fullWidth required/>
                        </Grid>

                        
                    </Grid>
                    
                    <Box className="box" sx={{ mt:2, width: 650, maxWidth: '100%',}}>
                        <TextField
                            id="extraInfo"
                            label="Extra Info"
                            multiline
                            rows={4}
                            placeholder=" Any information you would like us to know or be aware of?
                            Please let us know if the athlete has any food requirements or alergies."
                            fullWidth
                            value={message} onChange={(e) => setMessage(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button theme={theme} color='gold' onClick={() => setOpen(false)}>Cancel</Button>
                    <Button theme={theme} color='gold' autoFocus onClick={handleSubmit}>{submitLoading}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FormCamp1