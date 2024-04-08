import { collection, doc,onSnapshot, orderBy, setDoc,query } from "firebase/firestore";
import {auth,db} from "../config/firebaseconfig"

export const getUserDetail =()=>{
    return new Promise((resolve , reject)=>{
  const unsubscribe = auth.onAuthStateChanged((userCred)=>{
    if(userCred){
        const userData = userCred.providerData[0];
       //console.log(userData);

     const unsubscribe = onSnapshot(doc(db,"users",userData?.uid),(_doc)=>{
      if(_doc.exists()){
        resolve(_doc.data());
      }
      else{
        setDoc(doc(db , "users" , userData?.uid),userData).then(()=>{
          resolve(userData);
        })
      }
     });
 return unsubscribe;




    }
    
    
    else{
        reject(new Error("user not authenticated"));
    }

    unsubscribe();
  });
    });

    
}

export const getTemplates =()=>{
  return new  Promise ((resolve, reject)=>{
    const TemplateQuery = query(
      collection (db,"templates"),
      orderBy("timestamp","asc")
    );

    const unsubscribe = onSnapshot(TemplateQuery,(querySnap)=>{
      const templates = querySnap.docs.map((doc)=>doc.data());
      resolve(templates)
    });
    return unsubscribe;
  })
}