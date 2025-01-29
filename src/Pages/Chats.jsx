import React, { useMemo, useState } from 'react';
import PaginationComponent from '../Components/layouts/PaginationComponent';

  


const Chats = () => {
    const [currentPage, setCurrentPage] = useState(1);

    
    


    return (
        <div>
           <h1>Chats</h1> 
           
           <PaginationComponent 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
        </div>
    );
};

export default Chats;