'use client';

import useRentModal from "@/app/hooks/useRentModal";

import Modal from "./Modal";
import { useMemo, useState } from "react";

enum STEPS {
    LOCATION = 1,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal();

    const [step,setStep] = useState(STEPS.LOCATION);

    const onBack = () => {
        setStep((value) => value -1);
    };

    const onNext = () => {
        setStep((value) => value +1);
    }

    const actionLabel = useMemo(()=>{
        if (step === STEPS.PRICE){
           return 'Create';
        }

        return 'Next';
    },[step]);


    const secondaryActionLabel = useMemo(()=>{
        if (step === STEPS.PRICE){
           return undefined;
        }
        return 'Back';
    },[step]);

    return(
        <Modal
        isOpen= {rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        title="Pg Locator your home!"
        />
    );
}

export default RentModal;