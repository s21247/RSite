import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import IForm, {
    classOptionsENG,
    classOptionSPAIN,
    dayOptions,
    hourOptions,
    LanguageType,
    LessonType
} from "./const/Lesson";
import emailjs from 'emailjs-com';
import * as S from './LessonForm.style'


const LessonForm = () => {
    const {handleSubmit, register, reset, watch, formState: {errors}} = useForm<IForm>({
        defaultValues: {
            fullName: "",
            email: "",
            fullNameParent: "",
            phoneNumber: "",
            languageType: LanguageType.ENGLISH,
            lessonType: LessonType.TRIAL,
            checkbox: false,
        }
    });
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const lessonType = watch('lessonType');
    const languageType = watch('languageType');

    const [selectedDays, setSelectedDays] = useState([dayOptions[0]]);
    const [selectedHours, setSelectedHours] = useState([hourOptions[0]]);
    const [selectedClassENG, setSelectedClassENG] = useState(classOptionsENG[0]);
    const [selectedClassSPAIN, setSelectedClassSPAIN] = useState(classOptionSPAIN[0])

    const handleDayChange = (selectedOptions: any) => {
        setSelectedDays(selectedOptions);
    };

    const handleHourChange = (selectedOptions: any) => {
        setSelectedHours(selectedOptions)
    }
    const handleClassChangeENG = (selectedOption: any) => {
        setSelectedClassENG(selectedOption);
    }

    const handleClassChangeSPAIN = (selectedOption: any) => {
        setSelectedClassSPAIN(selectedOption)
    }

    const onSubmit = async (data: IForm) => {
        if (
            data.fullName &&
            data.email &&
            data.fullNameParent &&
            data.phoneNumber &&
            data.languageType &&
            data.lessonType &&
            data.checkbox &&
            selectedDays.length > 0
        ) {
            let emailData;
            if(data.languageType === LanguageType.ENGLISH){
                emailData = {
                    fullName: data.fullName,
                    email: data.email,
                    fullNameParent: data.fullNameParent,
                    phoneNumber: data.phoneNumber,
                    languageType: data.languageType,
                    lessonType: data.lessonType,
                    classType: selectedClassENG.value,
                    checkbox: data.checkbox,
                    days: selectedDays.map(item => item.label).join(' , '),
                    hours: selectedHours.map(item => item.label).join(' , ')
                }
            } else {
                emailData = {
                    fullName: data.fullName,
                    email: data.email,
                    fullNameParent: data.fullNameParent,
                    phoneNumber: data.phoneNumber,
                    languageType: data.languageType,
                    lessonType: data.lessonType,
                    classType: selectedClassSPAIN.value,
                    checkbox: data.checkbox,
                    days: selectedDays.map(item => item.label).join(' , '),
                    hours: selectedHours.map(item => item.label).join(' , ')
                }
            }
            if(!emailData){
                setIsEmailError(prevState => !prevState)
            }
            emailjs.send(
                process.env.REACT_APP_SERVICE_ID as string,
                process.env.REACT_APP_TEMPLATE_ID as string,
                emailData,
                process.env.REACT_APP_USER_ID as string
            ).then(() => {
                setIsEmailSent(prevState => !prevState)
            }).catch(() => {
                setIsEmailError(prevState => !prevState)
            })
                .finally(() => {
                    reset()
                })
        }else {
            setIsEmailError(prevState => !prevState)
        }
        }
    return (
        <S.StyledForm id="Zapisy" onSubmit={handleSubmit(onSubmit)}>
            <S.Container>
                <S.Title>Zapisy</S.Title>
                <S.HeaderForm>
                    <S.StyledRowInput>
                        <S.Label htmlFor="fullName">Imię dziecka</S.Label>
                        <S.StyledInput
                            {...register('fullName', {
                                required: 'Imię jest wymagane',
                                pattern: {
                                    value: /^[A-Za-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/,
                                    message: 'Imię powinno zawierać litery',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.fullName && errors.fullName.message}</S.StyledSpan>
                    </S.StyledRowInput>
                    <S.StyledRowInput>
                        <S.Label htmlFor="fullNameParent">Imię i nazwisko rodzica</S.Label>
                        <S.StyledInput
                            {...register('fullNameParent', {
                                required: 'Imię i nazwisko powinno zawierać litery',
                                pattern: {
                                    value: /^[A-Za-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+ [A-Za-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/,
                                    message: 'Imię powinno zawierać litery',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.fullNameParent && errors.fullNameParent.message}</S.StyledSpan>
                    </S.StyledRowInput>
                </S.HeaderForm>
                <S.HeaderForm>
                    <S.StyledRowInput>
                        <S.Label htmlFor="phoneNumber">Telefon</S.Label>
                        <S.StyledInput
                            {...register('phoneNumber', {
                                required: 'Nr tel jest wymagany',
                                pattern: {
                                    value: /^[0-9]{9}$/,
                                    message: 'Niepoprawny nr tel',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.phoneNumber && errors.phoneNumber.message}</S.StyledSpan>
                    </S.StyledRowInput>
                    <S.StyledRowInput>
                        <S.Label htmlFor="email">Email</S.Label>
                        <S.StyledInput
                            {...register('email', {
                                required: 'Email jest wymagany',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Niepoprawny adres email',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.email && errors.email.message}</S.StyledSpan>
                    </S.StyledRowInput>
                </S.HeaderForm>
                <S.StyledRow>
                    <S.Label htmlFor="languageType">Na jakie zajęcia chciałbyś się zapisać ?</S.Label>
                    <S.RadioLabel>
                        <S.InputRadio type="radio" value={LanguageType.ENGLISH} {...register('languageType')} defaultChecked={true} />
                        {LanguageType.ENGLISH}
                    </S.RadioLabel>
                    <S.RadioLabel>
                        <S.InputRadio type="radio" value={LanguageType.SPANISH} {...register('languageType')} />
                        {LanguageType.SPANISH}
                    </S.RadioLabel>
                </S.StyledRow>
                <S.StyledRow>
                    <S.Label htmlFor="languageType">Na jaką lekcję chciałbyś się zapisać ?</S.Label>
                    <S.RadioLabel>
                        <S.InputRadio type="radio" value={LessonType.TRIAL} {...register('lessonType')} defaultChecked={true} />
                        {LessonType.TRIAL}
                    </S.RadioLabel>
                    <S.RadioLabelDisabled>
                        <S.InputRadioDisabled type="radio" value={LessonType.NORMAL} disabled={true} {...register('lessonType')}/>
                        {LessonType.NORMAL}
                    </S.RadioLabelDisabled>
                </S.StyledRow>
                {lessonType === LessonType.TRIAL && languageType === LanguageType.ENGLISH ? (
                    <S.StyledRow>
                        <S.Label>Do której klasy chodzi twoje dziecko ?</S.Label>
                        <S.StyledDays
                            key={"english"}
                            defaultValue={selectedClassENG}
                            name="class"
                            options={classOptionsENG}
                            onChange={(selectedOption) => handleClassChangeENG(selectedOption)}
                        />
                    </S.StyledRow>
                ) : (
                    <S.StyledRow>
                        <S.Label>Do której klasy chodzi twoje dziecko ?</S.Label>
                        <S.StyledDays
                            key={"spanish"}
                            defaultValue={selectedClassSPAIN}
                            name="class"
                            options={classOptionSPAIN}
                            onChange={(selectedOption) => handleClassChangeSPAIN(selectedOption)}
                        />
                    </S.StyledRow>
                )}
                <S.StyledRow>
                    <S.Label>Ankieta - preferencje dotyczące zajęć</S.Label>
                    <S.StyledDays key={"days"}
                    defaultValue={selectedDays}
                    isMulti
                    name="days"
                    options={dayOptions}
                    onChange={handleDayChange}
                />
            </S.StyledRow>
                <S.StyledRow>
                    <S.StyledDays key={"hours"}
                        defaultValue={selectedHours}
                        isMulti
                        name="hour"
                        options={hourOptions}
                        onChange={handleHourChange}
                    />
                </S.StyledRow>
                <S.StyledRow>
                    <S.Label htmlFor="checkbox">Zgoda na przetwarzanie danych osobowych</S.Label>
                    <S.StyledRowCheckbox>
                    <S.CheckboxInput
                        key={"rodo"}
                        type="checkbox"
                        id="checkbox"
                        {...register('checkbox', {
                            required: 'Musisz wyrazić zgodę na przetwarzanie danych osobowych',
                        })}
                    />
                        <S.StyledText>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celu zapisu na lekcję próbną z języka angielskiego i/lub hiszpańskiego</S.StyledText>
                    </S.StyledRowCheckbox>
                    <S.StyledSpan>{errors.checkbox && errors.checkbox.message}</S.StyledSpan>
                </S.StyledRow>
                <S.Button type="submit">Prześlij</S.Button>
                {isEmailSent ? <S.StyledSuccess>Email wysłany poprawnie.</S.StyledSuccess> : null}
                {isEmailError ? <S.StyledError>Nie udało się wysłać maila. Spróbuj ponownie później.</S.StyledError> : null}
            </S.Container>
        </S.StyledForm>
    );
};


export default LessonForm;