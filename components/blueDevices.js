import { BleManager, Device } from "react-native-ble-plx";
import { PERMISSIONS, check, request, RESULTS } from "react-native-permissions";

export default async function requestPermission(){
  try{

  const res =  await check(PERMISSIONS.IOS.BLUETOOTH) ;

  if(res == RESULTS.GRANTED){
    console.log("Bluetooth enabled");
  }else if(res == RESULTS.DENIED){
    const req_res = request(PERMISSIONS.IOS.BLUETOOTH); 
    if(req_res == RESULTS.GRANTED){
      console.log("Bluetooth perm just granted")
    }else{
      console.log("Permission denied!")
    }
  }else{
    console.log("Unknown permission"); 
  }
}catch(e){
  console.log("Error: ");
   console.log(e); 
}

}

 