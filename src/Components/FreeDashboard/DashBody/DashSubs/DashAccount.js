import '../../freedash.css';
import { useEffect, useRef, useState } from 'react';
import App from '../../../../Firebase/firebase';
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';
import { storage } from '../../../../Firebase/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const DashAccount =()=>{

    const { userDetails }=useSelector((state)=> state.logStatus)
    const { gottenData }=useSelector(state=>state.dashSubFormat)
    const [profilePic, setprofilePic]=useState(null)
    const [profileURL, setprofileURL]=useState('')


    //account details
    let nameRef=useRef('')
    let name=nameRef.current.value
    let emailRef=useRef('')
    let email=emailRef.current.value
    let passwordRef=useRef('')
    let password=passwordRef.current.value
    let profTitleRef=useRef('')
    let profileTitle=profTitleRef.current.value
    let contactRef=useRef('')
    let contacts=contactRef.current.value
    let aboutRef=useRef('')
    let about=aboutRef.current.value
    let quoteRef=useRef('')
    let quote=quoteRef.current.value
    let langRef=useRef('')
    let languages=langRef.current.value
 

    //experience details
    let expRoleRef=useRef('')
    let expRole=expRoleRef.current.value
    let expInstRef=useRef('')
    let expInst=expInstRef.current.value
    let expFromDateRef=useRef('')
    let expFromDate=expFromDateRef.current.value
    let expToDateRef=useRef('')
    let expToDate=expToDateRef.current.value
    let expReferenceRef=useRef('')
    let expReference=expReferenceRef.current.value

    //skill details
    let skillRef=useRef('')
    let accskills=skillRef.current.value
    let skillToolRef=useRef('')
    let accskillTool=skillToolRef.current.value

    //certificate details
    let accCertOfRef=useRef('')
    let accCertOf=accCertOfRef.current.value
    let accCertInstRef=useRef('')
    let accCertInst=accCertInstRef.current.value
    let accCertRef=useRef('')
    let accCertref=accCertRef.current.value
    let accCertDateRef=useRef('')
    let accCertDate=accCertDateRef.current.value
    let [accCertDoc, setaccCertDoc]=useState(null)
    let [certURL, setCertURL]=useState('')


    //CHECKING TEXTBOX STRING TO ENABLE OR DISABLE BUTTIONS
    // const  accDetSavve=Boolean(name)&& Boolean(email)&&Boolean(contacts)&&Boolean(about)&&Boolean(profileTitle)&&Boolean(languages)
    //SEND DATA
    const db = getFirestore(App);
    const accDetSubmit= async()=>{
        const docRefset=doc(db, `users/${userDetails.uid}`)
        await updateDoc(docRefset, {
            "AccountDetails.details": {
                "name": name,
                "email": email,
                "mobileNumbers":contacts,
                "about": about,
                "professionalTitle":profileTitle,
                "favoriteQuote":quote,
                "languagesSpoken":languages,
                "password": password,
                "profilePicture": profileURL
            }
            
        }).then(()=>{
            alert('Account Details Saved')
        }).catch(()=>{
            console.log('Data not saved. Please resave')
        })
    }    
   
    // const accExpSave=Boolean(expRole)&&Boolean(expInst)&&Boolean(expFromDate)&&Boolean(expToDate)&&Boolean(expReference)
    const accRoleSubmit= async ()=>{
        const docRefset=doc(db, `users/${userDetails.uid}`)
        await updateDoc(docRefset, {
            "AccountDetails.experiences": arrayUnion({
                "id": nanoid(),
                "rolePlayed": expRole,
                "institution": expInst,
                "time":{
                    "start": expFromDate,
                    "end": expToDate
                },
                "references": expReference
            })            
        }).then(()=>{
            alert('Experiences Saved')
        }).catch((err)=>{
            console.log('Data not saved. Please resave'+err.message)
        })
    }


    // const accSkillSave=Boolean(accskills)&&Boolean(accskillTool)
    const accSkillSubmit= async ()=>{
        const docRefset=doc(db, `users/${userDetails.uid}`)
        await updateDoc(docRefset, {
            "AccountDetails.skills": arrayUnion({
                "id": nanoid(),
                "skill": accskills,
                "tools": accskillTool
            })            
        }).then(()=>{
            alert('Skills Saved')
        }).catch((err)=>{
            console.log('Data not saved. Please resave'+err.message)
        })
    }


    // const accCertSave=Boolean(accCertOf)&&Boolean(accCertInst)&&Boolean(accCertref)&&Boolean(accCertDate)&&Boolean(accCertDoc)
    const accCertSubmit=async()=>{
        const docRefset=doc(db, `users/${userDetails.uid}`)
        await updateDoc(docRefset, {
            "AccountDetails.certificates": arrayUnion({
                "id": nanoid(),
                "certOf": accCertOf,
                "Inst": accCertInst,
                "reference": accCertref,
                "dateIssued": accCertDate,
                "pictureOfCert": certURL
            })            
        }).then(()=>{
            alert('Experiences Saved')
        }).catch((err)=>{
            console.log('Data not saved. Please resave'+err.message)
        })
    }


    //RETRIEVE DATA

    let getName=gottenData.AccountDetails.details.name
    let getEmail=gottenData.AccountDetails.details.email
    let getmobileNumber=gottenData.AccountDetails.details.mobileNumbers
    let getAbout=gottenData.AccountDetails.details.about
    let profTitle=gottenData.AccountDetails.details.professionalTitle
    let favQuote=gottenData.AccountDetails.details.favoriteQuote
    let lang=gottenData.AccountDetails.details.languagesSpoken
    let pass=gottenData.AccountDetails.details.password

    //RETRIEVE EXPERIENCES
    const experiencesData=gottenData.AccountDetails.experiences
    const experienceTab=experiencesData.map((experience)=>{
        let expID=experience.id
        return <div className='expTab' key={expID} /*onClick={showSelectedSkill.bind(this, expID)}*/ >
                    <span className='expTabhead'>{experience.rolePlayed}</span><br/>
                    <span className='expTabdate'>{experience.time.start}</span>
                </div>
    })
    

    //NOTICE THE ORDER FROM HERE
    const skillsData=gottenData.AccountDetails.skills
    let skillsDataClone=[...skillsData]
    //this first
    let gottenSkill
    const deleteSelectedSkill=(skillsDataClone, theSkillID)=>{
        gottenSkill=skillsDataClone.filter(skillData=>skillData.id!==theSkillID)
        console.log(gottenSkill+'in the showSelectedSkill handler')
    }

    //then this second
    //SHOW SELECTED SKILL
    const skillTab=skillsDataClone.map((skill)=>{
        let theSkillID=skill.id
        return <div className='expTab' key={theSkillID} onClick={deleteSelectedSkill.bind(this, theSkillID)}>
                    <span className='expTabhead' >{skill.skill}</span><br/>
                    <span className='expTabdate'>{skill.tools}</span>
                </div>
    })
    //ENDS HERE



    //RETRIEVE SKILLS
    
    

    //RETRIEVE CERTIFICATES
    const certsData=gottenData.AccountDetails.certificates
    const certTab=certsData.map((cert)=>{
        return <div className='expTab' key={cert.id}>
        <span className='expTabhead'>{cert.certOf}</span><br/>
        <span className='expTabdate'>{cert.Inst}</span>
        <img src={certURL} alt='certURL'/>
    </div>
    })


    const submitProfilePic=()=>{
        const userProfilePicRef=ref(storage, `${userDetails.uid}/profilePicture`)
        uploadBytes(userProfilePicRef, profilePic).then((snapshot)=>{
            console.log('upload successful')
            getDownloadURL(userProfilePicRef)
            .then((url)=>{
                setprofileURL(url)
            })
        })

    }

    const submitCertPic=()=>{
        const userCertPicRef=ref(storage, `${userDetails.uid}/certPic`)
        uploadBytes(userCertPicRef, accCertDoc).then((snapshot)=>{
            console.log('upload successful')
            getDownloadURL(userCertPicRef)
            .then((url)=>{
                setCertURL(url)
            })
        })
    }



   
    return ( 
        <div className = "dashaccount" >
            <h3>Account Details</h3>
            <div>
                <form className='accDetails' onSubmit={(e)=> e.preventDefault()}>
                    <h2>Your Account Information</h2>
                    <div className='dashaccinput'><label htmlFor="Name">Name:</label><textarea ref={nameRef} cols="1" required rows="1" placeholder={getName || 'Your legal name'} /></div>
                    <div className='dashaccinput'><label htmlFor="Email">Email:</label><textarea ref={emailRef} cols="1" required rows="1" placeholder={getEmail || 'A valid email address'}/></div>
                    <div className='dashaccinput'><label htmlFor="Password">Password:</label><textarea ref={passwordRef} cols="1" rows="1" placeholder={pass || 'For account recovery'}/></div><button>Show password</button>
                    <div className='dashaccinput'><label htmlFor="Name">Professional Title:</label><textarea ref={profTitleRef} required cols="1" rows="1" placeholder={profTitle || 'eg. Welder'} /></div>
                    <div className='dashaccinput'><label htmlFor="Contacts">Contact Numbers:</label><textarea ref={contactRef} required cols="1" rows="1" placeholder={getmobileNumber || 'Please provide a valid number'} /></div>
                    <div className='dashaccinput'><label htmlFor="About">About:</label><textarea ref={aboutRef} cols="1" required rows="5" placeholder={getAbout || 'A short introduction about you'}/></div>
                    <div className='dashaccinput'><label htmlFor="favquote">Favorite Quote:</label><textarea ref={quoteRef} cols="1" rows="2" placeholder={favQuote || 'A wisdom quote from you'}/></div>
                    <div className='dashaccinput'><label htmlFor="lang">Languages I speak fluently:</label><textarea ref={langRef} required cols="1" rows="1" placeholder={lang || 'Language you speak'}/></div>
                    <div className='dashaccinput'>
                                    <label htmlFor='ExpAdded'>Profile Picture </label>
                                    <div className='expArea'>
                                        <img src={profilePic} alt="" className='profilePicStyle'/>
                                    </div>
                                </div>
                            <div className='dashaccinput'>
                                    <label htmlFor="Picture">Profile Pictures:</label>
                                    <input accept=".png, .jpg, .jpeg" onChange={(e)=>setprofilePic(e.target.files)} type="file" name="certfile" id="certfile"/>
                                    <button onClick={submitProfilePic}>Submit Picture</button>
                            </div>
                    <button type='submit' onClick={accDetSubmit} /*disabled={!accDetSavve}*/>Save Details</button>
                </form>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div className='experience'>
                        <h2>Experience</h2>
                        <div className='expArea'>
                            <label htmlFor='ExpAdded'>Experiences Added: </label>
                            <div className='expTabs'>
                                {experienceTab}
                            </div>
                        </div>
                                    <div className='dashaccinput'>
                                        <label htmlFor='role'>Role Played: </label>
                                        <textarea name="role" id="role" cols="1" rows="2" required placeholder='What you achieved' ref={expRoleRef} />
                                    </div>
                                    <div className='dashaccinput'>
                                        <label htmlFor="institution">Institution</label>
                                        <textarea name="inst" id="inst" cols="1" rows="1" required ref={expInstRef} placeholder='Where you got the experience' /><br/>
                                    </div>
                                    <div className='dashaccinput'>
                                        <label htmlFor="fromdate">From:  </label>
                                        <input type="date" name="fromdate" id="fromdate" required ref={expFromDateRef}/>
                                        <label htmlFor="todate">To:  </label>
                                        <input type="date" name="todate" id="todate" required ref={expToDateRef}/><br/>
                                    </div>
                                    <div className='dashaccinput'>
                                        <label htmlFor="ref">References:</label>
                                        <textarea name="" required id="" cols="1" rows="10" ref={expReferenceRef} placeholder='Please list people who can testify of your work. Add their contact details too. Be sure to discuss with them before placing their details here' />
                                    </div>
                                    <div><button onClick={accRoleSubmit} /*disabled={!accExpSave}*/>Add Experience</button><button>Delete this Experience</button></div>
                                </div><br/>
                        </form>    
                        <form onSubmit={(e)=> e.preventDefault()}>
                            <div className='skills'>
                                <h2>Skills You Have</h2>
                                <div className='expArea'>
                                    <label htmlFor='ExpAdded'>Skills Added: </label>
                                    <div className='expTabs'>
                                        {skillTab}
                                    </div>
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="skill">skill</label>
                                    <textarea ref={skillRef} required name="skill" id="skill" cols="30" rows="1" placeholder='eg. Graphic Design' />
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="skilltool">Tools you use for this skill</label>
                                    <textarea ref={skillToolRef} required name="skilltool" id="" cols="30" rows="2"placeholder='eg. Photoshop. Please seperate by Comma'  />
                                </div>
                                <button onClick={accSkillSubmit} /*disabled={!accSkillSave}*/>Add New Skill</button><button>Delete this Skill</button>
                            </div><br/>
                        </form>    
                        <form onSubmit={(e)=> e.preventDefault()}>
                            <div className='certs'>
                                <h2>Your Certificates</h2>
                                <div className='expArea'>
                                    <label htmlFor='ExpAdded'>Certificates Added: </label>
                                    <div className='expTabs'>
                                        {certTab}
                                    </div>
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="certs">Certificate of:</label>
                                    <textarea ref={accCertOfRef} required name="certtitle" id="certtitle" cols="1" rows="1" />
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="Inst">institution/Event</label>
                                    <textarea ref={accCertInstRef} required name="inst" id="inst" cols="30" rows="1" />
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="ref">Please add references</label>
                                    <textarea ref={accCertRef} required name="" id="" cols="1" rows="10" />
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="dateissued">Date Issued</label>
                                    <input ref={accCertDateRef} required type="date" name="dateissued" id="dateissued"/>
                                </div>
                                
                            
                                <div className='dashaccinput'>
                                    <label htmlFor='ExpAdded' >Certificate Picture </label>
                                    <div>
                                        <p>Certificate here</p>
                                    </div>
                                </div>
                                <div className='dashaccinput'>
                                    <label htmlFor="certfile">Upload a copy of the certificate</label>
                                    <input accept=".png, .jpg, .jpeg" onChange={(e)=>setaccCertDoc(e.target.files)} required type="file" name="certfile" id="certfile"/>
                                    <button onClick={submitCertPic}>Submit Picture</button>
                                </div>
                                <button onClick={accCertSubmit} /*disabled={!accCertSave}*/>Add New Certificate</button><button>Delete this certificate</button>
                            </div>
                        </form>
                </div>
                <button>Edit Profile</button>
                <button>Verify Your Profile</button>
            </div>
        );
}        
export default DashAccount;