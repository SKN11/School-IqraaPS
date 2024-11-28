import { createContext,useState } from "react";


export const SchoolContext = createContext({
    selected:'',
    setChosenPDFAndName:(choose) => {},
  });

export const SchoolContext1 = createContext({
    selected: []
})


function SchoolContextProvider({ children }) {

    let state = ["fee.pdf","PDF"]  //default values
    let findFindPDFinLocal = localStorage.getItem("SelectedPDF");
    let findFindPDFTitleinLocal = localStorage.getItem("SelectedPDFTitle");
    
    if(findFindPDFinLocal && findFindPDFTitleinLocal){
        state = [findFindPDFinLocal,findFindPDFTitleinLocal];
    }

    
    const [selectedPDF, setSelectedPDF] = useState(state);
    
    
    function setChosenPDFAndName(choose){
        setSelectedPDF(choose);
        localStorage.setItem("SelectedPDF", choose[0]);
        localStorage.setItem("SelectedPDFTitle", choose[1]);
    }
    
    
    const value = {
        selected:selectedPDF,
        setChosenPDFAndName:setChosenPDFAndName
    };
  
    return <SchoolContext.Provider value={value}>{children}</SchoolContext.Provider>;
  }
  
  export default SchoolContextProvider;