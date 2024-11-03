"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";  // Updated import from next/navigation to next/router
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "../Modal";
import Input from "../inputs/Input";
import Image from "next/image";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import Button from "../Button";

interface SettingsModalProps {
    isOpen: boolean,
    onClose: () => void,
    currentUser: User;
}

interface FormValues {
    name: string;
    image: string;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
    isOpen, onClose, currentUser
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        }
    } = useForm<FormValues>({
        defaultValues: {
            name: currentUser.name || 'Unnamed',
            image: currentUser.image || '/images/placeholder.jpg'
        }
    });

    const image = watch('image');

    const handleUpload = (results: CloudinaryUploadWidgetResults) => {
        if (typeof results.info !== 'string' && results.info) {
          setValue('image', results?.info?.secure_url, {
            shouldValidate: true
          });
        }
      }
      

    const onSubmit: SubmitHandler<FormValues> = data => {
        setIsLoading(true);

        axios.post('/api/settings', data)
            .then(() => {
                router.refresh(); // Updated from refresh() to reload()
                onClose();
            })
            .catch(() => toast.error("Something went wrong"))
            .finally(() => setIsLoading(false));
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Profile
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Edit your public information
                        </p>
                        <div className="mt-10 flex flex-col gap-y-8">
                            <Input disabled={isLoading} label="Name" id="name" errors={errors} required register={register('name', { required: 'Name is required' })} />
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <Image width="48" height="48" className="rounded-full" src={image || '/images/placeholder.jpg'} alt="Avatar" />
                                    <CldUploadButton options={{ maxFiles: 1 }} onSuccess={handleUpload} uploadPreset="libv2a7a">
                                        <div className="
                                            flex
                                            justify-center
                                            rounded-md
                                            px-3
                                            py-2
                                            text-sm
                                            font-semibold
                                            focus-visible:outline
                                            focus-visible:outline-2
                                            focus-visible:outline-offset-2
                                            text-gray-900
                                        ">
                                            Change
                                        </div>
                                    </CldUploadButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button disabled={isLoading} secondary onClick={onClose}>
                            Cancel
                        </Button>
                        <Button disabled={isLoading} type="submit">
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default SettingsModal;
