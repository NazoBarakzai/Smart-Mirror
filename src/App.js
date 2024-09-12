import { useState, useEffect} from 'react';
import './App.css';
import {db} from './firebase-config';
import {collection, getDoc, getDocs, addDoc} from 'firebase/firestore';
import { async } from '@firebase/util';



function App() {
    const [newName, setNewName] = useState("");
    const [newRegNo, setNewRegNo] = useState("");
    const [newDepartment, setNewDepartment] = useState("")
    const [newSemester, setNewSemester] = useState("")
    const [newGpa, setNewGpa] = useState("")
    const [newCgpa, setNewCgpa] = useState("")
    const [newFailSubject, setNewFailSubject] = useState("")
    const [newFees, setNewFees] = useState("")

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {

      await addDoc(usersCollectionRef, {name: newName, regno: newRegNo, department: newDepartment, semester: newSemester
      , gpa:newGpa, cgpa:newCgpa, failsubject:newFailSubject, fees:newFees});

    };

    


    useEffect(()=>{
      const getUsers = async () =>{
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
      getUsers()
    }, [])

    return <div className="App">
      <label>Name</label>
      <input placeholder='Name...'onChange={(event) => {setNewName(event.target.value)
      }}
      />
      <br></br>
      <label>RegNo</label>
      <input placeholder='RegNo...'onChange={(event) =>{setNewRegNo(event.target.value)
      }}
      />
      <br></br>
      <label>Department</label>
      <input placeholder='Department...'onChange={(event) =>{setNewDepartment(event.target.value)
      }}
      />
      <br></br>
      <label>Semester</label>
      <input placeholder='Semester...'onChange={(event) =>{setNewSemester(event.target.value)
      }}
      />
      <br></br>
      <label>Gpa</label>
      <input placeholder='Gpa...'onChange={(event) =>{setNewGpa(event.target.value)
      }}
      />
      <br></br>
      <label>Cgpa</label>
      <input placeholder='Cgpa...'onChange={(event) =>{setNewCgpa(event.target.value)
      }}
      />
      <br></br>
      <label>FailSubject</label>
      <input placeholder='FailSubject...'onChange={(event) =>{setNewFailSubject(event.target.value)
      }}
      />
      <br></br>
      <label>Fees</label>
      <input placeholder='Fees...'onChange={(event) =>{setNewFees(event.target.value)
      }}
      />
      <br></br>
      <br></br>
      <button className='glow-on-hover' onClick={createUser}>Upload Record</button>
      {users.map((user) => {
      return <div>
  
        <table>
  
      {/* <th className='table'>Name: <hr></hr><tr className='dd'>{user.name}</tr></th>
      <th className='table'>RegNo: <hr></hr><tr className='dd'>{user.regno}</tr></th>
      <th className='table'>Department: <hr></hr><tr className='dd'>{user.department}</tr></th>
      <th className='table'>Semester: <hr></hr><tr className='dd'>{user.semester}</tr></th>
      <th className='table'>Gpa: <hr></hr><tr className='dd'>{user.gpa}</tr></th>
      <th className='table'>Cgpa: <hr></hr><tr className='dd'>{user.cgpa}</tr></th>
      <th className='table'>FailSubject: <hr></hr><tr className='dd'>{user.failsubject}</tr></th>
      <th className='table'>Fees: <hr></hr><tr className='dd'>{user.fees}</tr></th> */}
      
  
  
  
        </table>
      
      
      
      
      
      </div>;
  })}
  
  </div>
  }
  



export default App;
