import React, { useContext } from 'react'
import App from '../App'

const Pagination = () => {

    const {page,handlePageChange,totalPages} = useContext(App);
    
      return (
    <div>
        <div>
            { page > 1 &&

                <button onClick={() => handlePageChange(page - 1)}>
                    previous
                </button>
            }

            { page < totalPages && 
            (<button onClick={() => handlePageChange(page+1)}>

                    Next
                </button>)
                
            }

            <p>
                Page{page} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagination