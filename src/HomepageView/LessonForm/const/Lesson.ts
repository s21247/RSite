
export default interface IForm {
    fullName: string;
    email: string;
    fullNameParent: string;
    phoneNumber: string;
    languageType: LanguageType | null
    lessonType: LessonType | null,
    checkbox: boolean
}

export enum LessonType {
    TRIAL = "Zajęcia próbne",
    NORMAL = "Kursy językowe"
}

export enum LanguageType {
    SPANISH = "Hiszpański",
    ENGLISH = "Angielski"
}

export enum ClassType {
    VERY_LOW = "5 lat",
    LOW = "6 lat",
    MEDIUM = "klasa 1-3",
    HIGH = "klasa 4-5",
    VERY_HIGH = "klasa 6-7"
}


export const dayOptions = [
    { value: 'poniedziałek / środa', label: 'poniedziałek / środa' },
    { value: 'wtorek / czwartek', label: 'wtorek / czwartek' },
    { value: 'dowolne dni tygodnia', label: 'dowolne dni tygodnia' }
]

export const hourOptions = [
    { value: '15:30-16:30', label: '15:30-16:30' },
    { value: '16:00-17:00', label: '16:00-17:00' },
    { value: '17:00-18:00', label: '17:00-18:00' },
    { value: 'po 18:00', label: 'po 18:00' },
]

export const classOptionsENG = [
    { value: ClassType.MEDIUM, label: ClassType.MEDIUM },
    { value: ClassType.HIGH, label: ClassType.HIGH },
    { value: ClassType.VERY_HIGH, label: ClassType.VERY_HIGH }
]

export const classOptionSPAIN = [
    { value: ClassType.MEDIUM, label: ClassType.MEDIUM },
    { value: ClassType.HIGH, label: ClassType.HIGH },
    { value: ClassType.VERY_HIGH, label: ClassType.VERY_HIGH }
]