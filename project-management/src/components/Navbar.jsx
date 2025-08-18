'use client'
import '../styles/navbar.css'
import data from "@/database/data.json"
import Modal from 'react-modal'
import { useState } from 'react'

export function Navbar() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
   function closeModal() {
    setIsOpen(false);
  }
    return(
        <main className="bg-emerald-200 flex items-center justify-between py-7 navbar-shadow">
            <p className="text-5xl ps-4 text-gray-700 font-bold">Project Management</p>
            <button className='me-4 cursor-pointer' onClick={() => setIsOpen(true)}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
            </button>
            

            <<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
        </main>
    )
}