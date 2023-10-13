export function generateStatusColor(status) {
    if (!status) return;
  
    if (status === "approved") return "success";
    else if (status === "missing") return "warning";
    else if (status === "missing-urgent") return "error";
    else if(status.includes('updated')) return "success";
    else return "default";
}


  