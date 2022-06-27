var array=[
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    }]
  
    for(var i=0; i<array.length; i++){
        console.log(i,array[i])
    }
    for (var i in array){
        console.log(array[i].id,array[i].name,array[i].email);
      }
  for(let i of array){
    console.log(i)
  }

  array.forEach(myfunction);
  function myfunction(i){
    console.log(i.name,)
  }
  //Create Your Own Resume data in JSON Format
myResume=[{
    "basics": {
      "name": "Ishwarya",
      "label": "",
      "picture": "",
      "email": "ishwaryabaskaran1012@gmail.com",
      "phone": "1234567890",
      "degree": "B.E Electronics and Communication",
     },
      "location": {
        "address": "Your street address or mailing address",
        "postalCode": "625 221",
        "city": "Madurai",
        "country": "India",
        "state": "Tamil Nadu"
      
     
    },
    "work": {
        "company": "zealeye.ai",
        "position": "R&D team",
        "website": "URL for the employer's website",
        
        
      },
   
    "education":{
        "school": "govt.higher secondray school",
        "area": "T.Ayyan kottai",
       "10th persentage":"80%",
       "12th persentage":"75%",
       "institution":"annai veilankanni's college of engineering",
       "city":"chennai",
       "persentage":"75%",
        
      },
    "awards":{
        "title": "sports day",
        "awarder": "best highjump player",
       
      },
   
    "skills": {
        "name": "Programming Languages",
        "level": "beginner",
        "keywords":  "( 'JavaScript', 'HTML', 'CSS')"
        
      },
    "languages": {
        "language": "Tamil,English,Spanish",
        "fluency": "Tamil"
      },
    "interests": {
        "name": "Sports",
        "keywords": "('Cricket', 'Football', 'handball', 'kabaddi')"
        
      }
    }]
  
