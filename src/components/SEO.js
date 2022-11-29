import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button,Checkbox, FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[surname,setSurname]=useState('')
    const[age,setAge]=useState('')
    const[job,setJob]=useState('')
    const[yc,setYc]=useState('')
    const[ysv,setYsv]=useState('')
    const[ysv2,setYsv2]=useState('')
    const[date,setDate]=useState('')
    const[date2,setDate2]=useState('')
    const[checkeda,setCheckedA]=useState('')
    const[checkedb,setCheckedB]=useState('')
    const[checkedv,setCheckedC]=useState('')



    const[country,setCountry]=useState('')
    

    const[students,setStudents]=useState([])
     const classes = useStyles();

  
    
    const student={ysv,date,yc}
    console.log(student)
    fetch("http://localhost:8080/contestants/find"+ysv,ysv2,yc,date,date2,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added")
  })


const handleClick=(e)=>{
  fetch("http://localhost:8080/contestants/find")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
}
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Kazanani Bul</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
       
       <h4>Abone sayisi araligi</h4>
      <TextField id="outlined-basic" label="Baslangic" variant="outlined" fullWidth 
      value={ysv}
      onChange={(e)=>setYsv(e.target.value)}
      />
      <TextField id="outlined-basic" label="Bitis" variant="outlined" fullWidth 
      value={ysv2}
      onChange={(e)=>setYsv2(e.target.value)}
      />
      <h4>Tarih arligi</h4>
      <TextField id="outlined-basic" label="Tarihin baslma" variant="outlined" fullWidth 
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      />
      <TextField id="outlined-basic" label="Tarih bitme zamanai" variant="outlined" fullWidth
      value={date2}
      onChange={(e)=>setDate2(e.target.value)}
      />
      <h4>Kategorisi</h4>
       <TextField id="outlined-basic" label="kategorisi" variant="outlined" fullWidth
      value={yc}
      onChange={(e)=>setYc(e.target.value)}
      />

<FormControlLabel value={true} onChange={(e)=> setCheckedA(e.target.value)}
       control={<Checkbox color="primary" />}  label="Youtube'daki ücretsiz eğtimlerin hepsini izledim"labelPlacement="end" />
      <FormControlLabel value={true} onChange={(e)=> setCheckedB(e.target.value)} 
      control={<Checkbox color="primary" />}  label="Udemy'de olan  eğtiminizi satın aldım"labelPlacement="end" />
      <FormControlLabel value={true} onChange={(e)=> setCheckedC(e.target.value)} 
      control={<Checkbox color="primary" />}  label="Hicbir eğtiminizi satın almadım ve izlemedim"labelPlacement="end" /> <br/>

    
      <Button variant="contained" color="secondary" onClick={handleClick}>
      
  Bul
</Button>

    </form>
   
    </Paper>
    <h1>Kazanan</h1>

    <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Name:{student.name}<br/>
         Surname:{student.surname}<br/>
         Age:{student.age}<br/>
         Job:{student.job}<br/>
         Country:{student.country}<br/>

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}