"use client";

import useRentModel from "@/app/hooks/useRentModel";
import Model from "./Model";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputes/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputes/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../inputes/Counter";
import ImageUpload from "../inputes/ImageUpload";
import Input from "../inputes/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 3,
    IMAGES = 4,
    DESCRIPTION = 2,
    PRICE = 5,
}

const RentModel = () => {
    const router = useRouter();

    const RentModel = useRentModel();
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: "",
            location: null,
            guestCount: 1, //tinh so nguoi choi
            roomCount: 1, //tinh so san
            bathroomCount: 1, //tinh phan loai san
            imageSrc: "",
            price: "",
            description: "",
        },
    });

    const category = watch("category");
    const location = watch("location");
    const guestCount = watch("guestCount");
    const roomCount = watch("roomCount");
    const bathroomCount = watch("bathroomCount");
    const imageSrc = watch("imageSrc");

    const Map = useMemo(
        () =>
            dynamic(() => import("../Map"), {
                ssr: false,
            }),
        [location]
    );

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true,
        });
    };

    const onBack = () => {
        setStep((value) => value - 1);
    };
    const onNext = () => {
        setStep((value) => value + 1);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // Check if the user is on the last step
        if (step !== STEPS.PRICE) {
            return onNext();
        }
        setIsLoading(true);

        axios
            .post("/api/listings", data)
            .then(() => {
                toast.success("Welcome to EGGO, Chúc mừng bạn đã đăng ký dịch vụ thành công.");
                router.refresh();
                reset();
                setStep(STEPS.CATEGORY);
                RentModel.onClose();
            })
            .catch(() => {
                toast.error("Ohh no! Vui lòng thử lại");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return "Tạo";
        }
        return "Tiếp theo";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }
        return "Quay lại";
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                center={false}
                title="Bạn muốn cho thuê sân cho môn thể thao nào?"
                subtitle="Chọn danh mục bạn muốn tạo"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto">
                {categories.map((item) => {
                    return (
                        <div key={item.label} className="col-span-1">
                            <CategoryInput
                                onClick={(category) => setCustomValue("category", category)}
                                label={item.label}
                                selected={category === item.label}
                                icon={item.icon}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );

    // Location Step
    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    center={false}
                    title="Bạn đến từ quốc gia nào?"
                    subtitle=""
                />
                <CountrySelect
                    onChange={(value) => setCustomValue("location", value)}
                    value={location}
                />
                <Map center={location?.latlng} />
            </div>
        );
    }

    // Info Step (Guests, Rooms, Bathrooms) Step 3
    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    center={false}
                    title="Tổng số sân bạn đang có"
                    subtitle=""
                />
                <hr />
                <Counter
                    title="Tổng số sân bạn đang có"
                    subtitle="Bạn có bao nhiêu Sân?"
                    value={roomCount}
                    onChange={(value) => setCustomValue("roomCount", value)}
                />
                <hr />
                <Counter
                    title="Số người cho 1 Sân"
                    subtitle="Số người cho 1 Sân?"
                    value={guestCount}
                    onChange={(value) => setCustomValue("guestCount", value)}
                />
            </div>
        );
    }

    //Images Step 4
    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    center={false}
                    title="Hãy thêm hình ảnh sân của bạn"
                    subtitle="Hình ảnh đẹp nhất để thu hút người thuê"
                />
                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomValue("imageSrc", value)}
                />
            </div>
        );
    }

    // // Description Step 5 (Description)
    // if (step === STEPS.DESCRIPTION) {
    //   bodyContent = (
    //     <div className="flex flex-col gap-8">
    //       <Heading
    //         center={false}
    //         title="How would you describe your place?"
    //         subtitle="Write a detailed description to attract guests to your place
    //         and let them know what to expect"
    //       />
    //       <Input
    //         id="title"
    //         label="Title"
    //         disabled={isLoading}
    //         register={register}
    //         errors={errors}
    //         required
    //         placeholder="Ex: Cozy 2 Bedroom Apartment in the heart of Paris"
    //       />
    //       <hr />
    //       <Input
    //         id="description"
    //         label="Description"
    //         disabled={isLoading}
    //         register={register}
    //         errors={errors}
    //         required
    //         placeholder="Ex: Our apartment is located in the heart of Paris,"
    //       />
    //     </div>
    //   );
    // }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    center={false}
                    title="Hãy mô tả địa chỉ chi tiết để khách hàng có thể dễ dàng tìm thấy bạn!"
                    subtitle="VD: Sân Cầu Lông Victory - 33 Đ. Số 12, Trường Thọ, Thủ Đức, HCM"
                />
                <Input
                    id="title"
                    label="Tên Sân"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    placeholder="VD: 33 Đ. Số 12, Trường Thọ, Thủ Đức, Thành phố Hồ Chí Minh"
                />
                <hr />
                <Input
                        id="description"
                        label="Địa chỉ"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        placeholder="Ex: Our apartment is located in the heart of Paris,"
                      />

            </div>
        );
    }

    // Price Step 6 (Price)
    if (step === STEPS.PRICE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    center={false}
                    title="Thiết lập giá của bạn"
                    subtitle="Giá tính theo giờ đối với 1 sân thể thao"
                />
                <Input
                    id="price"
                    label="Giá theo giờ"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    formatPrice
                    type="number"
                    placeholder="Ex: 100"
                />
            </div>
        );
    }

    return (
        <div className="">
            <Model
                title="Trở thành đối tác của EGGO"
                isOpen={RentModel.isOpen}
                onClose={RentModel.onClose}
                onSubmit={handleSubmit(onSubmit)}
                actionLabel={actionLabel}
                secondaryActionLabel={secondaryActionLabel}
                secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
                body={bodyContent}
            />
        </div>
    );
};

export default RentModel;
