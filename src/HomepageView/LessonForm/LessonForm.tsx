import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import IForm, {ClassType, LanguageType, LessonType} from "./const/Lesson";
import emailjs from 'emailjs-com';
import * as S from './LessonForm.style'



const LessonForm = () => {
    const {handleSubmit, register, reset, watch, formState: {errors}} = useForm<IForm>({
        defaultValues: {
            fullName: "",
            email: "",
            fullNameParent: "",
            phoneNumber: "",
            languageType: null,
            lessonType: null,
            classType: null
        }
    });
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const lessonType = watch('lessonType');
    const languageType = watch('languageType');

    const onSubmit = async (data: IForm) => {
        if (
            data.fullName &&
            data.email &&
            data.fullNameParent &&
            data.phoneNumber &&
            data.languageType &&
            data.lessonType &&
            data.classType
        ) {
            const emailData = {
                fullName: data.fullName,
                email: data.email,
                fullNameParent: data.fullNameParent,
                phoneNumber: data.phoneNumber,
                languageType: data.languageType,
                lessonType: data.lessonType,
                classType: data.classType
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
                .finally(() => reset())
        }else {
            setIsEmailError(prevState => !prevState)
        }
        }

    return (
        <S.StyledForm id="pricing" onSubmit={handleSubmit(onSubmit)}>
            <S.Container>
                <S.Title>Zapisy</S.Title>
                <S.HeaderForm>
                    <S.StyledRow>
                        <S.Label htmlFor="fullName">Imię dziecka</S.Label>
                        <input
                            {...register('fullName', {
                                required: 'Imię jest wymagane',
                                pattern: {
                                    value: /^[A-Za-z]+ [A-Za-z]+$/,
                                    message: 'Imię powinno zawierać litery',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.fullName && errors.fullName.message}</S.StyledSpan>
                    </S.StyledRow>
                    <S.StyledRow>
                        <S.Label htmlFor="fullNameParent">Imię rodzica</S.Label>
                        <input
                            {...register('fullNameParent', {
                                required: 'Imię powinno zawierać litery',
                                pattern: {
                                    value: /^[A-Za-z]+ [A-Za-z]+$/,
                                    message: 'Imię powinno zawierać litery',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.fullNameParent && errors.fullNameParent.message}</S.StyledSpan>
                    </S.StyledRow>
                </S.HeaderForm>
                <S.HeaderForm>
                    <S.StyledRow>
                        <S.Label htmlFor="phoneNumber">Telefon</S.Label>
                        <input
                            {...register('phoneNumber', {
                                required: 'Nr tel jest wymagany',
                                pattern: {
                                    value: /^[0-9]{9}$/,
                                    message: 'Niepoprawny nr tel',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.phoneNumber && errors.phoneNumber.message}</S.StyledSpan>
                    </S.StyledRow>
                    <S.StyledRow>
                        <S.Label htmlFor="email">Email</S.Label>
                        <input
                            {...register('email', {
                                required: 'Email jest wymagany',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Niepoprawny adres email',
                                },
                            })}
                        />
                        <S.StyledSpan>{errors.email && errors.email.message}</S.StyledSpan>
                    </S.StyledRow>
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
                    <S.RadioLabel>
                        <S.InputRadio type="radio" value={LessonType.NORMAL} {...register('lessonType')} />
                        {LessonType.NORMAL}
                    </S.RadioLabel>
                </S.StyledRow>
                {lessonType === LessonType.TRIAL && languageType === LanguageType.ENGLISH ? (
                    <S.StyledRow>
                        <label>Do której klasy chodzi twoje dziecko ?</label>
                        <S.StyledSelect {...register("classType")}>
                            <S.StyledOption value={ClassType.MEDIUM}>{ClassType.MEDIUM}</S.StyledOption>
                            <S.StyledOption value={ClassType.HIGH}>{ClassType.HIGH}</S.StyledOption>
                            <S.StyledOption value={ClassType.VERY_HIGH}>{ClassType.VERY_HIGH}</S.StyledOption>
                        </S.StyledSelect>
                    </S.StyledRow>
                ) : (
                    <S.StyledRow>
                        <label>Do której klasy chodzi twoje dziecko ?</label>
                        <S.StyledSelect {...register("classType")}>
                            <S.StyledOption value={ClassType.VERY_LOW}>{ClassType.VERY_LOW}</S.StyledOption>
                            <S.StyledOption value={ClassType.LOW}>{ClassType.LOW}</S.StyledOption>
                            <S.StyledOption value={ClassType.MEDIUM}>{ClassType.MEDIUM}</S.StyledOption>
                            <S.StyledOption value={ClassType.HIGH}>{ClassType.HIGH}</S.StyledOption>
                            <S.StyledOption value={ClassType.VERY_HIGH}>{ClassType.VERY_HIGH}</S.StyledOption>
                        </S.StyledSelect>
                    </S.StyledRow>
                )}
                <S.Button type="submit">Prześlij</S.Button>
                {isEmailSent ? <S.StyledSuccess>Email wysłany poprawnie.</S.StyledSuccess> : null}
                {isEmailError ? <S.StyledError>Nie udało się wysłać maila. Spróbuj ponownie później.</S.StyledError> : null}
            </S.Container>
        </S.StyledForm>
    );
};


export default LessonForm;