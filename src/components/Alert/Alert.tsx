import type { ReactNode } from "react";

type AlertTypeProps={
    children: React.ReactNode;
    type: "success" | "error"
}
export const Alert = ({children, type="success"}:AlertTypeProps) => {
  return (
    <div
    style={{backgroundColor:type==="success"?"green":"red", color: "black", padding:"10px", borderRadius:"12px", marginBottom:"18px"}}
    >
        {children}
    </div>
  )
}
