import React,{useContext} from 'react';
import { SchoolContext } from '../../store/school-site-context';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";


function MyDocument(props) {

  const schoolCtx = useContext(SchoolContext);
  
  window.onpopstate = () => {
    window.location.reload();
  }
  
    const docs = [
      { 
        uri: require("../../utils/pdf/"+schoolCtx.selected[0]) ,  // you can also pass https url  ///props.selected
        fileType: "pdf",
        fileName: schoolCtx.selected[1]
      }
    ];
  
    return <DocViewer 
                documents={docs}
                pluginRenderers={DocViewerRenderers} 
                config={{
                    header: {
                      disableHeader: false,
                      disableFileName: false,
                      retainURLParams: false,
                    },
                    csvDelimiter: ",", // "," as default,
                    pdfZoom: {
                      defaultZoom: 0.4, // 1 as default,
                      zoomJump: 0.2, // 0.1 as default,
                    },
                    pdfVerticalScrollByDefault: false, // false as default
                  }}
                style={{height:100}}
                
            
             />;
  }


export default MyDocument;


//References: https://www.npmjs.com/package/@cyntler/react-doc-viewer
