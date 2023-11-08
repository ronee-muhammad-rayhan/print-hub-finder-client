import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const BookingModal = ({ service }) => {
    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef < HTMLInputElement > (null);
    const { _id, nameOfService, nameOfServiceProvider, email, price, serviceArea, description, image, imageOfServiceProvider } = service;
    const { user } = useAuth();

    const [specialInstruction, setSpecialInstruction] = useState('');
    const [date, setDate] = useState(null);

    const handleSpecialInstructionChange = (e) => {
        setSpecialInstruction(e.target.value);
    }
    const handleDateChange = e => {
        setDate(e.target.value);
    }

    const handleBooking = () => {
        console.log(specialInstruction, date);

        const booking = {
            nameOfService,
            nameOfServiceProvider,
            nameOfServiceReceiver: user.displayName,
            emailOfServiceProvider: email,
            emailOfServiceReceiver: user.email,
            price,
            serviceArea,
            description,
            date,
            specialInstruction,
            imageOfService: image,
            imageOfServiceProvider,
            imageOfServiceReceiver: user.photoURL,
        }

        axios.post(`http://localhost:5003/bookings/`, booking, { withCredentials: true })
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Book Now</Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">{nameOfService}</h3>
                        <div className="h-48"><img className="w-full h-48  object-contain" src={image} alt="Image Description" /></div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Service Provider&apos;s email" />
                            </div>
                            <TextInput id="email" useRef={emailInputRef} defaultValue={email} placeholder="name@company.com" required readOnly />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" useRef={emailInputRef} defaultValue={user.email} placeholder="name@company.com" required readOnly />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Service Taking Date" />
                            </div>
                            <TextInput id="password" type="date" value={date} onBlur={handleDateChange} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Special Instruction" />
                            </div>
                            <TextInput id="password" type="text" value={specialInstruction} onChange={handleSpecialInstructionChange} placeholder='anything like address , area, customized service plan.' required />
                        </div>
                        <div className="flex justify-between">
                            <h3>Price: ${price}</h3>
                        </div>
                        <div className="w-full">
                            <Button onClick={handleBooking} className='mx-auto'>Purchase This Service</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BookingModal;