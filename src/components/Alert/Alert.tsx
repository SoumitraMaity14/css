// import './Alert.css'
import styles from './Alert.module.css'
type AlertTypeProps={
    children: React.ReactNode;
    type: "success" | "error"
}
export const Alert = ({children, type="success"}:AlertTypeProps) => {
  return (
   
    <div className={`${styles.alert} ${styles[type]}`}
    >
        {children}
    </div>

    
    //   <div className={`alert ${type}`}
    // >
    //     {children}
    // </div>



    // <div
    // style={{backgroundColor:type==="success"?"green":"red", color: "black", padding:"10px", borderRadius:"12px", marginBottom:"18px"}}
    // >
    //     {children}
    // </div>
  )
}
