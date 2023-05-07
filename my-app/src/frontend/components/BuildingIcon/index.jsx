import Image from 'next/image';
export default function BuildingIcon(){
return (
    <div style={{ backgroundColor: '#4FA1C1' , alignItems: 'center',display:'flex', justifyContent:'center', boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius:"20px", width:"70px", height:"70px"}}>
    <Image src="/assets/Predio2.svg" width={32} height={32}  />
    </div >
)
}