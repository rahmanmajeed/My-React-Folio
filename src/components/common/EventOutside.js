import { useEffect, useRef, useState } from "react";
import useDocumentEvent from "../../hooks/useDocumentEvent";

function EventOutside({initialIsVisible, curRef, children}){
     const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
     const ref = useRef(null);
 
     console.log(curRef)
     const handleHideDropdown = (event) => {
          if (event.key === 'Escape') {
              setIsComponentVisible(false);
          }
      };
  
      const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              setIsComponentVisible(false);
          }
      };

      useDocumentEvent([
          { type: 'click', callback: handleClickOutside },
          { type: 'keydown', callback: handleHideDropdown },
        ])

        return(
             <>
             <div>
                  {children}
             </div>
             </>
        )

}

export default EventOutside;