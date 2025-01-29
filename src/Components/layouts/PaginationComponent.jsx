import React from 'react';
import { 
    Pagination, 
    PaginationContent, 
    PaginationItem, 
    PaginationLink, 
    PaginationPrevious, 
    PaginationNext, 
    PaginationEllipsis 
  } from '../../Components/ui/pagination';
  

const PaginationComponent = ({
    currentPage, 
  totalPages, 
  onPageChange 
}) => {

  const generatePageLinks = () => {
    const pageLinks = [];
     // Always show first page
     pageLinks.push(
        <PaginationItem key="first">
          <PaginationLink 
            href="#" 
            onClick={() => onPageChange(1)}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
  
      // Add logic for displaying page numbers with ellipsis
      if (totalPages > 5) {
        // Before current page
        if (currentPage > 3) {
          pageLinks.push(
            <PaginationItem key="start-ellipsis">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }
  
        // Middle pages around current page
        const startMiddle = Math.max(2, currentPage - 1);
        const endMiddle = Math.min(totalPages - 1, currentPage + 1);
  
        for (let i = startMiddle; i <= endMiddle; i++) {
          pageLinks.push(
            <PaginationItem key={`page-${i}`}>
              <PaginationLink 
                href="#" 
                onClick={() => onPageChange(i)}
                isActive={currentPage === i}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
  
        // After current page
        if (currentPage < totalPages - 2) {
          pageLinks.push(
            <PaginationItem key="end-ellipsis">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }
      } else {
        // If total pages are 5 or less, show all page numbers
        for (let i = 2; i <= totalPages; i++) {
          pageLinks.push(
            <PaginationItem key={`page-${i}`}>
              <PaginationLink 
                href="#" 
                onClick={() => onPageChange(i)}
                isActive={currentPage === i}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }
  
      // Always show last page if more than 1 page
      if (totalPages > 1) {
        pageLinks.push(
          <PaginationItem key="last">
            <PaginationLink 
              href="#" 
              onClick={() => onPageChange(totalPages)}
              isActive={currentPage === totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }
  
      return pageLinks;
    };
  
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          
          {generatePageLinks()}
          
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
};

export default PaginationComponent;